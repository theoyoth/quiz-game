<template>
  <div  class="mt-6">
    <div v-for="(q,index) in dataQuestions" :key="index">
      <div class="w-1/3 p-6 bg-gray-600 rounded-lg">
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
      answerQuestions:"",
      allQuestions:[],
      randomIdx:0,
    }
  },
  methods: {
    async getQuestions(){
      const dataQ = await this.$axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      this.dataQuestions = dataQ.data.results;
      this.dataQuestions.map((data,i) => {
        this.answerQuestions = [...data.incorrect_answers]
        // this.allQuestions = [...this.answerQuestions,...data.correct_answer]
        // this.randomIdx = Math.floor(Math.random() * 3) + 1
        // this.answerQuestions.splice(this.randomIdx,0,data.correct_answer)
      })
      // console.log(this.randomIdx)
      console.log(this.answerQuestions)
    }
  },
  mounted() {
    this.getQuestions()
  }

}
</script>