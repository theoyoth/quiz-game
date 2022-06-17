<template>
  <div>
    <h1 class="text-center text-lg">you have finished the quiz, you got {{score}}</h1>
  </div>
</template>

<script>
export default {
  props:['score']
}
</script>