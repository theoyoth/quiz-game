<template>
  <div  class="grid grid-cols-1 place-items-center">
    <div class="bg-gray-500 xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3 py-2 rounded-lg">
      <h1 class="text-center text-lg font-semibold">you have finished the quiz, you got {{score}} 🥳</h1>
      <div class="grid grid-cols-2 gap-4 justify-items-center mt-4">
        <NuxtLink to="/type" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Play again</NuxtLink>
        <NuxtLink to="/" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['score']
}
</script>