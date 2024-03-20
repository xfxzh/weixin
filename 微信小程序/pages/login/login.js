// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{
      name:'张三',
      age:15
    },
    name:'王五',
    age:18,
    num:1,
    list:[
            {
              xh:1,
              name:'贺洋',
              age:20,
              sex:'男',
              jb:'菜鸟'
            },
            {
              xh:2,
              name:'唐刚',
              age:18,
              sex:'女',
              jb:'笨鸟'
            },
            {
              xh:3,
              name:'常超',
              age:20,
              sex:'女',
              jb:'老鸟'
            }
          ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  xing(){
    this.setData({
      num:3
    })
  },
  dian(){
    this.setData({
      obj:{
        name:this.data.name,
        age:this.data.age
      }
    })
  },

  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})