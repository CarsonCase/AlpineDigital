<template>
<div>
    <mainLayout>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative overflow-hidden px-60">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      </svg>
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Full Spectrum</span>
            <span class="block text-indigo-600 xl:inline">Technology Solutions</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            In 2021 taking advantage of the latest technology is no longer optional. Let us handle the nerdy stuff so you can get back to what's important.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <v-link href="/catalog">Get Started </v-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>    
</mainLayout>
</div>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout,
      VLink
    }
  }
</script>
