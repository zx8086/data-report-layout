<!-- src/components/Product.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    export let product;
    export let activeFilters;

    const dispatch = createEventDispatcher();

    function selectProduct() {
        dispatch('select', { product });
    }
</script>

{#if (
    (!activeFilters.isImageAvailable || !product.isImageAvailable) &&
    (!activeFilters.isDeliveryDatesAvailable || !product.isDeliveryDatesAvailable) &&
    (!activeFilters.isPricesAvailable || !product.isPricesAvailable) &&
    (!activeFilters.isSoldOut || product.isSoldOut) &&
    (!activeFilters.isCancelled || product.isCancelled) &&
    (!activeFilters.isMissingSizes || product.isMissingSizes) &&
    (!activeFilters.isMissingImStyles || product.isMissingImStyles)
)}


<div class="product" on:click={selectProduct}>
    <img src={product.isImageAvailable ? product.imageUrl : '/img/not-found.png'} alt={product.productDescription}>
    <div class="text-sm">{product.productId}</div>
    <div class="text-sm">{product.productDescription}</div>
</div>
{/if}
