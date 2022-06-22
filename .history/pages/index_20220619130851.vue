<template>
  <div>
    <Particles id="tsparticles" :options="particleOptions" />
    <h1 class="text-3xl mt-8 font-bold text-center">what's up!</h1>
    <div class="flex items-center justify-center h-80">
      <NuxtLink to="/type">
        <div class="group w-40 p-4 bg-green-600 hover:bg-green-500 rounded-lg text-center">
          <p class="font-semibold text-lg">Play <font-awesome-icon :icon="['fas','play']" /></p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Particles from 'particles.vue'
declare module 'particles.vue'
Vue.use(Particles)

export default {
  data() {
    return {
      particleOptions: require('~/particle.json')
    }
  }
}
</script>

<style>
.particle {
  background: white;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
}
</style>