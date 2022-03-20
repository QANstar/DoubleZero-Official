<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="dz-nav"
      @select="handleSelect"
    >
      <div class="nav-title">双零团队</div>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">团队介绍</el-menu-item>
      <el-menu-item index="3">部门</el-menu-item>
      <el-menu-item index="4">招新</el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="less" scoped>
.dz-nav {
  padding: 0 30px;
}
.nav-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #ffcc99;
}
</style>
<script>
export default {
  methods: {
    handleSelect() {},
  },
};
</script>