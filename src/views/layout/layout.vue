<template>
  <el-container class="container">
    <el-header>这是头部</el-header>
    <el-container class="wrapper">
      <el-aside class="aside-container">
        <router-link :to="{path: '/message/list'}">前往消息页</router-link>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }
  .wrapper {
    height: 100%;
    width: 100%;
  }
  .aside-container {
    width: 160px;
    background-color: #ccc;
  }
</style>