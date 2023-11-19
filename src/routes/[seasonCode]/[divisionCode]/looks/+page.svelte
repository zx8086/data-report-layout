<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    // You can define a function to handle the error
    function handleImageError(event) {
    event.target.src = '/img/not-found.png';
    // Prevents the fallback image from triggering an infinite loop if it's also missing
    event.target.onerror = null;
}
</script>

<div class="flex flex-row justify-between h-full ">
    <!-- Left Sidebar -->
    <div class="bg-slate-200 w-1/5">
        Left Sidebar
    </div>
    <!-- Main Content -->
    <div class="bg-gray-600 w-full">
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {#each {length: 40} as _, i}
                    <div class="group relative">
                        <div class="card-th aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="http://s7g10.scene7.com/is/image/TommyHilfigerEU/PF24_MSW_DEL2_Look19_0025_HFR2" alt="This is an image" class="h-full w-full object-cover object-top lg:h-full lg:w-full" on:error={handleImageError}>
                        </div>
                        <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    Look 54
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">This is where the trend goes....</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
    </div>
    <!-- Right Content -->
    <div class="bg-green-200 w-1/5">
        Right Content
    </div>
</div>
