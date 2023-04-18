<template>
  <div ref="mod" class="w-full h-full">
    <div class="w-full h-1/2">
      <canvas class="w-full h-full"  id="three"></canvas>
    </div>

  <div ref="box" class="w-full h-auto relative">
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">独家放送</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <li v-for="item in privatecontent">
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="item.sPicUrl" alt="">
            <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{item.name}}</h3>
          </li>
        </ul>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import gsap from 'gsap';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import mymodle from '@/assets/frog_tamagotchi.glb';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import axios from "axios";
import httpurls from "@/httpurl";
export default {
  name: "topic",
  data(){
      return {
        privatecontent:''
      }
  },
  created() {

    let hotTopic = async () => {
      let privatecontent=await axios.get(`${httpurls}/personalized/privatecontent/list?limit=12`);
      this.privatecontent=privatecontent.data.result;
      console.log(this.hotdata,'hotdata')
    }
    hotTopic();
  },
  mounted() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#FFA7B5');
    const canvas = document.querySelector('#three');
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 3, 1000);
    camera.position.z = -20;
    camera.position.y = -2;
    camera.position.x = 0;
    camera.position.set(30, 10, -10); // 将摄像机位置设置在模型前面
    camera.lookAt(10, 0.2, 20); // 将摄像机的视线指向模型位置
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(mymodle, (gltf) => {
      var model = gltf.scene
      model.scale.set(10, 10, 10);
      model.position.y = -3;
      scene.add(model)
    });


    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement
      var width = window.innerWidth
      var height = window.innerHeight
      var canvasPixelWidth = canvas.width / window.devicePixelRatio
      var canvasPixelHeight = canvas.height / window.devicePixelRatio
      const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height
      if (needResize) {
        renderer.setSize(width, height, false)
      }
      return needResize
    }


    window.addEventListener('pointermove', (event) => {
      // 将鼠标位置映射到摄像机的位置和朝向
      const mouseX = event.clientX / window.innerWidth;
      const mouseY = event.clientY / window.innerHeight;
      const cameraX = Math.sin(mouseX * Math.PI * 2) * 20;
      const cameraY = Math.sin(mouseY * Math.PI * 2) * 20;
      const cameraZ = Math.cos(mouseX * Math.PI * 2) * 20;
      camera.position.set(cameraX, cameraY, cameraZ);
      camera.lookAt(0, 0, 0);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.copy(camera.position);
    scene.add(light);
    light.intensity = 100; // 调整光源强度
    light.color.setHex(0xff0000); // 调整光源颜色
    camera.zoom = 4;
    camera.updateProjectionMatrix();
    function animate() {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
      }
    }
    animate();
  },
  methods:{
    sendhot(id){
      console.log(id);
      this.$router.push({path:'/homepage/hotmsg',query:{id:id}})
    }
  }
}
</script>

<style scoped>

</style>