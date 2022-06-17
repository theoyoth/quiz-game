<template>
  <div>
    <div v-for="(q,index) in dataQuestions" :key="index">
      <h1>{{q.category}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataQuestions:[],
      questions:[],
    }
  },
  methods: {
    async getQuestions(){
      const dataQ = await this.$axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      this.dataQuestions.push(dataQ.data);
      console.log(this.dataQuestions)
    }
  },
  mounted() {
    this.getQuestions()
  }

}
</script>