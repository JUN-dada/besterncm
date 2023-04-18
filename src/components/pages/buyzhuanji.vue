<template>
  <div class=" w-full h-auto">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl  font-bold text-gray-900">我的数字专辑</h2>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div @click="sendzhuanjiid(item.albumId)" v-for="item in getpurchased" :key="item.id"  class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img :src="item.cover" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <span>
                <span class="absolute inset-0"></span>
              </span>
            </h3>
            <p class="text-base font-semibold text-gray-900">{{item.albumName}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import httpurls from "@/httpurl";

export default {
  name: "buyzhuanji",
  data() {
    return {
      getpurchased: '',
    };
  },
  created() {
    let getpurchased=async ()=>{
      let res=await axios.get(`${httpurls}/digitalAlbum/purchased`)
      this.getpurchased=res.data.paidAlbums
    }
    getpurchased()
  },
  methods: {
    sendzhuanjiid(id) {
      console.log(id)
      this.$router.push({
        path: '/homepage/zhuanjipage',
        query: {
          id: id,
        }
      });
    },
  },
}
</script>

<style scoped>

</style>