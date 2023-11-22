<!-- src/components/Product.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    export let product;
    const dispatch = createEventDispatcher();

    export let activeFilters; // make sure to import this from your store if it's defined externally

    
    function selectProduct() {
        dispatch('select', { product });
    }
</script>

<div class="product" on:click={selectProduct}>
    <img src={product.isImageAvailable ? product.imageUrl : '/img/not-found.png'}
        alt={product.productDescription}>
    <div class="text-sm">{product.productId}</div>
    <div class="text-sm">{product.productDescription}</div>
</div>
