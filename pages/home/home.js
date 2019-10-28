// pages/home/home.js
Page({
  data:{
    name:"cjw",
    students:[
      {id:'111',name:'cjw',age:18},
      {id: '112', name: 'cja', age: 21 },
      {id: '113', name: 'cjc', age: 23 },
      {id: '114', name: 'cjd', age: 22 }
    ],
    counter:0
  },
  handleBtnClick(){
    // 这是vue写法，不是微信小程序写法
    //this.data.counter+=1

    //正确写法
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleBtnSubClick(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})