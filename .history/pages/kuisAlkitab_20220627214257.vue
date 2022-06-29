<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    async getKuisAlkitab(){
      const res = await fetch('../lib/kuis.json')
      const data = await res.json()
      console.log(data)
    }
  },
  mounted() {
    this.getKuisAlkitab()
  }
}
</script>