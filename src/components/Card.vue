<template>
    <div id="container" class="flex md:p-12 dark:bg-gray-600 bg-gray-400">
        <h1 class="text-3xl text-black dark:text-white">{{title}}</h1>
        <p id="desc" class="hidden text-black dark:text-white">{{body}}</p>
        <VLink :href="'/catalog'+href">Learn More</VLink> 
    </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
  components: { VLink },
    props: {
        title: {
            type:String,
            required: true 
        },
        body:{
            type:String,
            required: true
        },
        href:{
            type:String,
            required: true
        }
    }
  }
</script>

<style>
@media (min-width: 768px){
    #container:hover #desc{
    display: block;
    }
    #container:hover{
        width: 75vw;
        -webkit-transition: width 1;
        transition: width 1s;
    }
    #container{
    width: 25vw
    }
}
</style>

