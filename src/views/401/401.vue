<template>
  <div>
    <h2>没有权限访问</h2>
    <p>返回首页({{ time }})</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>
<script>
import { clearInterval, setInterval } from "timers";
export default {
  data() {
    return {
      time: 5,
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.time === 0) this.prevBack()
      else this.time--
    },1000)
  },
  methods: {
    prevBack() {
      this.$router.replace('/')
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
};
</script>