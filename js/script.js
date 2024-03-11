const { createApp } = Vue;

createApp({
  data(){
    return{
      name: 'Akira',
      image: '../image/toriyama-7_jpg_1600x900_crop_q85.jpg',
      displayClock: '00:00:00',
      isEven: false,
    }
  },
  methods:{
    printClock(){
      const d = new Date();
      let hour = d.getHours() < 10? '0'+ d.getHours() : d.getHours();
      let minute = d.getMinutes() < 10? '0'+ d.getMinutes() : d.getMinutes();
      let second = d.getSeconds() < 10? '0'+ d.getSeconds() : d.getSeconds();
      this.displayClock = `${hour}:${minute}:${second}`;
      this.isEven = parseInt(second) % 2 === 0;
    },
    startClock(){
      setInterval(()=> this.printClock(), 1000)
    }
  },
  mounted(){
    this.printClock();
    this.startClock();
  }
}).mount('#app')