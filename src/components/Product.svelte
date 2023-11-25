<!-- src/components/Product.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { activeFilters } from '../stores/filtersStore';
    import type { Product } from '../lib/types';
    
    export let product: Product;

    const dispatch = createEventDispatcher();

    function selectProduct() {
        dispatch('select', { product });
    }
</script>


{#if (
    (!$activeFilters.isMissingImages || !product.isMissingImages) &&
    (!$activeFilters.isMissingDeliveryDates || !product.isMissingDeliveryDates) &&
    (!$activeFilters.isMissingPrices || !product.isMissingPrices) &&
    (!$activeFilters.isSoldOut || product.isSoldOut) &&
    (!$activeFilters.isCancelled || product.isCancelled) &&
    (!$activeFilters.isMissingSizes || product.isMissingSizes) &&
    (!$activeFilters.isMissingImStyles || product.isMissingImStyles)
)}


<div class="product" tabindex="0"  on:click={selectProduct} role="button">
    <img src={product.isMissingImages ? product.imageUrl : '/img/not-found.png'} alt={product.productDescription}>
    <div class="justify-center text-sm ">{product.productId}</div>
    <div class="text-xs">{product.productDescription}</div>
</div>

{/if}
