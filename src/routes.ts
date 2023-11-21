import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import QuizPage from "./pages/QuizPage.vue";
import QuizList from "./pages/QuizList.vue";
import RulesPage from "./pages/RulesPage.vue";
import RandomWheel from "./pages/RandomWheel.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/rules",
    component: RulesPage,
  },
  {
    path: "/random_wheel",
    component: RandomWheel,
  },
  {
    path: "/quiz_list",
    component: QuizList,
  },
  {
    path: "/quiz/:id",
    component: QuizPage,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
