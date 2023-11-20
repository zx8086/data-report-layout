<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    // You can define a function to handle the error
    function handleImageError(event) {
    event.target.src = '/img/not-found.png';
    // Prevents the fallback image from triggering an infinite loop if it's also missing
    event.target.onerror = null;
}

let inputElement;

function handleFocus() {
  inputElement.placeholder = 'TYPE A NAME OR NUMBER';
}

function handleBlur() {
  inputElement.placeholder = 'SEARCH';
}

</script>

<div class="flex flex-row justify-between h-full">
    <!-- Left Sidebar -->
    <div class="bg-slate-200 w-1/5">
        Left Sidebar
    </div>
    <!-- Main Content -->
    <div class="bg-gray-600 flex flex-col">
        <div class="flex flex-row justify-between">
            <div class="bg-red-300 w-1/5">Filters</div>
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
            <div class="">
                <div class="mt-6 grid grid-cols-7 gap-x-6 gap-y-6 ">
                    {#each {length: 40} as _, i}
                    <div class="group relative">
                        <div class="card overflow-hidden rounded-md bg-gray-400 group-hover:opacity-75">
                            <img src="http://s7g10.scene7.com/is/image/TommyHilfigerEU//MW0MW13720DW5_F_C4201?wid=150&hei=250" alt="This is an image" class="" on:error={handleImageError}>
                        </div>
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
    <div class="bg-green-200 w-1/5 grid grid-cols-1">
        Right Sidebar
        <div class="flex flex-col">
            <div class="flex-none h-1/4 bg-gray-200 rounded-md shadow-lg mb-5 mx-1 overflow-y-auto">
                {#each {length: 12} as _, i}
                <div class="flex justify-center">
                    <img class="my-2" src="http://s7g10.scene7.com/is/image/TommyHilfigerEU//MW0MW13720DW5_F_C4201" alt="This is an image" on:error={handleImageError}>
                </div>
                {/each}
            </div>
            <div class="flex-initial rounded-md shadow-lg h-80 mb-5 mx-1  bg-blue-500">Prices</div>
            <div class="flex-initial rounded-md shadow-lg h-80 mb-5 mx-1  bg-rose-500">Delivery Dates</div>
            <div class="flex-initial rounded-md shadow-lg h-80 mb-5 mx-1  bg-tommy-purple">Misc..</div>
        </div>
    </div>
</div>
