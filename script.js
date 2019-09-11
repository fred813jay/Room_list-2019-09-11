var rooms=[
  {
    "name": "經濟雙人房",
    "eng": "Economy Double Room",
    "price": 7000,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
    "discount": 0.9,
    "equipment": {
      "wifi": false,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "海景三人房",
    "eng": "Sea view triple Room",
    "price": 7800,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(2).jpg",
    "discount": 0.8,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": false
    }
  },
  {
    "name": "典雅景觀房",
    "eng": "Elegant landscape Room",
    "price": 5400,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(3).jpg",
    "discount": 0.85,
    "equipment": {
      "wifi": false,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "尊享豪華房",
    "eng": "Exclusive Deluxe Room",
    "price": 9800,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(4).jpg",
    "discount": 0.8,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "商務雙人房",
    "eng": "Business Double Room",
    "price": 5600,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (5).jpg",
    "discount": 0.9,
    "equipment": {
      "wifi": true,
      "bathtub": false,
      "breakfast": false
    }
  },
  {
    "name": "溫泉雙人房",
    "eng": "Hot spring double Room",
    "price": 8400,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (6).jpg",
    "discount": 0.6,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "總統套房",
    "eng": "Presidential Suite",
    "price": 23000,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (7).jpg",
    "discount": 0.75,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": true
    }
  },
  {
    "name": "奢華四人房",
    "eng": "Luxury four Room",
    "price": 8500,
    "amount": 0,
    "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room (8).jpg",
    "discount": 0.7,
    "equipment": {
      "wifi": true,
      "bathtub": true,
      "breakfast": false
    }
  }
];

Vue.component("roomTemp",{
  template : "#room_template",
  props: ["room_data","hotel_discount","service_fee","delete_room","id"],
  computed : {
    final_discount: function(){
      return Math.ceil(parseFloat(this.room_data.discount*this.hotel_discount).toFixed(2)*100);
    },
    final_price: function(){
      return parseInt(Math.floor((this.room_data.price * this.final_discount)/100))+parseInt(1.0*(this.service_fee));
    },
    background_image: function(){
      return {
        "background-image":"url('"+this.room_data.cover+"')"
      }
    }
  }

})


var vm = new Vue({
  el: "#app",
  data: {
    rooms: rooms,
    hotel_discount: 0.95,
    service_fee: 200,
    edit_room_id: 0
  },
  methods: {
    add_room: function(){
      this.rooms.push({
        "name": "新房間",
        "eng": "New Room",
        "price": 0,
        "amount": 0,
        "cover": "https://www.moedict.tw/%E5%AE%B6%E5%BE%92%E5%9B%9B%E5%A3%81.png",
        "discount": 1,
        "equipment": {
          "wifi": true,
          "bathtub": true,
          "breakfast": true
        }        
      })
      this.edit_room_id=this.rooms.length-1
    },
    delete_room: function(id){
      this.rooms.splice(id,1)
      this.edit_room_id=this.rooms.length-1
    },

  },
}) 

