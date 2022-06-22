<template>
  <Main>
      <particles-bg type="lines" :bg="true" num=50 :config="config" class="particle"></particles-bg> 
      <Nuxt />
  </Main>
</template>

<script>
export default{
  data(){
    return {
      config: {
          num: [4, 7],
          rps: 0.1,
          radius: [5, 40],
          life: [1.5, 3],
          v: [2, 3],
          tha: [-30, 30],
          alpha: [0.6, 0],
          scale: [0.1, 0.4],
          position: "all",
          cross: "dead",
        }
    }
  }
}
</script>
<style>
  .particle{
    position:absolute,
    top:0,
    left:0,
  }
</style>