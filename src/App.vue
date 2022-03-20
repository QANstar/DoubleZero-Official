<template>
  <header class="nav">
    <TopMenu></TopMenu>
  </header>
  <main class="main">
    <router-view />
  </main>
</template>

<style lang="less" scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
}
.main {
  padding-top: 59px;
}
</style>

<script>
import TopMenu from "./components/TopMenu.vue";
export default {
  components: {
    TopMenu,
  },
};
</script>