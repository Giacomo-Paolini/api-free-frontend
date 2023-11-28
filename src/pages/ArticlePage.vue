<template>
        <!-- <h3 v-if="store.loading === true"></h3> -->
        <div class="flex flex-col justify-center max-w-[1200px] m-auto">
            <h1 class="text-center text-[40px] text-[--primary-color]">{{ this.article.title }}</h1>
            <img class="p-4 my-4 sm:w-120px max-w-[1200px]" :src="this.article.image" alt="">
            <p class="text-center text-[20px]">{{ this.article.content }}</p>
            <div class="text-center">
                <a href="/" class="text-4xl text-center">&larr;</a>
            </div>
        </div>
</template>

<script>
import { store } from '../data/store.js'

export default {
    name: 'ArticlePage',
    data() {
        return {
            store,
            article: store.currentArticle,
        }
    },
}
</script>

<style>
</style>