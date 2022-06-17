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
    getQuestions(){
      const dataQ = this.$axios.$get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    }
  }

}
</script>