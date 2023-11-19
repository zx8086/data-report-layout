<script lang="ts">
  import "../app.css";
  import { onMount } from 'svelte';
  import { themeStore } from '../stores/themeStore';
  import { menuListStore, setMenuList } from '../stores/menuListStore';
  import { breadcrumbStore } from '../stores/breadcrumbStore';
  import Breadcrumbs from "../components/Breadcrumbs.svelte";
  
  let themeData;
  let menuList = [];
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
  function handleClickOutside(event) {
    if (!event.target.closest('.dropdown-container')) {
      showDropdown = false;
    }
  }

    // We will update the video and logo in the onMount hook
    onMount(() => {
    window.addEventListener('click', handleClickOutside);
    setMenuList(themeData.theme); // Set the menu list based on the initial theme
    updateVideoAndLogo(themeData); // Initial update when the component mounts
    // ...
  });

  $: if (themeData && typeof window !== 'undefined') {
    setMenuList(themeData.theme); // Update the menu list reactively when the theme changes
    updateVideoAndLogo(themeData);
  }
  
    function updateVideoAndLogo(themeData) {
      // Ensure that you have elements with the 'carousel-video', 'brand-logo', and 'theme-text' classes in your markup
      const videoElement = document.querySelector('.carousel-video');
      const logoElement = document.querySelector('.brand-logo');
      const themeTextElement = document.querySelector('.theme-text');
  
      if (videoElement && themeData.movies[themeData.theme]) {
        videoElement.src = themeData.movies[themeData.theme][0].videoUrl;
      }
      if (logoElement) {
        const currentBrand = themeData.brands.find(brand => brand.value === themeData.theme);
        logoElement.src = currentBrand.imageUrl;
        logoElement.alt = currentBrand.label;
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
  
  <div class="flex justify-between items-center">
      <div class="flex-none w-12 h-full bg-slate-200">
          <button on:click={handleLogoClick} class="pvh-logo-button animate-pulse" aria-label="Change Theme">
              <img src="/img/PVH_Logo.svg" alt="PVH Logo" class="pvh-logo">
              </button>
      </div>
      <div class="flex-none max-w-md">
          <img class="brand-logo" alt="logo" />
      </div>
      <div class="flex-none w-12 bg-red-500 theme-text">
          <!-- This will be updated by the script -->
      </div>
  </div>
  <div class="flex bg-blue-200">
      <div>
            <!-- Tailwind CSS Dropdown Menu -->
    <div class="relative inline-block text-left dropdown-container">
    <div>
      <button type="button" on:click={toggleDropdown} class="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded={showDropdown} aria-haspopup="true">
        Divisions
        <!-- SVG icon here -->
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
          <Breadcrumbs />
      </div>
      <div>
      </div>
  </div>
  <div><slot></slot></div>
  
  <style>
    .pvh-logo-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  
    .pvh-logo {
      width: 100px; /* Adjust width as needed */
      height: auto; /* Maintain aspect ratio */
      margin-bottom: 10px; /* Space between logo and title */
    }
    .dropdown-container {
    z-index: 50; /* Make sure the dropdown is above most other elements */
  }

  /* Additional style to ensure the dropdown extends from the left side */
  .dropdown-container .absolute {
    right: auto; /* Override any existing right positioning */
    left: 0; /* Align the dropdown to the left side of its parent */
  }
  </style>