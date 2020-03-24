var vm = new Vue({
  el: "#app",
  data: {
    results: null,
    keyword: "",
    params: {
      q: "",
      part: "snippet",
      type: "video",
      maxResults: "10",
      key: "AIzaSyD_XSKERQNIfQgVuSSqU5aPO-M_nSFPbWA"
    }
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
});