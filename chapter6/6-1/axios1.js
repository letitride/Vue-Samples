var vm = new Vue({
  el: "#app",
  data: {
    student: {}
  },
  created: function(){
    self = this;
    axios.get('./test.json')
      .then( function(res){
        self.student = res.data;
      }).catch( function(err){
        console.log(err);
      });
  }
});