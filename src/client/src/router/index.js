import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SigninView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import("../views/TasksView.vue"),
    },
    {
      path: "/tasks/:id",
      name: "taskDetails",
      component: () => import("../views/TaskDetailsView.vue"),
    },
    {
      path: "/create-task",
      name: "create-task",
      component: () => import("../views/CreateTaskView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

router.beforeEach((to, _, next) => {
  const isAuthenticated = store.getters["isAuthenticated"];
  const unprotectedRoutes = ["signin", "signup", "home"];
  const protectedRoutes = ["tasks", "taskDetails", "profile", "create-task"];

  if (isAuthenticated && unprotectedRoutes.includes(to.name)) {
    next({ name: "tasks" });
  } else if (!isAuthenticated && protectedRoutes.includes(to.name)) {
    next({ name: "signin" });
  } else next();
});

export default router;
