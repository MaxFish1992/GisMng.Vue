<template>
  <div
    id="app"
    @mouseover="OperatingWebsite()"
  >
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentTime: new Date().getTime()
    };
  },
  methods: {
    OperatingWebsite() {
      let currentTime = this.currentTime;
      console.log(currentTime, "currentTime");
      let lastTime = new Date().getTime();
      console.log(lastTime, "lastTime");
      let timeOut = 10 * 60 * 1000; //设置时间 10分钟
      if (lastTime - currentTime > timeOut) {
        // 未操作页面，跳转登录页面
        this.currentTime = new Date().getTime();
        this.$router.push("/");
        // const fullPath = this.$route.fullPath;
        // const query = this.$Base64.encode(fullPath);
        // this.$router.push({
        //     path: "/login",
        //     query: {
        //         type: query
        //     }
        // });
      } else {
        this.currentTime = new Date().getTime();
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
