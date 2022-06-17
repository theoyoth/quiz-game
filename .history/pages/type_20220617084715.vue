<template>
  <div class="grid place-items-center">
    <div class="xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3 bg-gray-600 rounded-lg mt-8 py-8">
      <h1 class="text-xl font-semibold text-center mb-4">Choose type of the quiz <font-awesome-icon :icon="['fas', 'hashtag']" /></h1>
      <div class="grid grid-cols-2 gap-4 justify-items-center">
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:9}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500" >General</NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:21}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Sport <font-awesome-icon :icon="['fas','futbol']" /></NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:31}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Anime & Manga <font-awesome-icon :icon="['fas','person']" /></NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:22}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Geography <font-awesome-icon :icon="['fas','person']" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>