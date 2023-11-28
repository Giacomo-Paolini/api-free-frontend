import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ArticlesPage from "./pages/ArticlesPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: "/articles", name: "articles", component: ArticlesPage },
    ],
});

export { router };