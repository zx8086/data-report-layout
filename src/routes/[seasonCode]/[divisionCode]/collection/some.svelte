<script lang="ts">
    // ... Your existing script code ...
</script>

<style>
    /* Add custom styles here */
    .fixed-header {
        /* This will make the header fixed in size */
        flex: none;
    }
</style>

<div class="flex h-full">

    <!-- Left Sidebar -->
    <!-- ... Your existing left sidebar code ... -->

    <!-- Center Content -->
    <div class="flex flex-col flex-grow"> <!-- Changed to flex-col for vertical stacking -->
        <!-- Fixed header with filter and search bar -->
        <div class="flex items-center justify-between px-4 py-2 bg-white fixed-header">
            <!-- Filter button and search input wrapper with flex and space-x classes -->
            <div class="flex items-center space-x-4">
                <!-- ... Filter button ... -->

                <!-- Filter box -->
                <!-- ... Filter box ... -->
            </div>

            <!-- Input Search element -->
            <div class="relative w-96"> <!-- Set a fixed width for your search bar -->
                <!-- ... Search input ... -->
            </div>
        </div>

        <!-- Products Grid -->
        <div class="flex-grow"> <!-- This takes up the remaining space -->
            <div class="grid grid-cols-6 gap-x-1 gap-y-6 justify-items-center">
                <!-- ... Product grid code ... -->
            </div>
        </div>
    </div>

    <!-- Right Sidebar -->
    <!-- ... Your existing right sidebar code ... -->
</div>