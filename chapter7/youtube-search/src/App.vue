<template>
  <div id="app">
    <SearchYoutube msg="YouTube動画検索" />
  </div>
</template>

<script>
import SearchYoutube from './components/SearchYoutube.vue'

export default {
  name: 'App',
  components: {
    SearchYoutube
  }
}
</script>
