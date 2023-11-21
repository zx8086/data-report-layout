<script lang="ts">
    import type { PageData } from './$types';
    import { selectedProduct } from '../../../../stores/productStore';
    import { productsStore, filteredProducts, searchedProducts } from '../../../../stores/productsStore';

    import Product from '../../../../components/Product.svelte';

    export let data: PageData;

    // You can define a function to handle the error
    function handleImageError(event: any) {
    event.target.src = '/img/not-found.png';
    // Prevents the fallback image from triggering an infinite loop if it's also missing
    event.target.onerror = null;
    }

    let inputElement: any;

    function handleFocus() {
        inputElement.placeholder = 'TYPE A NAME OR NUMBER';
    }

    function handleBlur() {
        inputElement.placeholder = 'SEARCH';
    }

    function handleSelectProduct(product) {
        selectedProduct.set(product);
        console.log("Main Content click -",product);
    }

    // Reactive variable for the search input
    let searchInput = '';

    // Function to update search input
    function updateSearchInput(event) {
        searchInput.set(event.target.value);
    }

    // Function to handle filter button click (example for missing image)
    function handleFilterButtonClick() {
        activeFilters.update(filters => {
            filters.missingImage = !filters.missingImage;
            return filters;
        });
    }

</script>

<div class="flex h-full">
    <!-- Left Sidebar -->
    <div class="w-1/5 mx-6 transition-opacity bg-gray-100 sidebar-left" class:hidden={$selectedProduct === null}>
        <div class="flex flex-col rounded-md">
            <button class="flex justify-end close-btn" on:click={() => selectedProduct.set(null)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            </button>
            {#if $selectedProduct}
            <div class="flex rounded-md">
                <div class="flex flex-col justify-center mx-6 rounded-md shadow-lg">
                    <img class="mb-5 rounded-md" src={$selectedProduct.imageFrontUrl} alt="Front image" on:error={handleImageError}>
                    <img class="mb-5 rounded-md" src={$selectedProduct.imageBackUrl} alt="Back image" on:error={handleImageError}>
                    <img class="mb-5 rounded-md " src={$selectedProduct.imageDetailUrl} alt="Detail image" on:error={handleImageError}>
                    <img class="mb-5 rounded-md " src={$selectedProduct.imageDetail2Url} alt="Detail image" on:error={handleImageError}>
                    <img class="mb-5 rounded-md" src={$selectedProduct.imageDetail3Url} alt="Detail image" on:error={handleImageError}>
                    <img class="mb-5 rounded-md" src={$selectedProduct.imageFabricScanUrl} alt="Fabric scan image" on:error={handleImageError}>
                </div>
            </div>
            {/if}
        </div>
        <div>
        </div>
    </div>

    <!-- Center Content -->
    <div class="flex-grow bg-gray-600">
        <div class="flex justify-center bg-white">
            <div class="flex flex-col">
                <div class="flex justify-between mb-10 row-span-full">
                    <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>
                    <div>
                        <div class="relative">
                        <!-- Input element -->
                        <input bind:this={inputElement} type="text" placeholder="Search" class="absolute right-0 p-2 pl-10 transition-all duration-300 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-0 w-36 focus:w-96"
                        on:focus={handleFocus}
                        on:blur={handleBlur}/>
                    </div></div>
                </div>
                <!-- Products Grid -->
                <div class="grid grid-cols-6 gap-x-1 gap-y-6 justify-items-center">
                    {#each $searchedProducts as product}
                        <div class="flex flex-col items-center">
                            <!-- Replace the div with the Product component -->
                            <Product
                                product={product}
                                on:select={() => handleSelectProduct(product)}
                            />
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <!-- Right Sidebar -->
    <div class="w-1/5 mx-6 transition-opacity bg-gray-100 sidebar-right" class:hidden={$selectedProduct === null}>
        <div class="flex flex-col rounded-md">
            <div> <button class="close-btn" on:click={() => selectedProduct.set(null)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg></button>
        </div>
        {#if $selectedProduct}
        <div class="mx-6 mb-5 bg-blue-500 rounded-md shadow-lg h-80">Price: {$selectedProduct.price}</div>
        <div class="mx-6 mb-5 rounded-md shadow-lg h-80 bg-rose-500">Delivery Date: {$selectedProduct.deliveryDate}</div>
        <div class="mx-6 mb-5 bg-yellow-600 rounded-md shadow-lg h-80">Misc..</div>
        {/if}
    </div>
</div>
</div>
