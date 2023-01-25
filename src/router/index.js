import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/dashboard",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/dashboard/DashboardView.vue"),
    },
    {
      path: "/governance",
      name: "governance",
      component: () => import("@/views/governance/GovernanceView.vue"),
      children: [
        {
          name: "project",
          path: "project",
          component: () => import("@/views/governance/ProjectView.vue"),
        },
      ],
    },
  ],
});

export default router;
