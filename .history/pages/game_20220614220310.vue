<template>
  <div  class="mt-6">
    <Loading v-if="$fetchState.pending"/>
    <div v-else class="w-full grid grid-cols-1 place-items-center">
      <!-- <div v-for="(q,index) in allQuestions" :key="index" class="mb-4 w-2/5">
        <div class="p-6 bg-gray-600 rounded-lg text-center">
          <h1 class="text-lg font-semibold"><span>{{index+1}}. </span>{{q.question}}</h1>
          <div class="mt-2 grid grid-cols-2 gap-4 justify-items-center">
            <div v-for="(an,i) in q.answer" :key="i" class="w-40 p-4 bg-green-600 rounded-lg cursor-pointer text-center hover:bg-green-500">
              <h2>{{an}}</h2>
            </div>
          </div>
        </div>
      </div> -->
      <div v-for="(q,i) in questionNow" :key="i" class="mb-4 xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-3/4">
        <div class="p-6 bg-gray-600 rounded-lg text-center">
          <h1 class="text-lg font-semibold"><span>{{i+1}}. </span>{{q.question}}</h1>
          <div class="mt-4 grid grid-cols-2 gap-4 justify-items-center">
            <div v-for="(an,i) in q.answer" :key="i" class="w-40 p-4 bg-green-600 rounded-lg cursor-pointer text-center hover:bg-green-500">
              <h2>{{an}}</h2>
            </div>
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
      currentQuestion:"",
      questionNow:[],
      randomIdx:0,
      questionIndex:0,
    }
  },
  async fetch(){
    await this.getNewQuestion()
  },
  methods: {
    async getQuestions(){
      const dataQ = await this.$axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      this.dataQuestions = dataQ.data.results;
      this.dataQuestions.map((data,i) => {
        this.answerQuestions.push(data.incorrect_answers)
        
        this.randomIdx = Math.floor(Math.random() * 3) + 1
        this.answerQuestions[i].splice(this.randomIdx - 1, 0, data.correct_answer)

        this.allQuestions.push({question : data.question, answer: this.answerQuestions[i], correctAnswer: data.correct_answer})
      })      
    },
    async getNewQuestion(){
      await this.getQuestions()

      this.questionIndex = Math.floor(Math.random() * this.allQuestions.length)
      this.currentQuestion = this.allQuestions[this.questionIndex]
      this.questionNow.push(this.currentQuestion)
    }
  },
  fetchDelay : 2000,
  // mounted() {
  //   this.getNewQuestion()
  // }

}
</script>