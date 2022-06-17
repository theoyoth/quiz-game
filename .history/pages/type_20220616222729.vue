<template>
  <div class="grid place-items-center">
    <div class="xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3 bg-gray-600 rounded-lg mt-8 py-8">
      <h1 class="text-lg font-semibold text-center">Choose type of the quiz</h1>
      <div class="grid grid-cols-2 gap-4 justify-items-center mt-4">
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:9}}" class="bg-green-600 w-36 py-4 rounded-lg hover:bg-green-500" >General</NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:21}}" class="bg-green-600 w-36 py-4 rounded-lg hover:bg-green-500">Sport</NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:movie.id}}" class="bg-green-600 w-36 py-4 rounded-lg hover:bg-green-500">Anime & Manga</NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:movie.id}}" class="bg-green-600 w-36 py-4 rounded-lg hover:bg-green-500">Geography</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>