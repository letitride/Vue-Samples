<template>
  <div class="hello">
    <input v-model="keyword" placeholder="検索キーワードを入力">
    <button @click="searchMovies">検索</button>
    <table class="table" v-show="results">
      <tr>
        <th>#</th>
        <th>ムービー</th>
        <th>情報</th>
      </tr>
      <tr
        v-for="(movie, index) in results"
        v-bind:key="movie.id.videoId"
        >
        <td>{{index + 1}}</td>
        <td>
          <a v-bind:href="'https://www.youtube.com/watch?v='+movie.id.videoId">
            <img width="320" height="180" v-bind:src="movie.snippet.thumbnails.medium.url">
          </a>
        </td>
        <td>
          <b>{{movie.snippet.title}}</b><br />
          <span class="desc">{{movie.snippet.description}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: "SearchYoutube",
  data: function(){
    return {
      results: null,
      keyword: "Giuletta Machine",
      params: {
        q: "",
        part: "snippet",
        type: "video",
        maxResult: "10",
        key: "AIzaSyCmT8SsRCLhJHjW5Q8G6xoyl2CtqBugrvk"
      }
    };
  },
  props: {
    msg: String
  },
  methods: {
    searchMovies: function(){
      this.params.q = this.keyword;
      var self = this;
      axios.get("https://www.googleapis.com/youtube/v3/search", {params: this.params})
        .then(function(res){
          self.results = res.data.items;
          console.log(self.results);
        }).catch(function(err){
          console.log(err);
        });
    }
  }
}
</script>

<style scoped>
.desc {
  color: gray;
}
</style>