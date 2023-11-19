<script context="module">
    export async function load({ params }) {
      // Ensure params has the properties you expect
      const { seasonCode, divisionCode } = params;
      if (!seasonCode || !divisionCode) {
        // Handle missing parameters appropriately
        return { status: 400, error: new Error('Missing parameters') };
      }
      return {
        props: { seasonCode, divisionCode }
      };
    }
  </script>
<script lang="ts">

    import type { PageData } from './$types';
    import { breadcrumbStore } from '../../../stores/breadcrumbStore';
    import { themeData } from '../../../stores/themeStore';

    export let data: PageData;
  export let seasonCode;
  export let divisionCode;
  
// At the top of your script tag or inside onMount for a specific route
breadcrumbStore.setBreadcrumbs([
    { name: 'DASHBOARD', path: '/' },
    { name: themeData.seasonCode, path: `/${themeData.seasonCode}` },
    { name: themeData.divisionCode, path: `/${themeData.seasonCode}/${themeData.divisionCode}` },
    //   { name: 'COLLECTION', path: `/${themeData.seasonCode}/${themeData.divisionCode}/collection` },
    // ...other breadcrumbs
]);


</script>

This is the Divisional Page.