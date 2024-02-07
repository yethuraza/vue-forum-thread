import { createRouter, createWebHistory } from "vue-router";

import PageHomeVue from "../components/PageHome.vue";
import ThreadShowPage from "../components/ThreadShowPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: PageHomeVue },
    { path: "/thread/:id", name: "ThreadShow", component: ThreadShowPage },
  ],
});

export default router;
