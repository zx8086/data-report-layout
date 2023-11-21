<script lang="ts">
    import type { PageData } from './$types';
    import { selectedProduct } from '../../../../stores/productStore';
    
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
            <div class="flex">
                <div class="grid grid-cols-6 gap-x-1 gap-y-6 justify-items-center">
                    {#each {length: 40} as _, i}
                    <div class="flex flex-col items-center">
                        <div class="card group-hover:opacity-75" on:click={handleSelectProduct}>
                            <img src="http://s7g10.scene7.com/is/image/TommyHilfigerEU//MW0MW13720DW5_F_C4201?wid=150&hei=250" alt="This is an image" on:error={handleImageError}>
                            <!-- <Product {product} on:select={handleSelectProduct} /> -->
                        </div>
                        <div class="text-sm">MW0MW13720DW5</div>
                        <div class="text-sm">WCC TOMMY LOGO HOODY</div>
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
