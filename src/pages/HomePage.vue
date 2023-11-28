<template>
    <div class="p-4 flex flex-col justify-center items-center min-h-screen">
        <h1 class="text-[60px] mb-4">Newest Article</h1>
        <NewestArticle />
    </div>
</template>

<script>
import NewestArticle from '../components/NewestArticle.vue';

export default {
    name: 'HomePage',
    components: { 
        NewestArticle,
    },
    data() {
        return {};
    },
}
</script>