<template>
<div>
  <div id="singbg" class=" relative overflow-hidden">
    <div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <!-- Product image -->
        <div class="lg:col-span-4 lg:row-end-1">
          <div class="h-96 overflow-hidden rounded-lg  overflow-hidden">
            <img ref="singbg" :src="coverImgUrl"  class="object-cover w-full object-center songimgs">
          </div>
        </div>

        <!-- Product details -->
        <div class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div class="flex flex-col-reverse">
            <div class="mt-4">
              <h1 class="text-2xl font-bold tracking-tight  sm:text-3xl">{{songslistsname}}</h1>

              <h2 id="information-heading" class="sr-only">&nbsp;</h2>
              <p class="mt-2 text-sm ">&nbsp;</p>
            </div>

            <div>
              <h3 class="sr-only">&nbsp;</h3>
              <div class="flex items-center">
              </div>
              <p class="sr-only">&nbsp;</p>
            </div>
          </div>

          <p class="mt-6 ">{{description}}</p>
        </div>

      </div>
    </div>
  </div>


  <div id="list">
    <div  class="mt-6 flow-root overflow-hidden">
      <ul   role="list" v-for="item in playlisttracks" :key="item.id" class="-my-5 divide-y divide-gray-200">
        <li  class="py-6">
          <div  id="sing" class="flex items-center space-x-4 ">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" :src="item.al.picUrl" alt="">
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium ">{{item.name}}</p>
              <p class="truncate text-sm "></p>
            </div>
            <div>
              <span @click="sendsong(item.id)"  class="pointer inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">播放</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import httpurls from "@/httpurl";
import gsap from "gsap";
export default {
  name: "songpages",
  data() {
    return {
      songspageid: '',
      picurl:'',
      songslistsname:'',
      coverImgUrl:'',
      description:'',
      playlisttracks:'',
      heartshow:false,
    }
  },
  created() {
    console.log(1)
    let getsongslist=async ()=>{
      console.log(2)
      this.songspageid = this.$route.query.id;
      console.log(3)
      let getsongslist = await axios.get(`${httpurls}/playlist/detail?id=${this.songspageid}`);
      console.log(4)
      let playlisttracks = await axios.get(`${httpurls}/playlist/track/all?id=${this.songspageid}&limit=100&offset=0`);
      console.log(5)
      this.songspageid = this.$route.query.id;
      localStorage.setItem('songspageid',this.songspageid);
      this.songspageid = localStorage.getItem('songspageid');
      console.log(getsongslist.data);
      this.songslistsname = getsongslist.data.playlist.name;
      this.coverImgUrl = getsongslist.data.playlist.coverImgUrl;
      this.description = getsongslist.data.playlist.description;
      this.playlisttracks = playlisttracks.data.songs;
    }
    getsongslist();
  },
  methods: {
    sendsong(id){
      this.$bus.$emit('sendsinsid', id);
    }
  },
  mounted() {
    //用jsap写一个渐入的动画
    this.$nextTick(() => {
      gsap.from("#singbg", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power4.out",
      });
      gsap.from("#list", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power4.out",
      });
    });

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
      document.getElementById('singbg').style.background = `rgb(${avgR + 60},${avgG + 60},${avgB + 60})`;
      if (avgR > 200 && avgG > 200 && avgB > 200) {
        document.getElementById('singbg').style.color = `rgb(255,255,255)`;
      } else {
        document.getElementById('singbg').style.color = `rgb(0,0,0)`;
      }
    }
    this.heartshow = localStorage.getItem('userplaylistid') === this.songspageid;
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

.songimgs{
  animation: scale 200s infinite ;
  animation-timing-function: linear;
}
.pointer{
  cursor: pointer;
}
.songsli{
  border: #9ca3af 1px solid;
}

</style>