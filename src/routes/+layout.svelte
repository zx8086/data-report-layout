<script lang="ts">
  import "../app.css";
  import { onMount } from 'svelte';
  import { themeStore } from '../stores/themeStore'; // Make sure the import path is correct
  import { menuListStore, setMenuList } from '../stores/menuListStore';

  let themeData: {
    theme: string;
    brands: { label: string; value: string; imageUrl: string; }[];
    movies: Record<string, any[]>;
  };

  let menuList: { href: string; division: string; name: string; img: string; theme: string; }[] = [];
  let showDropdown = false;

  let themeClass = '';

  // Subscribe to the themeStore to get the current theme
  themeStore.subscribe(({ theme }) => {
    // Set the themeClass based on the current theme
    themeClass = `theme-${theme.toLowerCase()}`;
  });

  // Subscribe to the themeStore to observe changes in theme
  const unsubscribeTheme = themeStore.subscribe(($themeStore) => {
    themeData = $themeStore;
    // Update the main content class based on the current theme
    themeClass = `theme-${themeData.theme.toLowerCase()}`;
    setMenuList(themeData.theme); // Set the menu based on the current brand
  });

  menuListStore.subscribe(($menuList) => {
    menuList = $menuList;
  });

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  // Close the dropdown if clicked outside
  function handleClickOutside(event: MouseEvent) {
    if (!event.target.closest('.dropdown-container')) {
      showDropdown = false;
    }
  }

  $: if (themeData) {
    setMenuList(themeData.theme); // Update the menu list reactively when the theme changes
    updateVideoAndLogo(themeData);
  }

  // Function to update video and logo
  function updateVideoAndLogo(themeData: {
    theme: string;
    brands: { label: string; value: string; imageUrl: string; }[];
    movies: Record<string, any[]>;
  }) {
    onMount(() => {
      // This code will run only in the browser environment
      const videoElement = document.querySelector('.carousel-video') as HTMLVideoElement;
      const logoElement = document.querySelector('.brand-logo') as HTMLImageElement;
      const themeTextElement = document.querySelector('.theme-text');

      if (videoElement && themeData.movies[themeData.theme]) {
        videoElement.src = themeData.movies[themeData.theme][0].videoUrl;
      }
      if (logoElement) {
        const currentBrand = themeData.brands.find(brand => brand.value === themeData.theme);

        if (currentBrand) {
          logoElement.src = currentBrand.imageUrl;
          logoElement.alt = currentBrand.label;
        }
      }

      if (themeTextElement) {
        themeTextElement.textContent = themeData.theme;
      }
    });
  }

  // Function to handle the button click
  function handleLogoClick() {
    themeStore.nextBrand(); // Change to the next brand
  }
</script>
<!-- Top Bar -->
<div class="flex flex-row items-center justify-between py-1 mb-2 border-b-2 shadow-black">
  <div class="flex flex-none bg-slate-200">
      <button on:click={handleLogoClick} class=" animate-pulse" aria-label="Change Theme">
          <img src="/img/PVH_Logo.svg" alt="PVH Logo" class="h-12 pvh-logo-button">
      </button>
  </div>
  <div class="flex flex-none">
    <!-- <a href="/"> -->
      <img class="flex-none h-12 brand-logo" alt="logo" />
    <!-- </a> -->
  </div>
  <div class="flex-none w-12 bg-red-500 theme-text">
      <!-- This will be updated by the script -->
  </div>
</div>
<!-- Middle Bar -->
<div class="flex mb-2 bg-blue-200 border-b-2 shadow-black">
  <div>
      <!-- Tailwind CSS Dropdown Menu -->
      <div class="relative inline-block text-left dropdown-container">
          <div>
              <button type="button" on:click={toggleDropdown} class="inline-flex justify-center w-full py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded={showDropdown} aria-haspopup="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                  <div class="px-2 pt-0">Divisions</div>
              </button>
          </div>
          {#if showDropdown}
          <div class="absolute left-0 z-50 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                  {#each menuList as menuItem}
                  <a href={menuItem.href} class="block px-4 py-2 text-xl text-black hover:bg-gray-100" role="menuitem" tabindex="-1">
                      {menuItem.name}
                  </a>
                  {/each}
              </div>
          </div>
          {/if}
      </div>
  </div>
  <div>
      Breadcrumb Navigation
  </div>
  <div>
  </div>
</div>
<!-- Main Content -->
<main class="{themeClass}">
    <slot></slot>
</main>
<style>
  .dropdown-container {
    z-index: 50; /* Make sure the dropdown is above most other elements */
  }

  /* Additional style to ensure the dropdown extends from the left side */
  .dropdown-container .absolute {
    right: auto; /* Override any existing right positioning */
    left: 0; /* Align the dropdown to the left side of its parent */
  }
</style>