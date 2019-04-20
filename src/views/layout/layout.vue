<template>
  <el-container class="container">
    <el-header class="header">
      <el-button type="primary" size="mini" @click="handleLogout">退出</el-button>
    </el-header>
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
  methods: {
    handleLogout() {
      this.$Progress.start()
      this.$store.dispatch('LoginOut').then(() => {
        this.$Progress.finish()
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;

    .header {
      display: flex;
      justify-content: flex-end;
    }
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