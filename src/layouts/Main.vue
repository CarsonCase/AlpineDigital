<template>
  <div class="z-0 bg-white dark:bg-black h-screen flex flex-wrap">
    <div class="flex flex-col justify-center">
      <div class="z-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>
