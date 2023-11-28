import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import CreateArticle from "./pages/CreateArticle.vue";
import ArticlePage from "./pages/ArticlePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: "/new-article", name: "articles", component: CreateArticle },
        { path: "/article/:slug", name: "article", component: ArticlePage },
    ],
});

export { router };