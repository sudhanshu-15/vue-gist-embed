<template>
  <div>
      <p v-html="gistDiv"></p>
  </div>
</template>
<script>
export default {
  props: ['gistDiv'],
}
</script>
<style scoped>
@import url('https://assets-cdn.github.com/assets/gist-embed-1baaff35daab552f019ad459494450f1.css');
</style>
