var dateComp = {
  props:['date'],
  template: '<p>{{jaDate}}</p>',
  computed:{
    jaDate: function(){
      wdays = ['日', '月', '火', '水', '木', '金', '土'];
      return (
        this.date.getFullYear() + "年" +
        (this.date.getMonth() + 1) + "月" +
        this.date.getDate() + "日" +
        "(" + wdays[this.date.getDay()] + ")"
      );
    }
  }
};

var app = new Vue({
  el: "#app",
  components:{
    "date-comp": dateComp
  }
});