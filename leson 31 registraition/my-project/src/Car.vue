<template>
  <div>
    <h3>Name: {{carName}}</h3>
    <p>Yeae: {{carYear}}</p>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              carName: 'Ford',
              carYear: 2015,
          }
      }
  }

</script>
