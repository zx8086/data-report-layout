<script lang="ts">
  import "../app.css";
  import { onMount } from 'svelte';
  import { themeStore } from '../stores/themeStore';
  import { menuListStore, setMenuList } from '../stores/menuListStore';
  
  let themeData: {
    theme: string;
    brands: { label: string; value: string; imageUrl: string; }[];
    movies: Record<string, any[]>;
  };
  
  let menuList: { href: string; division: string; name: string; img: string; theme: string; }[] = [];
  let showDropdown = false;

  themeStore.subscribe(($themeStore) => {
    themeData = $themeStore;
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

  onMount(() => {
    window.addEventListener('click', handleClickOutside);
    setMenuList(themeData.theme); // Set the menu list based on the initial theme
    updateVideoAndLogo(themeData); // Initial update when the component mounts
  });

  $: if (themeData && typeof window !== 'undefined') {
    setMenuList(themeData.theme); // Update the menu list reactively when the theme changes
    updateVideoAndLogo(themeData);
  }
  
  function updateVideoAndLogo(themeData: {
    theme: string;
    brands: { label: string; value: string; imageUrl: string; }[];
    movies: Record<string, any[]>;
  }) {
    const videoElement = document.querySelector('.carousel-video') as HTMLVideoElement;
    const logoElement = document.querySelector('.brand-logo') as HTMLImageElement;
    const themeTextElement = document.querySelector('.theme-text');

    if (videoElement && themeData.movies[themeData.theme]) {
      videoElement.src = themeData.movies[themeData.theme][0].videoUrl;
    }
    if (logoElement) {
  const currentBrand = themeData.brands.find(brand => brand.value === themeData.theme);

    if (currentBrand) {
      (logoElement as HTMLImageElement).src = currentBrand.imageUrl;
      (logoElement as HTMLImageElement).alt = currentBrand.label;
    }
  }

    if (themeTextElement) {
      themeTextElement.textContent = themeData.theme;
    }
  }
  
  // Function to handle the button click
  function handleLogoClick() {
    themeStore.nextBrand(); // Change to the next brand
  }
</script>
<!-- Top Bar -->
<div class="flex flex-row justify-between items-center mb-2 border-b-2 shadow-black py-1">
  <div class="flex flex-none bg-slate-200">
      <button on:click={handleLogoClick} class=" animate-pulse" aria-label="Change Theme">
          <img src="/img/PVH_Logo.svg" alt="PVH Logo" class="pvh-logo-button h-12">
      </button>
  </div>
  <div class="flex flex-none">
      <img class="flex-none brand-logo h-12" alt="logo" />
  </div>
  <div class="flex-none w-12 bg-red-500 theme-text">
      <!-- This will be updated by the script -->
  </div>
</div>
<!-- Middle Bar -->
<div class="flex bg-blue-200 mb-2 border-b-2 shadow-black">
  <div>
      <!-- Tailwind CSS Dropdown Menu -->
      <div class="relative inline-block text-left dropdown-container">
          <div>
              <button type="button" on:click={toggleDropdown} class="inline-flex w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded={showDropdown} aria-haspopup="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                  <div class="px-2 pt-0">Divisions</div>
              </button>
          </div>
          {#if showDropdown}
          <div class="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
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
      Breadcrumb
  </div>
  <div>
  </div>
</div>
<!-- Main Content -->
<main class="${themeData ? 'theme-' + themeData.theme.toLowerCase() : ''}">
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