<template>
  <div  class="mt-6">
    <div v-for="(q,index) in dataQuestions" :key="index">
      <div class="w-1/3 p-6 bg-gray-400">
        <h1>{{q.question}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataQuestions:"",
      questions:[],
    }
  },
  methods: {
    async getQuestions(){
      const dataQ = await this.$axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      this.dataQuestions = dataQ.data.results;
      console.log(this.dataQuestions)
    }
  },
  mounted() {
    this.getQuestions()
  }

}
</script>