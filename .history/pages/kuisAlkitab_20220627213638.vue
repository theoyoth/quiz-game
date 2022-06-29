<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    async getKuisAlkitab(){
      const data = await fetch('../lib/kuis.json')
    }

  }
}
</script>