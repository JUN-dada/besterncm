<template>
<div class="w-full h-screen">
  <div class="w-full h-1/2 bg-blue-300">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

</div>
</template>

<script>
export default {
  name: "singerintroduction"
}
</script>

<style scoped>

</style>