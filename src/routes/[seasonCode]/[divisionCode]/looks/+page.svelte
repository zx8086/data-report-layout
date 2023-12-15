<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = '/img/not-found.png';
        target.onerror = null; // Prevents the fallback image from triggering an infinite loop if it's also missing
    }

    function handleLookClick(lookNumber: number) {
        // Handle the click event for the look button here
        console.log(`Look ${lookNumber} clicked`);
    }
</script>

<div class="flex flex-row justify-between h-full">
    <!-- Left Sidebar -->
    <aside class="w-1/5 bg-slate-200">
        Left Sidebar
    </aside>

    <!-- Main Content -->
    <main class="w-3/5 bg-gray-600">
        <div class="bg-white">
            <div class="max-w-2xl px-4 py-8 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {#each Array(40).fill() as _, i (i)}
                        <div class="relative group">
                            <div class="overflow-hidden bg-gray-200 rounded-md aspect-w-1 aspect-h-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img 
                                    src="http://s7g10.scene7.com/is/image/TommyHilfigerEU/PF24_MSW_DEL2_Look19_0025_HFR2" 
                                    alt={`Look ${i+1}`} 
                                    class="object-cover object-top w-full h-full lg:w-full lg:h-full" 
                                    on:error={handleImageError} 
                                />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <button 
                                            class="focus:outline-none focus:ring focus:border-blue-300"
                                            on:click={() => handleLookClick(i+1)}
                                        >
                                            Look {i+1}
                                        </button>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">This is where the trend goes....</p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </main>

    <!-- Right Sidebar -->
    <aside class="w-1/5 bg-green-200">
        Right Sidebar
    </aside>
</div>
