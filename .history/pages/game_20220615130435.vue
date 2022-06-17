<template>
  <div  class="mt-6">
    <Loading v-if="$fetchState.pending"/>
    <div v-else class="w-full grid grid-cols-1 place-items-center">
      <div v-for="(q,i) in questionNow" :key="i" class="mb-4 xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3">
        <div class="p-6 bg-gray-600 rounded-lg text-center">
          <h1 class="text-lg font-semibold"><span>{{i+1}}. </span>{{q.question}}</h1>
          <div class="mt-4 grid grid-cols-2 gap-4 justify-items-center">
            <div v-for="(an,i) in q.answer" :key="i" class="w-40 p-4 bg-green-600 rounded-lg cursor-pointer text-center hover:bg-green-500" @click="sendAnswer">
              {{an}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="feedback !== ''">
        <h1>{{feedback}}</h1>
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
      questionCounter:0,
      score:[],
      acceptingAnswer:false,
      feedback:"",
    }
  },
  async fetch(){
    await this.getQuestions()
  },
  methods: {
    async getQuestions(){
      this.questionCounter = 0

      const dataQ = await this.$axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      this.dataQuestions = dataQ.data.results;
      this.dataQuestions.map((data,i) => {
        this.answerQuestions.push(data.incorrect_answers)
        
        this.randomIdx = Math.floor(Math.random() * 3) + 1
        this.answerQuestions[i].splice(this.randomIdx - 1, 0, data.correct_answer)

        this.allQuestions.push({question : data.question, answer: this.answerQuestions[i], correctAnswer: data.correct_answer})

      })      
      await this.getNewQuestion()
    },
    async getNewQuestion(){
      if(this.allQuestions.length === 0){
        return this.feedback = "you are finished the questions"
      }
      this.questionCounter++
      // await this.getQuestions()
      this.questionIndex = Math.floor(Math.random() * this.allQuestions.length)
      const currentQuestion = this.allQuestions[this.questionIndex]
      this.questionNow.push(currentQuestion)
      console.log(this.questionNow)

      this.questionNow.splice(0,1)

      this.acceptingAnswer = true
    },
    sendAnswer(e){
      if(!this.acceptingAnswer) return

      this.acceptingAnswer = false
      const selectedAnswer = e.target.innerText
      this.getNewQuestion()
    }
  },
  fetchDelay : 2000,
  // mounted() {
  //   this.getNewQuestion()
  // }

}
</script>