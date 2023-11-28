<template>
    <h1 class="text-center text-[40px] mb-4 text-[--primary-color]">Articles</h1>
    <Articles />
</template>

<script>
import Articles from '../components/Articles.vue';

export default {
    name: 'HomePage',
    components: { 
        Articles,
    },
    data() {
        return {};
    },
}
</script>