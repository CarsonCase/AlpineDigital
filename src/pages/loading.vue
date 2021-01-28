<template>
<MainLayout>  
<div class="w-screen px-60">
  <div class="flex mb-2 items-center justify-between">
    <div>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full dark:text-gray-600 text-blue-600 dark:bg-gray-200 bg-blue-200">
        Loading...
      </span>
    </div>
    <div class="text-right">
      <span class="text-xs font-semibold inline-block dark:text-gray-600 text-blue-600">
        {{width}}
      </span>
    </div>
  </div>
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded dark:bg-gray-20 bg-blue-200">
    <div :style="{ width: width }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-gray-500 bg-blue-500"></div>
  </div>
</div>
</MainLayout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    LOADTIME: Number,
    TICK: Number,
    data: function(){
      return {
        width: "0%",
        i: 0
      }
    },
    methods: {
      animateBar(){
        this.width = Math.floor((this.i/this.LOADTIME)*100).toString() + "%";
        setTimeout(()=>{
          if(this.i >= this.LOADTIME){
            this.$root.loading = false;
            return;
          }
          this.i+=this.TICK
          return this.animateBar();
        },1);
      }
    },
    created(){
      this.LOADTIME = this.$root.LOADTIME.time;
      this.TICK = this.LOADTIME/100;
      this.animateBar();
    },
    components: {
      MainLayout
    }
  }
</script>
