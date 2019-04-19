<style lang="scss">
  @import './login.scss'
</style>

<template>
  <div>
  <form>
     <p>用户名: <input type="text" v-model="formItem.username"></p>
    <p>密码: <input type="password" v-model="formItem.password"></p>
    <div>
      <button style="margin-left:30px" @click.prevent="handleLogin">登陆</button>
    </div>
  </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formItem: {
        username: 'super_admin',
        password: '12345678'
      }
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('Login', this.formItem).then(() => {
        this.$store.dispatch('getUserInfo').then(() => {
          this.$router.push('/')
        })
      })
    }
  }
}
</script>