<!-- src/components/Product.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    export let product;
    const dispatch = createEventDispatcher();
    
    function selectProduct() {
        dispatch('select', { productKey: product.key });
    }
</script>

<div class="product" on:click={selectProduct}>
    <!-- Product details here -->
</div>
