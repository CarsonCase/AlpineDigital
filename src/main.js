import Vue from 'vue'
import routes from './routes'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const app = new Vue({ 
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    loading: false,
    dark: false,
    LOADTIME: Object.freeze({time:100})  //Load time between pages for animation in miliseconds
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  created(){
    window.addEventListener('popstate', () => {
      this.loading = true;   //call Load animation on backspace
      app.currentRoute = window.location.pathname;
    })    
  },
  render (h) {
    if(this.loading){
      return h(require('./pages/loading.vue'));
    }else{
      return h(this.ViewComponent)
    }


  }
})

