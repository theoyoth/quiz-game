<template>
  <div>
    <div>
      <h1 v-if="error.statusCode == 404">error page</h1>
      <Footer/>
    </div>
  </div>
</template>

<script>
export default {
  props:['error'],
  layout:'errorLayout',
}
</script>