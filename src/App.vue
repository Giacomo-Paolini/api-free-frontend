
<template>
  <AppHeader />
  <h3 v-if="store.loading === true" class="text-center text-[40px] mb-4 text-[--primary-color]">Loading...</h3>
  <RouterView v-else />
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
        this.store.loading = true
        axios.get(this.store.api).then((response) => {
          this.store.articles = response.data
          setTimeout(() => {
            this.store.loading = false
          }, 800)
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
