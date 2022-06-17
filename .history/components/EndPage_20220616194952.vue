<template>
  <div>
    <div class="bg-gray-500">
      <h1 class="text-center text-lg">you have finished the quiz, you got {{score}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props:['score']
}
</script>