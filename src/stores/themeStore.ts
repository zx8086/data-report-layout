// src/stores/themeStore.ts
import { writable } from 'svelte/store';

// Define the type for a brand
interface Brand {
    label: string;
    value: string;
    imageUrl: string;
}

// Define the type for movies
interface Movies {
    [key: string]: { title: string; videoUrl: string }[];
}

// Define the type for the theme store state
interface ThemeStoreState {
    theme: string;
    brands: Brand[];
    movies: Movies;
}

export const createThemeStore = () => {
    const { subscribe, set, update } = writable<ThemeStoreState>({
        theme: 'TH',
        brands: [
            { label: 'Tommy Hilfiger', value: 'TH', imageUrl: '/th/tommy-hilfiger-logo.png' },
            { label: 'Calvin Klein', value: 'CK', imageUrl: '/ck/calvin-klein-logo.svg' },
            { label: 'Nike', value: 'NIKE', imageUrl: '/nike/nike-logo.svg' }
        ],
        movies: {
            'TH': [{ title: 'Tommy Hilfiger', videoUrl: '/th.mp4' }],
            'CK': [{ title: 'Calvin Klein', videoUrl: '/ck.mp4' }],
            'NIKE': [{ title: 'Nike', videoUrl: '/nike.mp4' }],
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
    }

    return {
        subscribe,
        setTheme: (themeValue: string) => {
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
        // any other methods you might want to add...
    };
};

export const themeStore = createThemeStore();