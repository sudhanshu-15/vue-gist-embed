import VueGist from './VueGist.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('vue-gist-embed', VueGist);
    }
};