// productsStore.ts
import { writable, derived } from 'svelte/store';

// Define a store for active filters. This should be outside of the component script.
export const activeFilters = writable({
    missingImage: false,
    missingDeliveryDate: false,
});

// Mock product data with all necessary attributes, logic on Couchbase Side.
const mockProducts = [
    {
        productId: "MW0MW13720DW5",
        productDescription: "WCC TOMMY LOGO HOODY",
        isImageAvailable: true,
        isDeliveryDateAvailable: true,
        isPriceAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
        isMissingImStyles: [],
        imageUrl: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_F_C4201?wid=150&hei=250',
    },
    {
        productId: "MW0MW11596YBR",
        productDescription: "TOMMY LOGO SWEATSHIRT",
        isImageAvailable: true,
        isDeliveryDateAvailable: true,
        isPriceAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
        isMissingImStyles: [],
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_F_C4201?wid=150&hei=250',
    },
    {
        productId: "MW0MW177700A4",
        productDescription: "1985 REGULAR POLO",
        isImageAvailable: true,
        isDeliveryDateAvailable: true,
        isPriceAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
        isMissingImStyles: [],
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_F_C4201?wid=150&hei=250',
    },
    {
        productId: "MW0MW358040KP",
        productDescription: "CL STRETCH TWILL GINGHAM RF SHRT",
        isImageAvailable: true,
        isDeliveryDateAvailable: true,
        isPriceAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
        isMissingImStyles: [],
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_F_C4201?wid=150&hei=250',
    },
];


// Svelte store to hold the products
export const productsStore = writable(mockProducts);

// Reactive variable for search input, initialized outside the component to be used in derived stores.
export let searchInput = writable('');

// Derived store to handle filtered products
export const filteredProducts = derived([productsStore, activeFilters], ([$productsStore, $activeFilters]) => {
    return $productsStore.filter(product => {
    if ($activeFilters.missingImage && !product.isImageAvailable) return false;
    if ($activeFilters.missingDeliveryDate && !product.isDeliveryDateAvailable) return false;
    // ... other filter checks
    return true;
});
});

// Derived store to handle search functionality
export const searchedProducts = derived([filteredProducts, searchInput], ([$filteredProducts, $searchInput]) => {
    if ($searchInput.trim() === '') return $filteredProducts;
    return $filteredProducts.filter(product =>
    product.productDescription.toLowerCase().includes($searchInput.toLowerCase())
    );
});
