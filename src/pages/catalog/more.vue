<template>
<div>
    <mainLayout>
      <div class="text-black dark:text-white">
        <h1>We do more!</h1>
        <ul>
            <li>Cryptocurrency Mining</li>
            <li>Brand/logo design</li>
            <li>Cybersecurity</li>
        </ul>
      </div>
      <VLink href="/neel">Who do I call?</VLink>
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
