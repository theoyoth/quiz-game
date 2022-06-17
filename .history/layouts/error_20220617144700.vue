<template>
  <div>
    <div class="bg-gray-600 max-h-screen">
      <h1 v-if="error.statusCode == 404">error page</h1>
    </div>
  </div>
</template>

<script>
export default {
  props:['error'],
  // layout:'errorLayout',
}
</script>