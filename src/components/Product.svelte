<!-- src/components/Product.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    export let product;
    const dispatch = createEventDispatcher();

    function selectProduct() {
        // Dispatch the entire product object up to the parent
        dispatch('select', { product });
    }
</script>

<div class="product" on:click={selectProduct}>
    <img src={product.isImageAvailable ? product.imageUrl : '/img/not-found.png'}
        alt={product.productDescription}>
    <div class="text-sm">{product.productId}</div>
    <div class="text-sm">{product.productDescription}</div>
</div>
