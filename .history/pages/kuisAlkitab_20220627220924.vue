<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      allQuiz:[],
    }
  },
  methods: {
    async getKuisAlkitab(){
      const data = require('../kuis.json');
      this.allQuiz = data
    }
  },
  mounted() {
    this.getKuisAlkitab()
    console.log(this.allQuiz)
  }
}
</script>