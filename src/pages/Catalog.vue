<template>

  <mainLayout>
    <div class="flex h-screen w-screen">
      <div class="grid grid-cols-1 h-screen z-30">
        <Card class="w-fill" :title="'IT Services'" :body="'Constant maintenence/support so your office computers will always be running smooth and fast'" :href="'/IT'" />
        <Card class="" :title="'Custom Software'" :body="'Upgrade and automate business functions by connecting your customers directly through your website! Begin automatic scheduling, curbside pickup, lead collection, and more'" :href="'/dev'" />
        <Card class="" :title="'Digital Marketing'" :body="'Supercharge customer aquisition by utilizing powerful analytics and design tools '" :href="'/marketing'" />
        <Card class="" :title="'More!'" :body="'Many businesses have unique needs and opportunties that we are happy to help you capture and realize. Click here to learn about our many other areas of work'" :href="'/more'" />
      </div>
      <div id="" class="w-full h-full z-20 absolute flex justify-end">
        <img class="object-fill" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png" alt="">
      </div>
    </div>
  </mainLayout>

</template>

<script>
    import MainLayout from '../layouts/Main.vue';
    import Card from '../components/Card.vue';

  export default {
    components: {
      MainLayout,
      Card
    }
  }
</script>

<style>
#picture{
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png");
}
</style>