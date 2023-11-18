<script lang="ts">
    import { onMount } from 'svelte';
    import { themeStore } from '../stores/themeStore';
  
    // Subscribe to themeStore
    let themeData;
    themeStore.subscribe(data => {
      themeData = data;
    });
  
    // We will update the video and logo in the onMount hook
    onMount(() => {
      // Make sure this code runs only in the browser
      if (typeof window !== 'undefined') {
        updateVideoAndLogo(themeData);
      }
    });
  
    // Reactive statement to update the logo and theme text when the theme changes
    $: if (themeData && typeof window !== 'undefined') {
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
      <div class="flex-none w-12 bg-slate-200">
          <button on:click={handleLogoClick} class="pvh-logo-button" aria-label="Change Theme">
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
          Menu
      </div>
      <div>
          Content
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
  
    /* Add styles for brand-logo and theme-text if needed */
  </style>