<template>
  <div class="w-full h-screen">
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{{lovemsg}}</h2>

        <div class="mx-auto mt-10 flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only"></label>
          <input @keydown.enter="search" v-model="inputext"  required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" :placeholder="uptext">
          <button type="button" @click="search" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            搜索
          </button>
        </div>


        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"/>
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop stop-color="#7775D6"/>
              <stop offset="1" stop-color="#E935C1" stop-opacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>

  </div>
    <!--
      This example requires some changes to your config:

      ```
      // tailwind.config.js
      module.exports = {
        // ...
        plugins: [
          // ...
          require('@tailwindcss/forms'),
        ],
      }
      ```
    -->
   



    <div class="w-full h-auto relative">
      <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <li @click="sendsinsid(item.id)" class="col-span-1 flex rounded-md shadow-sm" v-for="item in searchsingmsg" :key="item.id">
          <div class="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white">
            <img class="w-16 h-16" :src="item.al.picUrl" alt="">
          </div>
          <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a href="#" class="font-medium text-gray-900 hover:text-gray-600">{{item.name}}</a>
              <p class="text-gray-500 flex" v-for="item2 in item.ar">
                <span>{{item2.name}}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import httpurls from "@/httpurl";

export default {
  name: "search",
  data(){
    return {
      lovemsg:"",
      inputext:null,
      searchsingmsg:'',
      uptext:''
    }

  },
  created() {
    let getmsg = async () => {
      let lovemsg=await axios.get('https://api.mcloc.cn/love');
      this.lovemsg=lovemsg.data
    }
    getmsg();
  },
  methods: {
    search(){
      let getsing=async () => {
        let sing=await axios.get(`${httpurls}/cloudsearch?keywords=${this.inputext}`);
        this.searchsingmsg=sing.data.result.songs
        console.log(this.searchsingmsg)
      }
      getsing();
    },
    sendsinsid(id) {
      //全局事件总线提交
      this.$bus.$emit('sendsinsid', id);
      localStorage.setItem('singerid', JSON.stringify(id));
    },
  },
  watch: {
    inputext(val) {
      if(val === '') {
        this.uptext = '你想不到听什么了吗，那就回到主页发现发现吧'
      }
    }
  }
}
</script>

<style scoped>

</style>