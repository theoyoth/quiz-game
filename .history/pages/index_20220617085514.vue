<template>
  <div>
    <h1 class="text-3xl mt-8 font-bold text-center">what's up!</h1>
    <div class="flex items-center justify-center h-80">
      <NuxtLink to="/type">
        <div class="group w-40 p-4 bg-green-600 hover:bg-green-500 rounded-lg text-center">
          <p class="font-semibold text-lg">Play <font-awesome-icon :icon="['fas','play']" class="w-4 group-hover:w-10"/></p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
