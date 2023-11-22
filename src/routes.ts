import { createRouter, createWebHashHistory } from "vue-router";
import QuizPageVue from "./pages/QuizPage.vue";
import AdminVue from "./pages/Admin.vue";

const routes = [
  { path: "/", component: QuizPageVue },
  { path: "/admin", component: AdminVue },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
