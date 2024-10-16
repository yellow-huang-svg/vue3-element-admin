import { createApp } from 'vue'
import App from './App.vue'
import setupPlugins from "@/plugins";

// 本地SVG图标
import 'virtual:svg-icons-register';
import "@/styles/index.less";

const app = createApp(App);
// 注册插件
app.use(setupPlugins);
app.mount("#app");