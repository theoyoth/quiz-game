<template>
  <div  class="mt-6">
    <Loading v-if="$fetchState.pending"/>
    <div v-else class="w-full grid grid-cols-1 place-items-center">
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
        <div v-for="(q,i) in questionNow" :key="i" class="mb-4">
          <div class="px-6 py-8 bg-gray-600 rounded-lg text-center">
            <h1 class="text-lg font-semibold">{{q.question}}</h1>
            <div class="mt-4 grid grid-cols-2 gap-4 justify-items-center">
              <div v-for="(an,i) in q.answer" :key="i" class="w-40 px-2 py-2 bg-green-600 rounded-lg cursor-pointer text-center hover:bg-green-500" @click="sendAnswer">
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
import EndPage from '~/components/EndPage.vue'
export default {
    data() {
        return {
            dataQuestions: [],
            questions: [],
            answerQuestions: [],
            allQuestions: [],
            currentQuestion: "",
            questionNow: [],
            randomIdx: 0,
            questionIndex: 0,
            questionCounterText: "1/10",
            questionCounter: 0,
            maxQuestions: 10,
            score: 0,
            acceptingAnswer: false,
            feedback:false,
            correct: false,
            selectedAnswer: "",
        };
    },
    async fetch() {
        await this.getQuestions();
    },
    methods: {
        async getQuestions() {
            this.questionCounter = 0;
            const dataQ = await this.$axios.get(`https://the-trivia-api.com/api/questions?categories=${this.$route.params.gameCategory}&limit=10&difficulty=easy`);
            console.log(dataQ.data);
            this.dataQuestions = dataQ.data.results;
            this.dataQuestions.map((data, i) => {
                this.answerQuestions.push(data.incorrectAnswers);
                this.randomIdx = Math.floor(Math.random() * 3) + 1;
                this.answerQuestions[i].splice(this.randomIdx - 1, 0, data.correctAnswer);
                this.allQuestions.push({ question: data.question, answer: this.answerQuestions[i], correctAnswer: data.correctAnswer });
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
        sendAnswer(e) {
            if (!this.acceptingAnswer)
                return;
            this.acceptingAnswer = false;
            const target = e.target;
            this.selectedAnswer = target.innerText;
            const answer = this.questionNow[0].correctAnswer;
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
    fetchDelay: 2000,
    components: { EndPage }
}
</script>