<script>
    
    // import type { Product } from '../lib/types';
    
    export let product;

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

<div>
    {#if product.imageFrontUrl && !imagesFailedToLoad.imageFrontUrl}
        <img src={product.imageFrontUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageFrontUrl')}>
    {/if}
    {#if product.imageBackUrl && !imagesFailedToLoad.imageBackUrl}
        <img src={product.imageBackUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageBackUrl')}>
    {/if}
    {#if product.imageDetailUrl && !imagesFailedToLoad.imageDetailUrl}
        <img src={product.imageDetailUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageDetailUrl')}>
    {/if}
    {#if product.imageDetail2Url && !imagesFailedToLoad.imageDetail2Url}
        <img src={product.imageDetail2Url} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageDetail2Url')}>
    {/if}
    {#if product.imageDetail3Url && !imagesFailedToLoad.imageDetail3Url}
        <img src={product.imageDetail3Url} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageDetail3Url')}>
    {/if}
    {#if product.imageFabricScanUrl && !imagesFailedToLoad.imageFabricScanUrl}
        <img src={product.imageFabricScanUrl} alt="Front view of {product.productDescription}" on:error={(event) => handleImageError(event, 'imageFabricScanUrl')}>
    {/if}
</div>
