Vue.component('my-comp-global',{
  template: '<h1>こんにちは</h1>'
});

var app = new Vue({
  el: '#app',
  components: {
    'my-comp': {template: '<h1>こんにちはこんにちは</h1>'}
  } 
});