var bookComp = {
  props:['bookName'], //属性名のマッピング
  template: '<p>{{bookName}}</p>'
};

var app = new Vue({
  el: "#app",
  components:{
    "book-comp": bookComp
  }
});