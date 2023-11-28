<template>
    <div class="max-w-[1200px] m-auto p-4 gap-3 grid sm:grid-cols-1 md:grid-cols-2 place-content-center">
        <div v-for="(article, index) in store.articles" :key="article.id">
            <div @click="getArticle(index)" class="relative cursor-pointer flex justify-center">
                <img :src="article.image" class="rounded w-[600px] max-h-[50%] bg-cover bg-center">
                <div class="absolute bottom-0 text-black p-4 gap-4 bg-[rgba(150,150,150,0.3)] rounded max-w-[600px]">
                    <h2 class="text-base md:text-xl font-bold text-white">{{ article.title }}</h2>
                    <p class="hidden md:block text-sm text-white">{{ isTooLong(article.content) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js'

export default {
    name: 'NewestArticle',
    data() {
        return {
            store,
        }
    },
    methods: {
        isTooLong() {
            if (this.store.articles[0].content.length > 100) {
                return this.store.articles[0].content.slice(0, 100) + '...';
            } else {
                return this.store.articles[0].content;
            }
        },
        getArticle(index) {
            this.store.currentArticle = this.store.articles[index];
            this.$router.push('/article/' + this.store.currentArticle.slug);
            console.log(this.store.currentArticle);
        }
    }
}
</script>

<style scoped>
</style>