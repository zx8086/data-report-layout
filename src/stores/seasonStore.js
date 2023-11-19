// src/stores/seasonStore.js
import { writable } from 'svelte/store';

function createSeasonStore() {
    const localStorageKey = 'currentSeason';
    const { subscribe, set } = writable(localStorage.getItem(localStorageKey) || 'C42');
    
    return {
        subscribe,
        setSeason: (season) => {
            localStorage.setItem(localStorageKey, season);
            set(season);
        }
    };
}

export const seasonStore = createSeasonStore();
