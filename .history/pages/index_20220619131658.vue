<template>
  <div>
    <particles-bg type="lines" :bg="true" :config="config"/>
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
import { ParticlesBg } from "particles-bg-vue"

exports default {
  components: {
    ParticlesBg
  },
  data(){
    return { 
      config: {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-30, 30],
        body: icon,
        alpha: [0.6, 0],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 15
      }
    }
  }
};
</script>
