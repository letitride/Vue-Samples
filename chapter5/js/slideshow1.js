var photos = [
  {
    id: 0,
    name: "IMG_5131.png",
    date: "2017/4/8",
    place: "沖縄県, 竹富町",
    title: "竹富島のホテル"
  },
  {
    id: 1,
    name: "IMG_7338.png",
    date: "2018/10/30",
    place: "山梨県, 山梨市",
    title: "秋の西沢渓谷"   
  }
];

Vue.component('photo-display', {
  props: ['photo'],
  template: `
    <div>
      <h2>{{photo.title}}</h2>
      <img @click="$emit('next-photo')" width="320" height="240" v-bind:src="'photos/'+photo.name">
      <p>{{photo.date}}: {{photo.title}}</p>
    </div>
  `
});

Vue.component('control-panel', {
  template: `
    <div>
      <button @click="$emit('prev-photo')">前へ</button>
      <button @click="$emit('next-photo')">次へ</button>
      <label for="auto">自動:</label>
      <input type="checkbox" id="auto" v-model="auto" @change="$emit('toggle-auto', auto)">
    </div>
  `,
  data: function(){
    return {auto:false};
  }
});

var app = new Vue({
  el: "#app",
  data: {
    auto: false,
    photos: photos,
    id: 0,
    photo: null,
    timerID: null,
    SLIDEINTERVAL: 3000
  },
  methods: {
    nextPhoto: function(){
      this.id++;
      if(this.id >= this.photos.length){
        this.id = 0;
      }
      this.photo = this.photos[this.id];
    },
    prevPhoto: function(){
      this.id--;
      if(this.id < 0){
        this.id = this.photos.length - 1;
      }
      this.photo = this.photos[this.id];
    },
    toggleAuto: function(auto){
      console.log(auto);
      if(this.auto == auto){ return; }
      this.auto = auto;
      if(auto){
        this.slideShow();
      }else{
        clearTimeout(this.timerID);
      }
    },
    slideShow: function(){
      this.nextPhoto();
      var self = this;
      this.timerID = setTimeout(self.slideShow, self.SLIDEINTERVAL);
    }
  },
  created: function(){
    this.photo = this.photos[this.id];
  }
});