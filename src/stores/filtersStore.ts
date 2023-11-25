// filtersStore.ts
import { writable } from 'svelte/store';
import type { Filters } from '../lib/types';

export const activeFilters = writable<Filters>({
    isMissingImages: false,
    isMissingDeliveryDates: false,
    isMissingPrices: false,
    isSoldOut: false,
    isCancelled: false,
    isMissingSizes: false,
    isMissingImStyles: false
});
