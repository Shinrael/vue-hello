const { createApp } = Vue;

createApp({
  data(){
    return{
      name: 'Akira',
      image: '../image/toriyama-7_jpg_1600x900_crop_q85.jpg',
    }
  }
}).mount('#app')