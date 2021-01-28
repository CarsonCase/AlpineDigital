<template>
<div>
    <mainLayout>
      <div class="text-black dark:text-white">
        <h1>Digital Marketing</h1>
        <p>More info about all that here</p>
      </div>
      <VLink href="/chris">Who do I call?</VLink>
    </mainLayout>
</div>
</template>

<script>
  import VLink from '../../components/VLink.vue'
  import MainLayout from '../../layouts/Main.vue'

  export default {
    components: {
      MainLayout,
      VLink
    }
  }
</script>
