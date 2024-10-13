import type { App } from "vue";

import { setupStore } from "@/store";
import { setupRouter } from "@/router";
export default {
  install(app: App<Element>) {
    // 状态管理(store)
    setupStore(app);
    // 路由(router)
    setupRouter(app);
  },
};
