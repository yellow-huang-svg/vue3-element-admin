<template>
  <div :class="{ 'has-logo': true }">
    <!-- 左侧和顶部布局的Sidebar -->
    <SidebarLogo :collapse="!appStore.sidebar.opened" />
    <el-scrollbar>
      <SidebarMenu :menu-list="constantRoutes" base-path="" />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { constantRoutes } from "@/router";
import { useAppStore } from "@/store";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.has-logo {
  .el-scrollbar {
    height: calc(100vh - $navbar-height);
  }
}
</style>
