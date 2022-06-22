<template>
  <Main>
      <particles-bg type="lines" :bg="true" num=50 :config="config"></particles-bg> 
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
          body: icon,
          alpha: [0.6, 0],
          scale: [0.1, 0.4],
          position: "all",
          cross: "dead",
          random: 15
        }
    }
  }
}
</script>
