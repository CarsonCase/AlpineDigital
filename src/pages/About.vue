<template>
  <mainLayout>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-5xl leading-8 font-extrabold tracking-tight dark:text-blue-900 text-gray-900 sm:text-4xl">
        Alpine Digital
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        In 2021 taking advantage of the latest technology is no longer optional. Let us handle the nerdy stuff so you can get back to what's important
      </p>
    </div>
  </div>
</div>    
<VLink href="/catalog">What exactly do we do?</VLink>
  </mainLayout>
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
