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

<div class="flex flex-row justify-between h-full">
    <!-- Left Sidebar -->
    <div class="sidebar-left w-1/5 transition-opacity" class:hidden={$selectedProduct === null}>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg> -->
           Left Sidebar
           <div class="flex-none h-1/4 bg-gray-200 rounded-md shadow-lg mb-5 mx-1 overflow-y-auto">
            <button class="close-btn" on:click={() => selectedProduct.set(null)}>Close</button>
            {#each {length: 12} as _, i}
            <div class="flex justify-center">
                <img class="my-2" src="http://s7g10.scene7.com/is/image/TommyHilfigerEU//MW0MW13720DW5_F_C4201" alt="This is an image" on:error={handleImageError}>
            </div>
            {/each}
        </div>
    </div>
    <!-- Main Content -->
    <div class="bg-gray-600 flex flex-col">
        <div class="flex flex-row justify-between"> <!-- "flex justify-center flex-grow" -->
            <div class="bg-red-300 w-2/5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
            </div>
            <div class=" bg-amber-200">Middle</div>
            <div class="flex relative bg-orange-500 w-2/5">
                <div class="flex flex-row">
                    <div>            <!-- Icon from Heroicons -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <div>
                                <!-- Input element -->
            <input bind:this={inputElement} type="text" placeholder="Search" class="transition-all duration-300 ease-in-out border-2 border-gray-300 focus:border-blue-500 focus:ring-0 w-36 focus:w-96 p-2 pl-10 rounded-md absolute right-0"
                on:focus={handleFocus}
                on:blur={handleBlur}
            />
                </div>
                </div>


            </div>
        </div>

        <div class="bg-white">
            <div class="flex justify-center">
                <div class="mt-6 grid grid-cols-7 gap-x-6 gap-y-6 ">
                    {#each {length: 40} as _, i}
                    <div class="group relative">
                        <div class="card overflow-hidden rounded-md bg-gray-400 group-hover:opacity-75" on:click={handleSelectProduct}>
                            <img src="http://s7g10.scene7.com/is/image/TommyHilfigerEU//MW0MW13720DW5_F_C4201?wid=150&hei=250" alt="This is an image" class="" on:error={handleImageError}>
                            <!-- <Product {product} on:select={handleSelectProduct} /> -->
                        </div>
                        <div class="text-sm">MW0MW13720DW5</div>
                        <div class="text-sm">WCC TOMMY LOGO HOODY</div>
                        <div class="mt-4 flex">
                        <div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
    </div>
    <!-- Right Content -->
    <div class="sidebar-right w-1/5 transition-opacity" class:hidden={$selectedProduct === null}>
        Right Sidebar
        <button class="close-btn" on:click={() => selectedProduct.set(null)}>Close</button>
        <div class="flex flex-col justify-start">
            <div class="flex rounded-md shadow-lg h-80 mb-5 mx-1  bg-blue-500">Prices</div>
            <div class="flex rounded-md shadow-lg h-80 mb-5 mx-1  bg-rose-500">Delivery Dates</div>
            <div class="flex rounded-md shadow-lg h-80 mb-5 mx-1  bg-yellow-600">Misc..</div>
        </div>
    </div>
</div>
