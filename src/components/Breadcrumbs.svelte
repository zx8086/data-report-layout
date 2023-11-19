<!-- src/components/Breadcrumbs.svelte -->
<script>

    import { breadcrumbStore } from '../stores/breadcrumbStore';
    // Subscribe to the breadcrumb store
    let breadcrumbs = [];
    breadcrumbStore.subscribe(value => {
        breadcrumbs = value;
    });
</script>

<nav aria-label="breadcrumb">
    <ol class="flex space-x-1 text-red-600">
        {#each breadcrumbs as crumb, index (crumb.path)}
        <li class="flex items-center">
            {#if index < breadcrumbs.length - 1}
            <a href={crumb.path} class="text-black hover:text-red-600">{crumb.name}</a>
            <span class="mx-2">/</span>
            {:else}
            <span class="text-red-600">{crumb.name}</span>
            {/if}
        </li>
        {/each}
    </ol>
</nav>

<style>
/* Your styles for breadcrumbs */
</style>