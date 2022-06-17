<template>
  <div  class="mt-6">
    <div v-for="(q,index) in allQuestions" :key="index">
      <div class="w-1/3 p-6 bg-gray-600 rounded-lg">
        <h1>{{q.question}}</h1>
        <div class="mt-2 grid grid-cols-2 border border-white border-1">
          <div v-for="(an,i) in q.answer" :key="i" class="p-4 bg-green-500 rounded-lg cursor-pointer">
            <h2>{{an}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataQuestions:[],
      questions:[],
      answerQuestions:[],
      allQuestions:[],
      randomIdx:0,
    }
  },
  methods: {
    async getQuestions(){
      const dataQ = await this.$axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      this.dataQuestions = dataQ.data.results;
      this.dataQuestions.map((data,i) => {
        this.answerQuestions.push(data.incorrect_answers)
        
        this.randomIdx = Math.floor(Math.random() * 3) + 1
        this.answerQuestions[i].splice(this.randomIdx - 1, 0, data.correct_answer)

        this.allQuestions.push({question : data.question, answer: this.answerQuestions[i]})
      })
    }
  },
  mounted() {
    this.getQuestions()
  }

}
</script>