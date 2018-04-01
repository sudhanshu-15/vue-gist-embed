<template>
  <code :data-gist-id="gistId" class="gist"></code>
</template>
<script>
export default {
  props:['gistId'],
  head: {
      script: [
          { src : 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'},
          { src : 'https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.7.1/gist-embed.min.js'}
      ]
  }
}
</script>
<style scoped>
    .gist {
        white-space: normal;
    }
</style>