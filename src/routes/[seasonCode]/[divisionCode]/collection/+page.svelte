<!-- src/routes/[seasonCode]/[divisionCode]/collection/index.svelte -->
<script context="module">
    export async function load({ params }) {
      // params.seasonCode and params.divisionCode contain the dynamic parts of the route
      return {
        props: {
          seasonCode: params.seasonCode,
          divisionCode: params.divisionCode
        }
      };
    }
  </script>

<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    import { onMount } from 'svelte';
    import { breadcrumbStore } from '../../../../stores/breadcrumbStore';
  
    export let seasonCode;
    export let divisionCode;
  
    onMount(() => {
      breadcrumbStore.setBreadcrumbs([
        { name: seasonCode, path: `/${seasonCode}` },
        { name: divisionCode, path: `/${seasonCode}/${divisionCode}` },
        { name: 'COLLECTION', path: `/${seasonCode}/${divisionCode}/collection` }
      ]);
    });
</script>



This is for collection pages.
