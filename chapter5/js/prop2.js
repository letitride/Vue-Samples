var fullYear = {
  props:['year'],
  template: '<p>平成{{year}}年: 西暦{{year + 1988}}</p>'
};

var app = new Vue({
  el: "#app",
  components:{
    "full-year": fullYear
  }
});