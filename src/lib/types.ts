export interface Product {
    isMissingImages: boolean;
    isMissingDeliveryDates: boolean;
    isMissingPrices: boolean;
    isSoldOut: boolean;
    isCancelled: boolean;
    isMissingSizes: boolean;
    isMissingImStyles: boolean;
    imageUrl: string;
    productDescription: string;
    productId: string;
}

// Define the type for a brand
export interface Brand {
    label: string;
    value: string;
    imageUrl: string;
}

// Define the type for movies
export interface Movies {
    [key: string]: { title: string; videoUrl: string }[];
}

// Define the type for the theme store state
export interface ThemeStoreState {
    theme: string;
    brands: Brand[];
    movies: Movies;
}

// Define the type for the filters store state
export interface Filters {
    isMissingImages: boolean;
    isMissingDeliveryDates: boolean;
    isMissingPrices: boolean;
    isSoldOut: boolean;
    isCancelled: boolean;
    isMissingSizes: boolean;
    isMissingImStyles: boolean;
}