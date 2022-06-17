<template>
  <div>
    <div class="bg-gray-500 rounded-lg py-4 flex flex-col items-center justify-around mt-8">
      <a href="https://www.instagram.com/theoyoth/" target="_blank" class="bg-green-600 py-4 w-40 rounded-lg text-center mb-2 group hover:bg-green-500">
        <button>Instagram</button>
        <font-awesome-icon :icon="['fab','instagram']" />
      </a>
      <!-- <a href="/game" target="_blank" class="bg-green-600 py-2 px-4 rounded-lg text-center">
        <button>Facebook</button>
      </a> -->
      <a href="https://www.youtube.com/channel/UCF3t40-awz3eOb9FqNhcesQ" target="_blank" class="bg-green-600 py-4 w-40 rounded-lg text-center mb-2 hover:bg-green-500">
        <button>Youtube</button>
        <font-awesome-icon :icon="['fab','youtube']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>