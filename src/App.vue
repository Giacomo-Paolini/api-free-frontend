
<template>
  <AppHeader />
  <RouterView />
</template>

  <script>
  import AppHeader from './components/AppHeader.vue'
  import HomePage from './pages/HomePage.vue'
  import { store } from './data/store.js'
  import axios from 'axios'
  
  export default {
    name: 'App',
    components: {
      HomePage,
      AppHeader
    },
    data() {
      return {
        store,
      }
    },
    methods: {
      dataArticles() {
        axios.get(this.store.api).then((response) => {
          this.store.articles = response.data
        })
      }
    },
    mounted() {
      this.dataArticles()
    }
  }
  </script>

<style scoped>

</style>
