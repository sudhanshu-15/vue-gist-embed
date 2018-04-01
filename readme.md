# vue-gist-embed

A Vue.js component that allows to embed Github Gist. Based on Blair Vanderhoof's gist-embed (http://blairvanderhoof.com/gist-embed/)

This is a WIP, trying to learn NPM and Vue!

## Installation

```js
npm i --save-dev vue-gist-embed
```

### Browser

Include the script file, then install the component with `Vue.use(VueGistEmbed);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-gist-embed/dist/vue-gist-embed.min.js"></script>
<script type="text/javascript">
  Vue.use(VueGistEmbed);
</script>
```

### Module

```js
import VueGistEmbed from 'vue-gist-embed';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-gist-embed :gistId="Your gist id"></vue-gist-embed>
```
