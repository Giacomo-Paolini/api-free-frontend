
<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

  <script>
  import AppHeader from './components/AppHeader.vue'
  import HomePage from './pages/HomePage.vue'
  import AppFooter from './components/AppFooter.vue'
  import { store } from './data/store.js'
  import axios from 'axios'
  
  export default {
    name: 'App',
    components: {
      HomePage,
      AppHeader,
      AppFooter,
    },
    data() {
      return {
        store,
      }
    },
    methods: {
      dataArticles() {
        this.store.loading = true
        axios.get(this.store.api).then((response) => {
          this.store.articles = response.data
          setTimeout(() => {
            this.store.loading = false
          }, 1000)
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
