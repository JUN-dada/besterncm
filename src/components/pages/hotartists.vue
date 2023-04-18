<template>
  <div class="w-full h-auto">
    <div v-show="true" id="bg" ref="background" class="py-24 sm:py-32">
      <div class="relative isolate">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mx-auto flex max-w-2xl flex-col gap-16  px-6 py-16   sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img ref="myImage" class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" :src="singermsg.cover" alt="">
            <div ref="container" class="w-full flex-auto">
              <h2 class="text-3xl font-bold tracking-tight font-black sm:text-4xl">{{ singermsg.name }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-show="show" class="relative" id="singbg">
      <div class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img ref="singbg" :src="topsong1img" class="h-full w-full object-cover" alt="">
        <svg viewBox="0 0 926 676" aria-hidden="true" class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
          <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"/>
          <defs>
            <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
              <stop stop-color="#776FFF"/>
              <stop offset="1" stop-color="#FF4694"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 class="text-base font-semibold leading-7 text-indigo-400"></h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ topsong1.name }}</p>
          <p class="mt-6 text-base leading-7 text-gray-300">{{ topsongsname }}</p>
          <div @click="sendsinsid(topsong1.id)" class="mt-8">
            <span class="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">播放</span>
          </div>
        </div>
      </div>
    </div>

    <ul v-show="show" role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow" v-for="item in topsong.slice(0,num)" :key="topsong.id">
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">{{ item.name }}</h3>
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">
              <span v-for="item2 in item.ar">{{ item2.name }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
          </div>
          <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" :src="item.al.picUrl" alt="">
        </div>
        <div>
          <div @click='sendsongsid(item.id)' class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <span class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10 7l6 5l-6 5V7z"/></svg>
                播放
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div v-show="show" class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
    <span style="cursor: pointer" @click="clicknum" class="bg-white px-2 text-gray-500">
     加载更多
    </span>
      </div>
    </div>


    <div v-show="show" class="bg-white py-24 md:py-32 lg:py-40 relative">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">歌手专辑</h2>
        </div>
        <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
          <li @click="sendzhuanjiid(item.id)" v-for="item in artistalbumall.slice(0,artistalbumallnum)" :key="item.id">
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="item.picUrl" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">{{ item.name }}</h3>
            <p class="text-base leading-7 text-gray-600">{{ item.subType }}</p>
          </li>

        </ul>
      </div>
    </div>

    <div v-show="show" class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
    <span style="cursor: pointer" @click="artistalbumallnumadd" class="bg-white px-2 text-gray-500">
     加载更多
    </span>
      </div>
    </div>


    <div v-show="show" class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MV</h2>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <li  @click="dialogVisible = true" v-for="item in singermv.slice(0,singermvnum)">
            <img  class="aspect-[3/2] w-full rounded-2xl object-cover" :src="item.imgurl" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ item.name }}</h3>
            <p class="text-base leading-7 text-gray-600">{{ item.playCount }}次播放</p>
            <p class="text-base leading-7 text-gray-600">{{ item.publishTime }}</p>
          </li>
          <!-- More people... -->
        </ul>
      </div>
    </div>


    <div v-show="show" class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
    <span style="cursor: pointer" @click="singermvadd" class="bg-white px-2 text-gray-500">
     加载更多
    </span>
      </div>
    </div>


  </div>


</template>

<script>
//本地存储一串数字


