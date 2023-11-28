<template>
    <div class="flex flex-col items-center justify-center">
        <form class="w-full max-w-lg" @submit.prevent="handleSubmit">
            <div class="-mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
                        Title
                    </label>
                    <input v-model="formData.title" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="title" type="text" placeholder="Title">
                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                </div>
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="slug">
                        Slug
                    </label>
                    <input v-model="formData.slug" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="slug" type="text" placeholder="Slug">
                </div>
            </div>
            <div class="-mx-3 mb-6">
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image">
                        image
                    </label>
                    <input v-model="formData.image" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image" type="text" placeholder="URL image">
                </div>
            </div>
            <div class="-mx-3 mb-2">
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="content">
                        Content
                    </label>
                    <textarea v-model="formData.content" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="10" id="content" type="text-area" placeholder="Description"></textarea>
                </div>
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="category">
                        Category
                    </label>
                    <input v-model="formData.category" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category" type="text" placeholder="Category">
                </div>
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tags">
                        Tags
                    </label>
                    <input v-model="formData.tags" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tags" type="text" placeholder="Tags">
                </div>
                <div class="flex justify-center px-4 mb-6 md:mb-0">
                    <button class="bg-[--primary-color] hover:bg-[--secondary-color] text-white font-bold py-2 px-4 rounded" type="submit">
                        Send
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
    name: 'CreateArticle',
    data() {
        return {
            store,
            formData: {
                title: '',
                slug: '',
                image: '',
                content: '',
                category: '',
                tags: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            axios.post(this.store.api, this.formData).then((response) => {
                console.log('Risposta dalla chiamata POST:', response);
            }).catch((error) => {
                console.error('Errore durante la chiamata POST:', error);
            });
        }
    }
}
</script>

<style scoped>
</style>