// src/stores/breadcrumbStore.js
import { writable } from 'svelte/store';

function createBreadcrumbStore() {
    const { subscribe, set, update } = writable([]);
    
    return {
        subscribe,
        setBreadcrumbs: (crumbs) => set(crumbs),
        addCrumb: (crumb) => {
            update(crumbs => [...crumbs, crumb]);
        },
        reset: () => set([])
    };
}

export const breadcrumbStore = createBreadcrumbStore();
