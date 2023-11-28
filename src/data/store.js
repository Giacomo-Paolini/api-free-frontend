import { reactive } from "vue";

export const store = reactive({
    loading: true,
    articles: [],
    api: "http://localhost:3000/posts",
    currentArticle: null,
});