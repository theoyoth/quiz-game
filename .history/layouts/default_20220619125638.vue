<template>
  <Main>
      <particles-bg type="lines" :bg="true" color="#ffffff" num=50 /> 
      <Nuxt />
  </Main>
</template>

<script>
  import { ParticlesBg } from "particles-bg-vue";

  export default {
    components:{
      ParticlesBg
    }
  }
</script>