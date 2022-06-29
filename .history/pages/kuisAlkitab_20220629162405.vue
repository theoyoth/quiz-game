<template>
  <div  class="mt-6">
    <Loading v-if="$fetchState.pending"/>
    <div class="w-full grid grid-cols-1 place-items-center">
      <div class="xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3">
        <div class="w-full flex justify-between mb-8">
          <div class="bg-gray-600 p-4 rounded-lg text-center">
            <p class="text-sm">counter</p>
            <h1 class="text-xl">{{questionCounterText}}</h1>
          </div>
          <div class="bg-gray-600 p-4 rounded-lg text-center">
            <p class="text-sm">score</p>
            <h1 class="text-xl">{{score}}</h1>
          </div>
        </div>
        <div class="mb-4" v-for="(q,i) in questionNow" :key="i">
          <div class="px-6 py-8 bg-gray-600 rounded-lg text-center">
            <h1 class="text-lg font-semibold">{{q.question}}</h1>
            <div class="mt-4 grid grid-cols-2 gap-4 justify-items-center">
              <div v-for="(an,i) in q.choices" :key="i" class="sm:w-40 w-44 px-2 py-2 bg-green-600 rounded-lg cursor-pointer text-center hover:bg-green-500" @click="sendAnswer">
              {{an}}
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
import { timeout } from 'q';
// import dataKuis from "../kuis.json"
import kuisData from "~/lib/kuis.js"

export default {
  data(){
    return {
      allQuiz:[],
      maxQuestions: 10,
      questionCounterText: "1/10",
      score:0,
      questionCounter: 0,
      feedback:false,
      acceptingAnswer: false,
      questionIndex: 0,
      questionNow: [],
      allQ : kuisData,
    }
  },
  async fetch(){
    await this.getKuisAlkitab();
  },
  methods: {
    async getKuisAlkitab(){
      this.questionCounter = 0;
      // const res = await fetch("../kuis.json")
      // const data = await res.json()
      // console.log(this.allQ)
      const resp = await this.$axios.get('kuis.json')
      this.allQuiz = resp.data
      await this.getNewQuestion();
    },
    async getNewQuestion() {
        if (this.allQuiz.length == 22) {
            return this.feedback = true
        }
        this.questionCounter++;
        this.questionCounterText = `${this.questionCounter}/${this.maxQuestions}`;

        this.questionIndex = Math.floor(Math.random() * this.allQuiz.length);
        const currentQuestion = this.allQuiz[this.questionIndex];
        this.questionNow.push(currentQuestion);
        this.allQuiz.splice(this.questionIndex, 1);
    },
    sendAnswer(e) {
        const target = e.target;
        this.selectedAnswer = target.innerText;
        const answer = this.questionNow[0].answer;
        const classApply = this.selectedAnswer == answer ? "correct" : "incorrect";
        if (classApply === "correct") {
            this.score++;
        }
        else if (classApply === "incorrect") {
            this.score = this.score;
        }
        setTimeout(() => {
            this.questionNow.splice(0, 1);
            this.getNewQuestion();
        }, 500);
    }
  },
  fetchDelay:2000,
}
</script>