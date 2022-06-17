<template>
  <div>
    <div class="lg:px-10 md:px-8 sm:px-4 xl:px-32 py-6 min-h-screen bg-gray-800 text-white">
    <Header />
      <NuxtChild />
    <Footer />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "quizyoth",
      meta: [
        {
          hid: 'this is quiz game made by theoyoth',
          name: 'quizyoth',
        }
      ]
    }
  }
}
</script>