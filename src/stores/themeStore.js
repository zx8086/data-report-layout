// src/stores/themeStore.js
import { writable } from 'svelte/store';

export const createThemeStore = () => {
    const { subscribe, set, update } = writable({
    theme: 'TH', // default theme
    brands: [
        { label: 'Tommy Hilfiger', value: 'TH', imageUrl: '/th/tommy-hilfiger-logo.png' },
        { label: 'Calvin Klein', value: 'CK', imageUrl: '/th/tommy-hilfiger-logo.png' },
        { label: 'Nike', value: 'NIKE', imageUrl: '/th/tommy-hilfiger-logo.png' }
    ],
    movies: {
        'TH': [
        { title: 'Movie 1', videoUrl: '/th.mp4' },
    ],
        'CK': [
        { title: 'Movie A', videoUrl: '/ck.mp4' },
        ],
        'NIKE': [
            { title: 'Movie X', videoUrl: '/nike.mp4' },
        ],
    },
});

  if (typeof window !== 'undefined') {
    // We are in the browser, localStorage is available
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      update(store => {
        store.theme = storedTheme;
        return store;
      });
    }

    return {
      subscribe,
      setTheme: (themeValue) => {
        localStorage.setItem('theme', themeValue);
        update(store => {
          store.theme = themeValue;
          return store;
        });
      },
      nextBrand: () => {
        update(store => {
          let currentIndex = store.brands.findIndex(brand => brand.value === store.theme);
          let nextIndex = (currentIndex + 1) % store.brands.length;
          let nextBrand = store.brands[nextIndex];
          localStorage.setItem('theme', nextBrand.value);
          store.theme = nextBrand.value;
          return store;
        });
      },
      previousBrand: () => {
        update(store => {
          let currentIndex = store.brands.findIndex(brand => brand.value === store.theme);
          let prevIndex = (currentIndex - 1 + store.brands.length) % store.brands.length;
          let prevBrand = store.brands[prevIndex];
          localStorage.setItem('theme', prevBrand.value);
          store.theme = prevBrand.value;
          return store;
        });
      },
      // ... any other methods you want to add
    };
  } else {
    // We are on the server, just return the store without localStorage logic
    return {
      subscribe,
      set: (themeValue) => {
        set(themeValue);
      },
      // ... any other methods you want to add
    };
  }
};

export const themeStore = createThemeStore();
