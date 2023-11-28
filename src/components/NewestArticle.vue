<template>
    <div v-for="article in newArticle" :key="article.id" class="rounded md:max-w-[600px] h-64 bg-cover bg-center" :style="{ backgroundImage: `url(${article.image})` }">
        <div class="text-black p-4">
            <h2 class="text-xl font-bold">{{ article.title }}</h2>
            <p class="text-gray-500">{{ article.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NewestArticle',
    data() {
        return {
            axios,
            newArticle: [],
        }
    },
    methods: {
        getLatestArticle() {
            const newArticle = this.axios.get('http://localhost:3000/posts').then((response) => {
                let latestArticle = response.data[response.data.length - 1];
                console.log(latestArticle);
                this.newArticle.push(latestArticle);
            })
            return newArticle;
        }
    },
    mounted() {
        this.getLatestArticle()
    }
}
</script>

<style scoped>
</style>