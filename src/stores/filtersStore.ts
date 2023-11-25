// filtersStore.ts
import { writable } from 'svelte/store';

export const activeFilters = writable({
    isImageAvailable: false,
    isDeliveryDatesAvailable: false,
    isPricesAvailable: false,
    isSoldOut: false,
    isCancelled: false,
    isMissingSizes: false,
    isMissingImStyles: false,
});