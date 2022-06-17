<template>
  <div class="bg-gray-800 min-h-screen text-white lg:px-10 md:px-8 sm:px-4 xl:px-32 py-6">
    <Header />
    <div class="bg-gray-600 rounded-lg py-4 mt-8">
      <h1 class="text-center text-lg font-semibold">There is no page you are looking for</h1>
      <div>
        <h1 class="text-5xl font-bold text-center">404</h1>
      </div>
      <div class="flex justify-center mt-4">
        <NuxtLink to="/" class="py-4 px-6 bg-green-600 hover:bg-green-500 rounded-lg">Back home</NuxtLink>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {

}
</script>