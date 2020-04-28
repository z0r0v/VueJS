<template>
  <div>
    <div id="app">
      <h1>{{msg}}</h1>
    </div>
    <app-car></app-car>
  </div>
</template>
<script>
  // локально регестрируем компонент
  // производим импорт
  import Car from "./Car.vue";

    export default {
        data() {
            return {
                msg: 'Welcome'
            }
        },

        // допивывем в поле components наш компонент
        components: {
            appCar: Car
        }

    }
</script>
<style lang="scss"></style>
