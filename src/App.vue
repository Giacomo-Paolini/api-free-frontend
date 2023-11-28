
<template>
  <AppHeader />
  <HomePage />
</template>

  <script>
  import AppHeader from './components/AppHeader.vue'
  import HomePage from './pages/HomePage.vue'
  
  export default {
    name: 'App',
    components: {
      HomePage,
      AppHeader
    }
  }
  </script>

<style scoped>

</style>
