Vue.filter('addComma', function(num, end){
  if(end){
    return num.toLocaleString() + end;
  }else{
    return num.toLocaleString();
  }
});

var app = new Vue({
  el: "#app",
  data: {
    date: new Date(),
    num:10000,
  },
  filters:{
    jaDay: function(date){
      var days = ["日","月","火","水","木","金","土"];
      theDay = days[date.getDay()];
      return theDay + "曜日";
    },
    nextYear: function(date){
      nextYearDate = new Date(
        date.getFullYear() + 1,
        date.getMonth(),
        date.getDay()
      );
      return nextYearDate;
    }
  }
});

