<template>
  <div class="w-full h-screen" >
    <div class="flex min-h-full">
      <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">扫码登录捏</h2>
            <p class="mt-2 text-sm text-gray-600">
              <span class="font-medium text-indigo-600 hover:text-indigo-500">{{ lovemassage }}</span>
            </p>
          </div>
          <div>
            <label class="text-base font-semibold text-gray-900">隐私</label>
            <p class="text-sm text-gray-500"></p>
            <fieldset class="mt-4">
              <div class="space-y-4">
                <div class="flex items-center">
                  <input id="email" v-model="arr" value="userid" name="notification-method" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900">保存个人id</label>
                </div>

                <div class="flex items-center">
                  <input id="sms" v-model="arr" value="userzhuanji" name="notification-method" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="sms" class="ml-3 block text-sm font-medium leading-6 text-gray-900">保存上一个播放的专辑记录</label>
                </div>

                <div class="flex items-center">
                  <input id="push" v-model="arr" value="usersongs" name="notification-method" type="checkbox" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="push" class="ml-3 block text-sm font-medium leading-6 text-gray-900">保存上一个播放歌曲id的记录</label>
                </div>
              </div>
            </fieldset>
          </div>
          <br>
          <button @click="clic" type="button" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">保存已选{{newarr}}</button>

          <div class="mt-8">
            <div>
              <div>
                <img :src="qrimg">
              </div>

              <div class="relative mt-6">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">

                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="space-y-6">
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden w-0 flex-1 lg:block hidden 2xl:block xl:block md:hidden sm:hidden">
        <img class="absolute inset-0 h-full w-full object-cover avicii"
             src="https://pic.imgdb.cn/item/6437851a0d2dde5777eaebd7.jpg"
             alt="">
      </div>
    </div>

  </div>
</template>

<script>
let timer;
import axios from "axios";
import httpurls from "@/httpurl";
import {mapState,mapActions} from "vuex";

let timber;
let getcookie;
let time2;
export default {
  name: "login",
  data() {
    return {
      qrimg: '',
      arr:[]
    }
  },
  created() {
    let login = async () => {
      let getqrkey = await axios.post(`/api/login/qr/key?timestamp=${Date.now()}`);
      let key = getqrkey.data.data.unikey;
      let qrimg = await axios.post(`/api/login/qr/create?key=${key}&timestamp=${Date.now()}&qrimg=true`);
      this.qrimg = qrimg.data.data.qrimg;
      timber= setInterval(async () => {
        let userlogin = await axios.post(`/api/login/qr/check?key=${key}&timestamp=${Date.now()}`);
        if (userlogin.data.code === 803) {
          document.cookie = userlogin.data.cookie;
          console.log(userlogin.data.cookie);
          localStorage.setItem("usermasgcookie", userlogin.data.cookie);
          //获取登录状态
          let getlogin = await axios.post(`/api/login/status?timestamp=${Date.now()}&${userlogin.data.cookie}`);
          console.log(getlogin.data);
          localStorage.setItem("usermasg", JSON.stringify(getlogin.data));
          //存储用户id
          localStorage.setItem("usermasgId", getlogin.data.data.profile.userId);
          localStorage.setItem('ismassage', true);
          return clearInterval(timber);
        }
      }, 1000)
    }
    login();
  },
  beforeDestroy() {
    // clearInterval(timber);
  },
  mounted() {
    time2 = setInterval(() => {
      if (localStorage.getItem("usermasg")!==null)
      {
        this.$router.push({path: "/homepage"});
        return clearInterval(time2);
      }
    }, 1000)
    console.log(this.lovemassage)
    this.$store.dispatch('getlovemassage');
  },
  computed: {
    ...mapState({
      lovemassage: state => state.lovemassage
    }),
    newarr()
    {
      return this.arr.length
    }
  },
  methods:{
    clic(){
      this.$confirm('确定保存吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {  localStorage.removeItem('usermasgcookie');
        this.$message({
          type: 'success',
          message: `保存成功!,您保存了${this.arr.length}个选项`
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    }
  }
}
</script>

<style scoped>


@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.bgimg {
  animation: move 15s infinite;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.avicii {
  animation: scale 150s infinite;
}

</style>