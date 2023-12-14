<script lang="ts">
    import type { PageData } from './$types';
    import { selectedProduct } from '../../../../stores/productStore';
    import { activeFilters } from '../../../../stores/filtersStore';
    import { searchInput, searchedProducts } from '../../../../stores/productsStore';
    import Product from '../../../../components/Product.svelte';
    import ProductImages from '../../../../components/ProductImages.svelte';

    export let data: PageData;

    let showFilters = false;

    // Function to toggle filter box visibility
    function toggleFilters() {
        showFilters = !showFilters;
    }

    // Function to clear all filters
    function clearFilters() {
        activeFilters.set({
            isMissingImages: false,
            isMissingDeliveryDates: false,
            isMissingPrices: false,
            isSoldOut: false,
            isCancelled: false,
            isMissingSizes: false,
            isMissingImStyles: false,
        });
    }

    // You can define a function to handle the error
    function handleImageError(event: any) {
    event.target.src = '/img/not-found.png';
    // Prevents the fallback image from triggering an infinite loop if it's also missing
    event.target.onerror = null;
    }

let inputElement: HTMLInputElement | null = null;

function handleFocus() {
    if (inputElement) inputElement.placeholder = 'TYPE A NAME OR NUMBER';
}

function handleBlur() {
    if (inputElement) inputElement.placeholder = 'SEARCH';
}

function handleSelectProduct(product) {
    selectedProduct.set(product);
    console.log("Main Content click -",product);
}

// Function to handle filter button click
function handleFilterButtonClick() {
    activeFilters.update(filters => {
        filters.isMissingImages = !filters.isMissingImages;
        return filters;
    });
}

</script>

<div class="flex h-full">

    <!-- Left Sidebar -->
    <div class="flex flex-col w-1/5 h-full mx-4 overflow-y-auto transition-opacity bg-gray-100 sidebar-left" class:hidden={$selectedProduct === null}>
        <!-- Close Button at the top-right corner of the sidebar -->
        <button class="self-end" on:click={() => selectedProduct.set(null)}>
            <!-- SVG Close Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        </button>
        {#if $selectedProduct}
            <!-- Scrollable container for ProductImages -->
            <div class="flex flex-col items-center w-full overflow-y-auto" style="max-height: 90vh;">
                <!-- ProductImages component will show the images here -->
                {#key $selectedProduct.productId}
                <ProductImages product={$selectedProduct} />
                {/key}
            </div>
        {/if}
    </div>

    <!-- Center Content -->
    <div class="flex flex-col flex-grow"> 
                <div class="flex justify-between px-4 py-2 fixed-header">
                    <!-- Filter button and search input wrapper with flex and space-x classes -->
                    <div class="flex items-center space-x-4">
                        <!-- Filter button -->
                        <button on:click={toggleFilters} class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </button>
                        <div class="relative flex-auto pt-16">
                            <!-- Filter box -->
                        <div class={`absolute top-0 left-0 z-10 bg-white p-4 rounded-lg shadow-md ${showFilters ? 'block' : 'hidden'}`}>
                            <!-- Filter form content -->
                                                <form>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" bind:checked={$activeFilters.isMissingImages}>
                            <span>Missing Images</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" bind:checked={$activeFilters.isMissingPrices}>
                            <span>Missing Prices</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" bind:checked={$activeFilters.isMissingDeliveryDates}>
                            <span>Missing Delivery Dates</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" bind:checked={$activeFilters.isMissingSizes}>
                            <span>Missing Sizes</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" bind:checked={$activeFilters.isCancelled}>
                            <span>Cancelled Options</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" bind:checked={$activeFilters.isSoldOut}>
                            <span>Sold Out Options</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" bind:checked={$activeFilters.isMissingImStyles}>
                            <span>Missing IM Styles</span>
                        </label>
                        <button type="button" class="mt-4 text-blue-500 hover:text-blue-700" on:click={clearFilters}>
                            Clear All Filters
                        </button>
                    </form>
                        </div>
                        </div>
                        
                    </div>

                    <!-- Input Search element -->
                    <div class="relative w-96"> <!-- Set a fixed width for your search bar -->
                        <input bind:this={inputElement} type="text" placeholder="Search" class="w-full p-2 pl-10 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-0"
                        on:input={event => searchInput.set(event.target.value)}
                        on:focus={handleFocus}
                        on:blur={handleBlur} />
                    </div>
                </div>

                <!-- Products Grid -->
                <div class="flex-grow"> <!-- This takes up the remaining space -->
                    <div class="grid grid-cols-6 gap-x-1 gap-y-6 justify-items-center">
                        {#if $searchedProducts.length === 0}
                            <p>No products found.</p>
                        {:else}
                            {#each $searchedProducts as product}
                                <div class="flex flex-col items-center">
                                    <!-- Product component -->
                                    <Product {product} on:select={() => handleSelectProduct(product)}/>
                                </div>
                            {/each}
                        {/if}
                    </div>  
                </div>
            

    </div>

    <!-- Right Sidebar -->
    <div class="flex-none w-1/5 mx-4 bg-gray-100 transnoition-opacity flexflex-none sidebar-right" class:hidden={$selectedProduct === null}>
        <div class="flex flex-col rounded-md">
            <div> <button class="close-btn" on:click={() => selectedProduct.set(null)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg></button>
        </div>
        {#if $selectedProduct}
        <div class="mx-6 mb-5 bg-blue-500 rounded-md shadow-lg h-80">Price: {$selectedProduct.prices}</div>
        <div class="mx-6 mb-5 rounded-md shadow-lg h-80 bg-rose-500">Delivery Date: {$selectedProduct.deliveryDates}</div>
        <div class="mx-6 mb-5 bg-yellow-600 rounded-md shadow-lg h-80">Misc..</div>
        {/if}
    </div>
    </div>

</div>