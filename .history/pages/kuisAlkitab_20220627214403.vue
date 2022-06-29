<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    async getKuisAlkitab(){
      try{
        const res = await fetch('../lib/kuis.json')
        const data = await res.json()
        console.log(data)
      }
      catch(err){
        console.log("not get data")
      }
    }
  },
  mounted() {
    this.getKuisAlkitab()
  }
}
</script>