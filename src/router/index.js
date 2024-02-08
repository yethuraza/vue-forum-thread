import { createRouter, createWebHistory } from "vue-router";
import sourceData from "@/data.json";
import PageHomeVue from "../components/PageHome.vue";
import ThreadShowPage from "../components/ThreadShowPage.vue";
import PageNotFound from "../components/PageNotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: PageHomeVue },
    {
      path: "/thread/:id",
      name: "ThreadShow",
      component: ThreadShowPage,
      beforeEnter(to, from, next) {
        const threadExist = sourceData.threads.find(
          (t) => t.id === to.params.id
        );
        if (threadExist) {
          return next();
        } else {
          next({
            name: "NotFound",
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          });
        }
      },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
  ],
});

export default router;
