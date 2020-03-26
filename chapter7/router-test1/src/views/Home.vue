<template>
  <div class="home">
    <h1>{{storedMsg}}</h1>
    <button @click="changeMsg">メッセージを変更</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    storedMsg: function(){
      return this.$store.state.message;
    }
  },
  methods: {
    changeMsg: function(){
      this.$store.commit("changeMsg");
    }
  }
}
</script>