import httpurls from "@/httpurl";
import axios from "axios";
import {useParallax} from '@vueuse/core'
import gsap from "gsap";
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  name: "hotartists",
  beforeCreate() {
    window.scrollTo(0, 0)
    //获取当前组件的位置

  },
  data() {
    return {
      singerid: '',
      singermsg: '',
      topsong: '',
      topsong1: '',
      topsong1img: '',
      topsong1id: '',
      topsongsname: '',
      num: 6,
      artistalbumall: '',
      artistalbumallnum: 6,
      singermv: '',
      singermvnum: 6,
      show: false,
      dialogVisible: false,
      mvsplay:false
    }
  },
  created() {
    //每当跳转路由就回到顶部
    this.singerid = JSON.parse(localStorage.getItem('singerid'));
    console.log(this.singerid);
    const hotartistsmsg = async () => {
      try {
        const res = await axios.get(`${httpurls}/artist/detail?id=${this.singerid}`);
        this.singermsg = res.data.data.artist;
        console.log(this.singermsg)
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    const topsong = async () => {
      try {
        const res = await axios.get(`${httpurls}/artist/top/song?id=${this.singerid}&limit=8`);
        console.log(res)
        this.topsong = res.data.songs;
        this.topsong1 = res.data.songs[0];
        this.topsong1id = this.topsong1.id;
        this.topsong1img = this.topsong1.al.picUrl;
        this.topsongsname = this.topsong1.al.name;
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    const artistalbum = async () => {
      try {
        const res = await axios.get(`${httpurls}/artist/album?id=${this.singerid}`);
        console.log(res.data.hotAlbums, '专辑')
        this.artistalbumall = res.data.hotAlbums;
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    const getsingermv = async () => {
      try {
        const res = await axios.get(`${httpurls}/artist/mv?id=${this.singerid}`);
        console.log(res.data.mvs, 'mv')
        this.singermv = res.data.mvs;
        console.log(this.singermv,'ahdahd')
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    //获取歌手mv
    hotartistsmsg();
    //获取热门歌手
    topsong();
    //获取歌手热门歌曲
    artistalbum();
    //获取歌手专辑
    getsingermv();
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.show = true;
      }, 100)
      gsap.from("#bg", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power4.out",
      });
    })

    let getrgb = () => {
      const img = this.$refs.myImage;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      img.crossOrigin = "anonymous";
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        const pixelCount = canvas.width * canvas.height;
        let r = 0;
        let g = 0;
        let b = 0;
        for (let i = 0; i < pixelCount; i++) {
          r += pixels[i * 4];
          g += pixels[i * 4 + 1];
          b += pixels[i * 4 + 2];
        }
        const avgR = r / pixelCount;
        const avgG = g / pixelCount;
        const avgB = b / pixelCount;
        document.getElementById('bg').style.background = `rgb(${avgR},${avgG},${avgB})`;
        if (avgR < 100 && avgG < 100 && avgB < 100) {
          document.getElementById('bg').style.color = `#fff`;
        }
        //如果颜色过浅，字体颜色改为深色
        if (avgR > 200 && avgG > 200 && avgB > 200) {
          document.getElementById('bg').style.color = `#000`;
        }
      };
    }


    let getrgbsing = () => {
      const img = this.$refs.singbg;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      img.crossOrigin = "anonymous";
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        const pixelCount = canvas.width * canvas.height;
        let r = 0;
        let g = 0;
        let b = 0;
        for (let i = 0; i < pixelCount; i++) {
          r += pixels[i * 4];
          g += pixels[i * 4 + 1];
          b += pixels[i * 4 + 2];
        }
        const avgR = r / pixelCount;
        const avgG = g / pixelCount;
        const avgB = b / pixelCount;
        document.getElementById('singbg').style.background = `rgb(${avgR},${avgG},${avgB})`;
      };
    }

    getrgb();
    getrgbsing();
  },
  methods:
      {
        clicknum() {
          this.num += 6;
        },
        artistalbumallnumadd() {
          this.artistalbumallnum += 6;
        },
        singermvadd() {
          this.singermvnum += 6;
        },
        sendsinsid(id) {
          console.log(id)
          //全局事件总线提交
          this.$bus.$emit('sendsinsid', id);
          localStorage.setItem('singerid', JSON.stringify(id));
        },
        sendsongsid(id) {
          console.log(id, 'sendsongsid')
          //全局事件总线提交
          this.$bus.$emit('sendsinsid', id);
          localStorage.setItem('songid', JSON.stringify(id));
        },
        sendzhuanjiid(id) {
          console.log(id)
          this.$router.push({
            path: '/homepage/zhuanjipage',
            query: {
              id: id,
            }
          });
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
        }
      },
  beforeDestroy() {
    localStorage.setItem('is_reloaded', JSON.stringify(0));
  },
}


</script>

<style scoped>

</style>