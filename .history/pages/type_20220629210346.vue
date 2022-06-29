<template>
  <div class="grid place-items-center">
    <div class="xl:w-1/2 lg:w-3/4 sm:w-11/12 md:w-2/3 bg-gray-600 rounded-lg mt-8 py-8">
      <h1 class="text-xl font-semibold text-center mb-4">Choose type of the quiz <font-awesome-icon :icon="['fas', 'hashtag']" /></h1>
      <div class="grid grid-cols-2 gap-4 justify-items-center">
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:'general_knowledge'}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500" >General <font-awesome-icon :icon="['fas','earth-americas']" /></NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:'sport_and_leisure'}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Sport <font-awesome-icon :icon="['fas','futbol']" /></NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:'music'}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Music <font-awesome-icon :icon="['fas','music']" /></NuxtLink>
        <NuxtLink :to="{name: 'games-game', params:{gameCategory:'geography'}}" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Geography <font-awesome-icon :icon="['fas','map']" /></NuxtLink>
        <NuxtLink to="/kuisAlkitab" class="bg-green-600 w-36 py-4 rounded-lg text-center hover:bg-green-500">Alkitab <font-awesome-icon :icon="['fas','book']" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   head() {
      return {
        link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: 'https://quizyoth.netlify.app/'
          }
        ]
      }
    }
}
</script>