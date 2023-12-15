<!-- src/components/Product.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Product } from '../lib/types';
    
    export let product: Product;
    const dispatch = createEventDispatcher();

    // Define the handleImageError function here
    function handleImageError(event: any) {
        event.target.src = '/img/not-found.png';
        event.target.onerror = null; // Remove the event handler after it's handled once
    }
    
    function selectProduct() {
        dispatch('select', { product });
    }
</script>

<div 
    class="flex flex-col items-center justify-center p-2 border shadow-lg rounded-xl hover:opacity-75 product"
    tabindex="0" 
    role="button" 
    on:click={selectProduct}
    on:keydown={(event) => (event.key === 'Enter' || event.key === 'Space') && selectProduct()}>
    <img src={product.imageUrl} alt={product.productDescription} on:error={handleImageError}> 
    <div class="justify-center text-sm">{product.productId}</div>
    <div class="text-xs">{product.productDescription}</div>
</div>