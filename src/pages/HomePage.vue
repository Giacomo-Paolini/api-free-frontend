<template>
    <h3 v-if="store.loading === true" class="text-center text-[40px] mb-4 text-[--primary-color]">Loading...</h3>
    <div v-else>
        <h1 class="text-center text-[40px] mb-4 text-[--primary-color]">Articles</h1>
        <Articles />
    </div>
</template>

<script>
import Articles from '../components/Articles.vue';
import { store } from '../data/store.js';

export default {
    name: 'HomePage',
    components: { 
        Articles,
    },
    data() {
        return {
            store,
        };
    },
}
</script>