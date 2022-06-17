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

}
</script>

<style>
@keyframes to-top {
  from{
    transfrom: translateY(40px);
  }
  to {
    transfrom: translateY(0);
  }
}

.animate-to-top{
  animation:to-top .5s ease;
}
</style>