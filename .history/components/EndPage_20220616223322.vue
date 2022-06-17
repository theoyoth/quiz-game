<template>
  <div  class="grid grid-cols-1 place-items-center">
    <div class="bg-gray-500 xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3 py-2 rounded-lg">
      <h1 class="text-center text-lg font-semibold">you have finished the quiz, you got {{score}} 🥳</h1>
      <div>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:9}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500" >General</NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:21}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Sport</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['score']
}
</script>