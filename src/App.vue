<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


import Login from "@/components/login.vue";
import Homepage from "@/components/homepage.vue";

export default {
  name: 'App',
  components: {
    Homepage,
    Login
  },
  created() {
  }
}
</script>

<style>

</style>