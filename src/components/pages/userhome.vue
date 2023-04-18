<template>
  <div  class="w-full h-auto" id="userhomebackground">
    <div  class="min-h-full">
      <nav class="border-b border-gray-200">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between">
            <div class="flex">
              <div class="flex flex-shrink-0 items-center">
              </div>
              <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                <span class="border-indigo-500 text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium" aria-current="page">个人中心</span>

                <span @click="dujiadu" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">独家放送</span>

                <span @click="byzhuanji" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">购买的专辑</span>

                <span  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">其他</span>

                <span @click="goout" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">退出登陆</span>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="sr-only"></span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button type="button" class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only"></span>
                    <img  class="h-8 w-8 rounded-full" :src="backgroundurl" alt="">
                  </button>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex items-center sm:hidden">
              <button @click="click" type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only"></span>

                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>

                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 pb-3 pt-2 hidden" id="mobiletolang">

            <span @click="dujiadu" class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">独家放送</span>

            <span @click="byzhuanji" class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">购买的专辑</span>

            <span class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">推出登陆</span>
          </div>

          <div class="border-t border-gray-200 pb-3 pt-4">
            <div class="flex items-center px-4">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="backgroundurl" alt="">
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800"></div>
                <div class="text-sm font-medium text-gray-500"></div>
              </div>
              <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="sr-only"></span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>


    <div v-show="show" class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <img :src="backgroundurl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover bakcground">
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div class=" opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">&nbsp;</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">&nbsp;</p>
      </div>
    </div>

    <div v-show="show" class="relative w-full h-16 flex items-center absolute z-30">
      <p class="text-4xl font-bold">{{ username }}</p>
    </div>

    <img v-show="show" crossorigin="anonymous" ref="userplaylistimg" :src="userplaylistimg" id="lovebackground" class="hidden">
    <div v-show="show" class="relative isolate overflow-hidden" id="lovebackgroundrgb">
      <div class="flex justify-center items-center h-full">
        <img ref="userplaylistimg" :src="userplaylistimg" id="lovebackground" class="absolute blur-lg scale-[3]">
        <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 relative">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">我喜欢的音乐</h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 "></p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <span  @click="sendloveid(userplaylistid)" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">查看</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-show="show" class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="flex items-center justify-between space-x-4">
          <h2 class="text-4xl font-black text-gray-900">收藏的歌单</h2>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 ">
          <div @click="sendsongsid(item.id,item.coverImgUrl)" v-for="item in usercollectsonglist" :key="item.id" class="group relative">
            <div class="h-64 overflow-hidden rounded-lg bg-gray-100 ">
              <img :src="item.coverImgUrl" class="overflow-hidden w-full object-cover">
            </div>
            <div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
              <h3>
                <span>
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ item.name }}
                </span>
              </h3>
            </div>
          </div>

          <!-- More products... -->
        </div>
      </div>
    </div>


  </div>
</template>

<script>

import axios from "axios";
import httpurls from "@/httpurl";
import gsap from "gsap";

export default {
  name: "userhome",
  data() {
    return {
      usermassgae: '',
      username: '',
      signature: '',
      backgroundurl: '',
      userplaylistname: '',
      userplaylistid: '',
      userplaylistimg: '',
      mobiletolang: false,
      userlovesonglist: '',
      usercollectsonglist: '',
      dialogVisible: false,
      show:false,
      drawer: false,
      direction: 'rtl',
    }
  },
  created() {
    let getusermsg = async () => {
      let userid = localStorage.getItem('usermasgId');
      let usermasgcookie = localStorage.getItem('usermasgcookie');
      this.usermassgae = JSON.parse(localStorage.getItem('usermasg'));
      let userplaylist = await axios.get(`${httpurls}/user/playlist?uid=${userid}`);//用户喜欢的歌单
      let usersingsonglist = await axios.get(`${httpurls}/user/playlist?uid=${userid}`);//用户的收藏之类的歌单
      console.log(this.usermassgae);
      this.username = this.usermassgae.data.profile.nickname;
      this.signature = this.usermassgae.data.profile.signature;
      this.backgroundurl = this.usermassgae.data.profile.avatarUrl;
      this.userplaylistname = userplaylist.data.playlist[0].name;
      this.userplaylistid = userplaylist.data.playlist[0].id;
      localStorage.setItem('userplaylistid', this.userplaylistid);
      this.userplaylistimg = userplaylist.data.playlist[0].coverImgUrl
      // let userplaylistdetail=await axios.get(`${httpurls}/playlist/track/all?id=${this.userplaylistid}&limit=100&offset=1`);
      // this.userlovesonglist=userplaylistdetail.data.songs;
      console.log(this.userlovesonglist);
      console.log(usersingsonglist.data.playlist.slice(1, usersingsonglist.data.playlist.length), 'usersingsonglist');
      this.usercollectsonglist = usersingsonglist.data.playlist.slice(1, usersingsonglist.data.playlist.length);
    }
    getusermsg();
  },
  mounted() {
    let setLoveBackground = (userplaylistimg, lovebackgroundrgb) => {
      const img = this.$refs.userplaylistimg;
      console.log(img)
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      img.crossOrigin = "Anonymous";
      img.onload = () => {
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
        console.log(`rgb(${avgR},${avgG},${avgB})`);
        document.getElementById(lovebackgroundrgb).style.background = `rgb(${avgR},${avgG},${avgB})`;
        //如果颜色过亮，字体颜色改为黑色
      };
    }
    setLoveBackground('userplaylistimg', 'lovebackgroundrgb');
    setTimeout(() => {
      this.show=true
    }, 100);
  },
  methods: {
    click() {
      if (this.mobiletolang === false) {
        this.mobiletolang = true;
        document.getElementById('mobiletolang').className = 'lass="space-y-1 pb-3 pt-2 block';
      } else {
        this.mobiletolang = false;
        document.getElementById('mobiletolang').className = 'lass="space-y-1 pb-3 pt-2 hidden';
      }
    },
    sendsongsid(id) {
      this.$router.push({
        path: '/homepage/songpages',
        query: {
          id: id,
        }
      })
    },
    sendloveid(id) {
      this.$router.push({
        path: '/homepage/songpages',
        query: {
          id: id,
        }
      })
    },
    dujiadu() {
      this.$router.push({
        path: '/homepage/hottopic',
      })
    },
    byzhuanji() {
      this.$router.push({
        path: '/homepage/buyzhuanji',
      })
    },
    goout() {
        this.$confirm('确定退出吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {  localStorage.removeItem('usermasgcookie');
          localStorage.removeItem('usermasg');
          localStorage.removeItem('ismassage');
          this.$router.push({
            path: '/login',
          })
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
    },
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

.bakcground {
  animation: scale 1000s infinite;
  animation-timing-function: linear;
}

* {
  transition: 1s;
}

span {
  cursor: pointer;
}

</style>