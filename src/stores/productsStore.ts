// productsStore.ts
import { writable, derived } from 'svelte/store';

// Reactive variable for search input, initialized outside the component to be used in derived stores.
export let searchInput = writable('');

export const activeFilters = writable({
    isMissingImages: false,
    isMissingDeliveryDates: false,
    isMissingPrices: false,
    isSoldOut: false,
    isCancelled: false,
    isMissingSizes: false,
    isMissingImStyles: false,
});

const mockProducts = [
    {
        productId: "MW0MW13720DW5",
        productDescription: "WCC TOMMY LOGO HOODY",
        prices: 139.9,
        deliveryDates: "2021-02-01",
        isMissingImages: false,
        isMissingDeliveryDates: false,
        isMissingPrices: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: false,
        isMissingImStyles: true,
        imageUrl: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_F_C4201?wid=150&hei=250',
        imageFrontUrl: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_F_C4201',
        imageBackUrl: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_B_C4201',
        imageDetailUrl: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_D_C4201',
        imageDetail2Url: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_D2_C4201',
        imageDetail3Url: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_D3_C4201',
        imageFabricScanUrl: 'http://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW13720DW5_S_C4201',
    },
    {
        productId: "MW0MW11596YBR",
        productDescription: "TOMMY LOGO SWEATSHIRT",
        prices: 119.9,
        deliveryDates: "2021-01-01",
        isMissingImages: true,
        isMissingDeliveryDates: false,
        isMissingPrices: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: false,
        isMissingImStyles: false,
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_F_C4201?wid=150&hei=250',
        imageFrontUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_F_C4201',
        imageBackUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_B_C4201',
        imageDetailUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_D_C4201',
        imageDetail2Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_D2_C4201',
        imageDetail3Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_D3_C4201',
        imageFabricScanUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW11596YBR_S_C4201',
    },
    {
        productId: "MW0MW177700A4",
        productDescription: "1985 REGULAR POLO",
        prices: 59.9,
        deliveryDates: "2021-04-01",
        isMissingImages: true,
        isMissingDeliveryDates: false,
        isMissingPrices: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: false,
        isMissingImStyles: false,
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_F_C4201?wid=150&hei=250',
        imageFrontUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_F_C4201',
        imageBackUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_B_C4201',
        imageDetailUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_D_C4201',
        imageDetail2Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_D2_C4201',
        imageDetail3Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_D3_C4201',
        imageFabricScanUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW177700A4_S_C4201',
    },
    {
        productId: "MW0MW358040KP",
        productDescription: "CL STRETCH TWILL GINGHAM",
        prices: 79.9,
        deliveryDates: "2021-04-01",
        isMissingImages: true,
        isMissingDeliveryDates: false,
        isMissingPrices: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: false,
        isMissingImStyles: true,
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_F_C4201?wid=150&hei=250',
        imageFrontUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_F_C4201',
        imageBackUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_B_C4201',
        imageDetailUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_D_C4201',
        imageDetail2Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_D2_C4201',
        imageDetail3Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_D3_C4201',
        imageFabricScanUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_S_C4201',
    },
    {
        productId: "MW0MW31814DBZ",
        productDescription: "IM SATEEN SOLID SF SHIRT",
        prices: 89.9,
        deliveryDates: "2021-02-01",
        isMissingImages: true,
        isMissingDeliveryDates: false,
        isMissingPrices: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: false,
        isMissingImStyles: true,
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW31814DBZ_F_C4201?wid=150&hei=250',
        imageFrontUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW31814DBZ_F_C4201',
        imageBackUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW31814DBZ_B_C4201',
        imageDetailUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW31814DBZ_D_C4201',
        imageDetail2Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW31814DBZ_D2_C4201',
        imageDetail3Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW31814DBZ_D3_C4201',
        imageFabricScanUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW31814DBZ_S_C4201',
    },
    {
        productId: "MW0MW35460DBZ",
        productDescription: "GROSSGRAIN FLAG TEE",
        prices: 59.9,
        deliveryDates: "2021-03-01",
        isMissingImages: true,
        isMissingDeliveryDates: false,
        isMissingPrices: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: false,
        isMissingImStyles: true,
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW35460DBZ_F_C4201?wid=150&hei=250',
        imageFrontUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW35460DBZ_F_C4201',
        imageBackUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW35460DBZ_B_C4201',
        imageDetailUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW35460DBZ_D_C4201',
        imageDetail2Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW35460DBZ_D2_C4201',
        imageDetail3Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW35460DBZ_D3_C4201',
        imageFabricScanUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW35460DBZ_S_C4201',
    },
];

// Svelte store to hold the products
export const productsStore = writable(mockProducts);

// Derived store to handle filtered products
export const filteredProducts = derived(
    [productsStore, activeFilters],
    ([$productsStore, $activeFilters]) => {
        // Check if any filters are active
        const isAnyFilterActive = Object.values($activeFilters).some(value => value);

        return $productsStore.filter(product => {
            // If no filters are active, include all products
            if (!isAnyFilterActive) {
                return true;
            }

            // Check each filter; if it's active and the product attribute is true, include the product
            return ($activeFilters.isMissingImages && product.isMissingImages) ||
                   ($activeFilters.isMissingDeliveryDates && product.isMissingDeliveryDates) ||
                   ($activeFilters.isMissingPrices && product.isMissingPrices) ||
                   ($activeFilters.isSoldOut && product.isSoldOut) ||
                   ($activeFilters.isCancelled && product.isCancelled) ||
                   ($activeFilters.isMissingSizes && product.isMissingSizes) ||
                   ($activeFilters.isMissingImStyles && product.isMissingImStyles);
        });
    }
);




// Derived store to handle searched products
export const searchedProducts = derived(
    [filteredProducts, searchInput],
    ([$filteredProducts, $searchInput]) => {
        console.log('searchedProducts: Search input:', $searchInput);
        const searchLower = $searchInput.trim().toLowerCase();
        if (!searchLower) return $filteredProducts; // if search input is empty, return all filtered products
        return $filteredProducts.filter(product =>
            product.productDescription.toLowerCase().includes(searchLower) ||
            product.productId.toLowerCase().includes(searchLower)
        );
    }
);
