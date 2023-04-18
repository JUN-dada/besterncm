<template>
  <div class="bg-white">
    <div aria-hidden="true" class="relative w-full h-96 overflow-hidden">
      <img :src="zhuanjifengmian" alt="" class="w-full zhuanjiimg">
      <div class="absolute inset-0 bg-gradient-to-t from-white"></div>
    </div>

    <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{zhuanjiname}}</h2>
        <p class="mt-4 text-gray-500">{{zhuanjijieshao}}</p>
      </div>

      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div @click="sendsinsid(item.id)" v-for="item in songs" :key="item.id"  class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">{{item.name}}</dt>
          <dd v-for="item2 in item.ar" class="mt-2 text-sm text-gray-500">
            <span>{{item2.name}}</span>
          </dd>
        </div>
      </dl>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import httpurls from "@/httpurl";

export default {
  name: "zhuanjipage",
  data() {
    return {
      zhuanjiid: '',
      zhuanjimsg:'',
      zhuanjiname:'',
      zhuanjijieshao:'',
      zhuanjifengmian:'',
      songs:''
    }
  },
  created() {
    localStorage.setItem('zhuanjiid', this.$route.query.id);
    this.zhuanjiid = localStorage.getItem('zhuanjiid');
    let zhuanjimsg=async ()=>{
      console.log(this.zhuanjiid,'专辑id')
      let res=await axios.get(`${httpurls}/album?id=${this.zhuanjiid}`);
      console.log(this.zhuanjiid,'专辑id')
      this.zhuanjimsg=res.data;
      this.zhuanjiname=res.data.album.name;
      this.zhuanjijieshao=res.data.album.description;
      this.zhuanjifengmian=res.data.album.picUrl;
      this.songs=res.data.songs;
    }
    zhuanjimsg();
  },
  methods: {
    sendsinsid(id)
    {
      this.$bus.$emit('sendsinsid',id);
      localStorage.setItem('singerid', JSON.stringify(id));
    },
  },
  mounted() {
    let zhuanjimsg=async ()=>{
      let res=await axios.get(`${httpurls}/album?id=${this.zhuanjiid}`);
      console.log(res.data,'专辑信息')
      this.zhuanjimsg=res.data;
      this.zhuanjiname=res.data.album.name;
      this.zhuanjijieshao=res.data.album.description;
      this.zhuanjifengmian=res.data.album.picUrl;
      this.songs=res.data.songs;
    }
    zhuanjimsg();
  }
}
</script>

<style scoped>
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
.zhuanjiimg{
  animation: scale 500s infinite ;
  animation-timing-function: linear;
}

*{
  transition: 1s;
}
</style>