<template>
  <div class="about">
    <h1>{{storedMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: "about",
  computed: {
    storedMsg(){
      return this.$store.state.message;
    }
  }
}
</script>