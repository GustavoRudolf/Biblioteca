import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditorasView from "../views/EditorasView.vue";
import LivrosView from "../views/LivrosView.vue";
import AutoresView from "../views/AutoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/Editoras", name: "editoras", component: EditorasView },
    { path: "/Livros", name: "livros", component: LivrosView },
    { path: "/Autores", name: "Autores", component: AutoresView },
  ],
});

export default router;
