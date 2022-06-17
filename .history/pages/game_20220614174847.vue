<template>
  
</template>

<script>
export default {
  data() {
    return {
      questions:[]
    }
  },
  methods: {
    async getQuestions(){
      const dataQ = await this.$axios.$get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    }
  }

}
</script>