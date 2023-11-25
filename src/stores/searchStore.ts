// searchStore.ts
import { derived } from 'svelte/store';
import { productsStore } from './productsStore';
import { searchInput } from './searchInputStore';
import { activeFilters } from './filtersStore'; // Import your filters store

export const searchedProducts = derived(
    [productsStore, searchInput, activeFilters],
    ([$productsStore, $searchInput, $activeFilters]) => {
        const searchLower = $searchInput.trim().toLowerCase();
        if (!searchLower) {
            // If search input is empty, return all products sorted by your criteria
            return $productsStore
                .filter(product => (
                    // Apply your filter conditions based on $activeFilters
                    (!$activeFilters.isImageAvailable || !product.isImageAvailable) &&
                    (!$activeFilters.isDeliveryDatesAvailable || product.isDeliveryDatesAvailable) &&
                    (!$activeFilters.isPricesAvailable || !product.isPricesAvailable) &&
                    (!$activeFilters.isSoldOut || !product.isSoldOut) &&
                    (!$activeFilters.isCancelled || !product.isCancelled) &&
                    (!$activeFilters.isMissingSizes || !product.isMissingSizes) &&
                    (!$activeFilters.isMissingImStyles || !product.isMissingImStyles)
                ))
                .sort((a, b) => {
                    // Sort logic for each filter in descending order
                    if ($activeFilters.isPricesAvailable) {
                        return a.isPricesAvailable - b.isPricesAvailable;
                    }
                    if ($activeFilters.isDeliveryDatesAvailable) {
                        return b.isDeliveryDatesAvailable - a.isDeliveryDatesAvailable;
                    }
                    if ($activeFilters.isImageAvailable) {
                        return a.isImageAvailable - b.isImageAvailable;
                    }
                });
        }
        return $productsStore.filter(product =>
            product.productDescription.toLowerCase().includes(searchLower) ||
            product.productId.toLowerCase().includes(searchLower)
        );
    }
);
