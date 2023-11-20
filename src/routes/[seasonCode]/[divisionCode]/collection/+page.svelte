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

<div class="flex flex-row justify-between h-full">
    <!-- Left Sidebar -->
    <div class="bg-slate-200 w-1/5">
        Left Sidebar
    </div>
    <!-- Main Content -->
    <div class="bg-gray-600 flex">
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
    <div class="bg-green-200 w-1/5">
        Right Content
    </div>
</div>
