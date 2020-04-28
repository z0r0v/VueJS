import Vue from 'vue'
import App from './App.vue'



// глобальная регистрация компонента:
//import componenta

// import Car from './Car.vue'
//регистрация компонента
// Vue.component('app-car', Car);




new Vue({
  el: '#app',
  render: h => h(App),
});
