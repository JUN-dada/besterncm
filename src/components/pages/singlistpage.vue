<template>
  <div class="w-full h-full relative">

    <div class="w-full h-full blur-3xl scale-[8] fixed -z-20 overflow-hidden">
      <img class="w-full object-cover" :src="item.coverImgUrl">
    </div>

    <div class="relative z-20 overflow-hidden">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 class="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ item.name }}</h1>
        <form class="mt-12">
          <section aria-labelledby="cart-heading">
            <ul role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
              <li v-for="item in songs" :key="item.id" class="flex py-6">
                <div class="flex-shrink-0">
                  <img :src="item.al.picUrl" alt="Front side of mint cotton t-shirt with wavey lines pattern." class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32">
                </div>
                <div class="ml-4 flex flex-1 flex-col sm:ml-6">
                  <div>
                    <div class="flex justify-between">
                      <h4 class="text-sm">
                        <a href="#" class="font-medium text-white hover:text-gray-800">{{ item.name }}</a>
                      </h4>
                      <svg @click="sendsinsid(item.id)" class="point" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m4.25 3l1.166-.624l8 5.333v1.248l-8 5.334l-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z" clip-rule="evenodd"/></svg>
                    </div>
                    <p class="mt-1 text-sm text-gray-500"></p>

                    <span  v-for="item2 in item.ar" class="mt-1 text-sm text-gray-500 relative z-50 point">
                      <span @click="sendartistmassage(item2.id)">{{item2.name}}&nbsp;&nbsp;</span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </form>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
let timer;
export default {
  name: "singlistpage",
  data() {
    return {
      item: '',
      songs: '',
    }
  },
  methods:{
    sendartistmassage(id)
    {
      //路由跳转
      this.$router.push({path: '/homepage/hotartists', query: {id}});
      localStorage.setItem('singerid', JSON.stringify(id));
    },
    sendplaysingmassage(item)
    {
      localStorage.setItem('sendplaysing',JSON.stringify(item));
      this.$bus.$emit('playsing',item);
    },
    sendsinsid(id)
    {
      //全局事件总线提交
      this.$bus.$emit('sendsinsid',id);
      localStorage.setItem('singerid', JSON.stringify(id));
    },
  },
  created() {
    //获取本地存储的数据
    this.item=JSON.parse(localStorage.getItem('singlist'))  ;
    console.log(this.item.id)
    axios.get('https://service-o15lm07j-1300177834.cd.apigw.tencentcs.com/release/playlist/track/all?id=' + this.item.id).then(res => {
      this.songs = res.data.songs
      console.log(res)
    }).catch(
        err => {
          console.log(err);
        }
    )
  },
}
</script>

<style scoped>
* {
  transition: 4s;
}

.bg-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.point
{
  cursor: pointer;
}

</style>