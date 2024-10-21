import type { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");
export const internalDoc = () => import("@/views/doc/internal-doc.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "/",
    component: Layout,
    redirect: "/homepage",
    children: [
      {
        path: "homepage",
        component: () => import("@/views/home/index.vue"),
        // 用于 keep-alive 功能，需要与 SFC 中自动推导或显式声明的组件名称一致
        // 参考文档: https://cn.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
        name: "HomePage",
        meta: {
          title: "首页",
          icon: "homepage",
          affix: true,
          keepAlive: true,
        },
      },
      {
        path: "404",
        component: () => import("@/views/error/404.vue"),
        meta: { hidden: true },
      },

    ]
  },
  {
    path: "/doc",
    component: Layout,
    redirect: "https://juejin.cn/post/7228990409909108793",
    name: "/doc",
    meta: {
      title: "平台文档",
      icon: "menu",
      hidden: false,
      alwaysShow: false,
      params: null,
    },
    children: [
      {
        path: "internal-doc",
        component: internalDoc,
        name: "InternalDoc",
        meta: {
          title: "document",
          icon: "document",
          hidden: false,
          alwaysShow: false,
          params: null,
        },
      },
      {
        path: "https://juejin.cn/post/7228990409909108793",
        name: "Https://juejin.cn/post/7228990409909108793",
        meta: {
          title: "平台文档(外链)",
          icon: "document",
          hidden: false,
          alwaysShow: false,
          params: null,
        },
      },
    ],
  },
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
