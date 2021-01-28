<template>
  <button class="dark:bg-gray-500 bg-blue-500 hover:bg-blue-400 dark:hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 dark:border-gray-700 border-blue-700 hover:border-blue-500 rounded"
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </button>
</template>

<script>
  import routes from '../routes'
  export default {
    props: {
      href: {
        type:String,
        required: true 
      }
    },
    created(){
      //For debugging
        //console.log(this.href);
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        this.$root.loading = true;
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
      }
    }
  }
</script>

