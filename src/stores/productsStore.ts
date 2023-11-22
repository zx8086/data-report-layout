// productsStore.ts
import { writable, derived } from 'svelte/store';

// Reactive variable for search input, initialized outside the component to be used in derived stores.
export let searchInput = writable('');

export const activeFilters = writable({
    missingImages: false,
    missingDeliveryDates: false,
    missingPrices: false,
    soldOutOptions: false,
    cancelledOptions: false,
    missingSizes: false,
    missingImStyles: false,
});

// Mock product data with all necessary attributes, logic on Couchbase Side.
const mockProducts = [
    {
        productId: "MW0MW13720DW5",
        productDescription: "WCC TOMMY LOGO HOODY",
        prices: 139.9,
        deliveryDates: "2021-02-01",
        isImageAvailable: true,
        isDeliveryDatesAvailable: true,
        isPricesAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
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
        isImageAvailable: true,
        isDeliveryDatesAvailable: true,
        isPricesAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
        isMissingImStyles: true,
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
        isImageAvailable: true,
        isDeliveryDatesAvailable: true,
        isPricesAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
        isMissingImStyles: true,
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
        productDescription: "CL STRETCH TWILL GINGHAM RF SHRT",
        prices: 79.9,
        deliveryDates: "2021-04-01",
        isImageAvailable: true,
        isDeliveryDatesAvailable: true,
        isPricesAvailable: true,
        isSoldOut: false,
        isCancelled: false,
        isMissingSizes: true,
        isMissingImStyles: true,
        imageUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_F_C4201?wid=150&hei=250',
        imageFrontUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_F_C4201',
        imageBackUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_B_C4201',
        imageDetailUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_D_C4201',
        imageDetail2Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_D2_C4201',
        imageDetail3Url: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_D3_C4201',
        imageFabricScanUrl: 'https://s7g10.scene7.com/is/image/TommyHilfigerEU/MW0MW358040KP_S_C4201',
    },
];

// Svelte store to hold the products
export const productsStore = writable(mockProducts);

// Derived store to handle filtered products
export const filteredProducts = derived(
    [productsStore, activeFilters],
    ([$productsStore, $activeFilters]) => {
        return $productsStore.filter(product => {
            if ($activeFilters.isImageAvailable && product.isImageAvailable) return false;
            if ($activeFilters.isDeliveryDatesAvailable && product.isDeliveryDatesAvailable) return false;
            if ($activeFilters.isPricesAvailable && product.isPricesAvailable) return false;
            if ($activeFilters.soldOut && product.isSoldOut) return false;
            if ($activeFilters.cancelled && product.isCancelled) return false;
            if ($activeFilters.missingSizes && product.isMissingSizes) return false;
            if ($activeFilters.isMissingImStyles && product.isMissingImStyles) return false;
            return true;
        });
    }
);

export const searchedProducts = derived(
    [filteredProducts, searchInput],
    ([$filteredProducts, $searchInput]) => {
        const searchLower = $searchInput.trim().toLowerCase();
        if (!searchLower) return $filteredProducts; // if search input is empty, return all filtered products
        return $filteredProducts.filter(product =>
            product.productDescription.toLowerCase().includes(searchLower) ||
            product.productId.toLowerCase().includes(searchLower)
        );
    }
);

