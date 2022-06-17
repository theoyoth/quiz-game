<template>
  <div>
    <div v-for="(q,index) in dataQuestions" :key="index" class="mt-4">
      <h1>{{q.category}}</h1>
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