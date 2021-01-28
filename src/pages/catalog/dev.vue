<template>
<div class="bg-white dark:bg-black">
      <div class="text-black dark:text-white grid grid-cols-3 h-screen">
        <div class="col-span-2 bg-gray-600 h-full row-span-6 flex flex-wrap content-center justify-center">
          <h1 class="text-9xl hover:underline">Websites</h1>
        </div>
        <div class="bg-blue-300 row-span-6 flex justify-center">
            <div class="flex flex-grow m-12 bg-white block">
              <!--header -->
              <div class="justify-center p-6">
                <h1>Hello</h1>
              </div>
            <!--body -->
            <div class="">
              <h1 class="txt-lg">Hello Again</h1>
            </div>
          </div>
        </div>
        <div class="col-span-3 bg-green-100 inline-grid justify-center row-span-1">
          <div class="px-6">
            <VLink href="/carson">Who do I call?</VLink>
          </div>        
      </div>

      </div>
</div>
</template>

<script>
  import VLink from '../../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>
