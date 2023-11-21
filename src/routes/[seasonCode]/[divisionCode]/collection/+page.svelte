<script lang="ts">
    import type { PageData } from './$types';
    import { selectedProduct } from '../../../../stores/productStore';
    import { productsStore, filteredProducts, searchedProducts } from '../../../../stores/productsStore';

    
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

    // function handleSelectProduct(event) {
    //     selectedProduct.set(event.detail.productKey);
    // }

    function handleSelectProduct() {
        // Set to your dummy product key
        selectedProduct.set("MW0MW13720DW5");
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
    <div class="sidebar-left w-1/5 transition-opacity bg-gray-100 mb-5 mx-6" class:hidden={$selectedProduct === null}>
        <div class="flex flex-col h-1/4 rounded-md overflow-y-auto">
            <button class="close-btn flex justify-end" on:click={() => selectedProduct.set(null)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            </button>
            {#each {length: 12} as _, i}
            <div class="flex justify-center w-full">
                <img class="my-2" src="http://s7g10.scene7.com/is/image/TommyHilfigerEU//MW0MW13720DW5_F_C4201" alt="This is an image" on:error={handleImageError}>
            </div>
            {/each}
        </div>
    </div>

    <!-- Center Content -->
    <div class="bg-gray-600 flex-grow">
        <div class="bg-white flex justify-center">
            <div class="flex flex-col">
                <div class="flex row-span-full justify-between mb-10">
                    <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>
                    <div>
                        <div class="relative">
                        <!-- Input element -->
                        <input bind:this={inputElement} type="text" placeholder="Search" class="transition-all duration-300 ease-in-out border-2 border-gray-300 focus:border-blue-500 focus:ring-0 w-36 focus:w-96 p-2 pl-10 rounded-md absolute right-0"
                        on:focus={handleFocus}
                        on:blur={handleBlur}/>
                    </div></div>
                </div>
<!-- Products Grid -->
<div class="grid grid-cols-6 gap-x-1 gap-y-6 justify-items-center">
    {#each $searchedProducts as product}
      <div class="flex flex-col items-center">
        <div class="card group-hover:opacity-75" on:click={() => handleSelectProduct(product.productId)}>
          <img src={product.isImageAvailable ? product.imageUrl : '/img/not-found.png'}
              alt={product.productDescription} on:error={handleImageError}>
        </div>
        <div class="text-sm">{product.productId}</div>
        <div class="text-sm">{product.productDescription}</div>
      </div>
    {/each}
  </div>
    </div>
</div>
    </div>

    <!-- Right Sidebar -->
    <div class="sidebar-right w-1/5 transition-opacity bg-gray-100 mx-6" class:hidden={$selectedProduct === null}>
        <div class="flex flex-col rounded-md">
            <div> <button class="close-btn" on:click={() => selectedProduct.set(null)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg></button></div>
            <div class="rounded-md shadow-lg h-80 mb-5 mx-6  bg-blue-500">Prices</div>
            <div class="rounded-md shadow-lg h-80 mb-5 mx-6  bg-rose-500">Delivery Dates</div>
            <div class="rounded-md shadow-lg h-80 mb-5 mx-6  bg-yellow-600">Misc..</div>
        </div>
    </div>
</div>
