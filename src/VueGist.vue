<template>
  <app-gist-core :gist-div="gistData"></app-gist-core>
</template>
<script>
var gistUrl = 'https://gist.github.com/'
var data = {}

import GistCore from './GistCore.vue'
import $ from 'jquery'
export default {
  props:['gistId'],
  data () {
      return {
          gistData: 'Initial Value',
      }
  },
  created() {
      this.getGistData(this.gistId);
  },
  methods: {
      getGistData(gistId) {
        var self = this;
        $.ajax({
            url: gistUrl + gistId + '.json',
            data: data,
            dataType: 'jsonp',
            timeout: 20000,
            success: function(response) {
                self.gistData = response.div;
            },
            error: function(response) {
                console.log("error")
            }
        });
    }
  },
  components: {
      appGistCore: GistCore,
  }
}
</script>
<style scoped>
    @import url('https://assets-cdn.github.com/assets/gist-embed-1baaff35daab552f019ad459494450f1.css');
</style>