import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import CreateArticle from "./pages/CreateArticle.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: "/new-article", name: "articles", component: CreateArticle },
    ],
});

export { router };