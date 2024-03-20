// compoents/nanshan/nanshan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    fn(){
      wx.openLocation({
        latitude: 30.13694,
        longitude: 120.219925,
      })
    }
  }
})
