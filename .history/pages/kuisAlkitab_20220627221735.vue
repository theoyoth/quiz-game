<template>
  <div  class="mt-6">
    <div class="w-full grid grid-cols-1 place-items-center">
      <div class="xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3">
        <div class="w-full flex justify-between mb-8">
          <div class="bg-gray-600 p-4 rounded-lg text-center">
            <p class="text-sm">counter</p>
            <h1 class="text-xl">questionCounterText</h1>
          </div>
          <div class="bg-gray-600 p-4 rounded-lg text-center">
            <p class="text-sm">score</p>
            <h1 class="text-xl">score</h1>
          </div>
        </div>
        <div class="mb-4">
          <div class="px-6 py-8 bg-gray-600 rounded-lg text-center">
            <h1 class="text-lg font-semibold">question</h1>
            <div class="mt-4 grid grid-cols-2 gap-4 justify-items-center">
              <div class="sm:w-36 w-40 px-2 py-2 bg-green-600 rounded-lg cursor-pointer text-center hover:bg-green-500">
              asasdas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="feedback">
        <EndPage :score="score"></EndPage>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      allQuiz:[],
      maxQuestions: 10,
      questionCounterText: "1/10",
    }
  },
  methods: {
    async getKuisAlkitab(){
      const data = require('../kuis.json');
      this.allQuiz = data
      this.allQuiz.map((data, i) => {
          
      });
      await this.getNewQuestion();
    },
    async getNewQuestion() {
        if (this.allQuestions.length === 0) {
            return this.feedback = true
        }
        this.questionCounter++;
        this.questionCounterText = `${this.questionCounter}/${this.maxQuestions}`;

        this.questionIndex = Math.floor(Math.random() * this.allQuestions.length);
        const currentQuestion = this.allQuestions[this.questionIndex];
        this.questionNow.push(currentQuestion);
        this.allQuestions.splice(this.questionIndex, 1);
        this.acceptingAnswer = true;
    },
  },
  mounted() {
    this.getKuisAlkitab()
  }
}
</script>