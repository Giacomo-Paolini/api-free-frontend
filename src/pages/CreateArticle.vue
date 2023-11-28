<template>
    <div class="flex flex-col items-center justify-center">
        <form class="w-full max-w-lg">
            <div class="-mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Title
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-title" type="text" placeholder="Title">
                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                </div>
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Slug
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-slug" type="text" placeholder="Slug">
                </div>
            </div>
            <div class="-mx-3 mb-6">
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="file_input">
                        Upload image
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="file_input" type="file">
                </div>
            </div>
            <div class="-mx-3 mb-2">
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Content
                    </label>
                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="10" id="grid-description" type="text-area" placeholder="Description"></textarea>
                </div>
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Category
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category" type="text" placeholder="Category">
                </div>
                <div class="w-full px-4 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Tags
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-tags" type="text" placeholder="Tags">
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
export default {
    name: 'CreateArticle',
    data() {
        return {};
    },
}
</script>

<style scoped>
</style>