<script>
    export let src;
    export let alt;
    export let aspectWidth;
    export let aspectHeight;
    export let failedToLoad;
    export let onImageError;
</script>

{#if src && !failedToLoad}
    <div class={`aspect-w-${aspectWidth} aspect-h-${aspectHeight}`}>
        <img class="object-cover" src={src} alt={alt} on:error={onImageError}>
    </div>
{/if}
