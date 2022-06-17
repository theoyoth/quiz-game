<template>
  <div  class="grid grid-cols-1 place-items-center">
    <div class="bg-gray-500 xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3 py-2 rounded-lg">
      <h1 class="text-center text-lg font-semibold">you have finished the quiz, you got {{score}} 🥳</h1>
      <div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['score']
}
</script>