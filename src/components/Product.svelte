<!-- src/components/Product.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Product } from '../lib/types';
    
    export let product: Product;
    const dispatch = createEventDispatcher();

    // Define the handleImageError function here
    function handleImageError(event) {
        event.target.src = '/img/not-found.png';
        event.target.onerror = null; // Remove the event handler after it's handled once
    }
    
    function selectProduct() {
        dispatch('select', { product });
    }
</script>

<div class="product" tabindex="0" on:click={selectProduct} role="button">
    <img src={product.imageUrl} alt={product.productDescription} on:error={handleImageError}>
    <div class="justify-center text-sm">{product.productId}</div>
    <div class="text-xs">{product.productDescription}</div>
</div>
