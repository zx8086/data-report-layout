<script lang="ts">
    import AspectRatioImage from "./AspectRatioImage.svelte";
    // import type { Product } from '../lib/types';    
    export let product: any;

    // Initialize state to track the loading status of images
    let imagesFailedToLoad = {
        imageFrontUrl: false,
        imageBackUrl: false,
        imageDetailUrl: false,
        imageDetail2Url: false,
        imageDetail3Url: false,
        imageFabricScanUrl: false
    };

    function handleImageError(event, imageName) {
        imagesFailedToLoad[imageName] = true;
        event.target.onerror = null; // Prevents the fallback image from triggering an infinite loop if it's also missing
    }
</script>

<div class="flex flex-col items-center justify-center "> 
    {#if product.imageFrontUrl && !imagesFailedToLoad.imageFrontUrl}
        <img class="object-cover mb-4" src={product.imageFrontUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageFrontUrl')}>
    {/if}
    {#if product.imageBackUrl && !imagesFailedToLoad.imageBackUrl}
        <img class="object-cover mb-4" src={product.imageBackUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageBackUrl')}>
    {/if}
    {#if product.imageDetailUrl && !imagesFailedToLoad.imageDetailUrl}
        <img class="object-cover mb-4" src={product.imageDetailUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageDetailUrl')}>
    {/if}
    {#if product.imageDetail2Url && !imagesFailedToLoad.imageDetail2Url}
        <img class="object-cover mb-4" src={product.imageDetail2Url} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageDetail2Url')}>
        {/if}
    {#if product.imageDetail3Url && !imagesFailedToLoad.imageDetail3Url}    
        <img class="object-cover mb-4" src={product.imageDetail3Url} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageDetail3Url')}>
    {/if}
    {#if product.imageFabricScanUrl && !imagesFailedToLoad.imageFabricScanUrl}
        <img class="object-cover mb-4" src={product.imageFabricScanUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageFabricScanUrl')}>
    {/if}
</div>
