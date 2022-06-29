<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    async getKuisAlkitab(){
      // try{
      //   const res = await fetch('../lib/kuis.json',{headers : { 
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      //  }})
      //   const data = await res.json()
      //   console.log(data)
      // }
      // catch(err){
      //   console.log("not get data")
      // }
      await fetch("../lib/kuis.json").then(res => await res.json()).then(data => console.log(data))
    }
  },
  mounted() {
    this.getKuisAlkitab()
  }
}
</script>