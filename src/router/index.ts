import type { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
//   {
//     path: "/redirect",
//     component: Layout,
//     meta: { hidden: true },
//     children: [
//       {
//         path: "/redirect/:path(.*)",
//         component: () => import("@/views/redirect/index.vue"),
//       },
//     ],
//   },

//   {
//     path: "/login",
//     component: () => import("@/views/login/index.vue"),
//     meta: { hidden: true },
//   },
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}

export default router;
