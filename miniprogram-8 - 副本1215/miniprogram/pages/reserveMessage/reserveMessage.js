// pages/reserveMessage/reserveMessage.js
const db=wx.cloud.database();
const util = require('../reserveMessage/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     ne:[],
     time:[],
     signTime:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const accountID=getApp().globalData.account;
    const cont =db.collection('User');
    await cont.where({account:accountID}).get().then(res=>{
        console.log("Message查询用户：",res.data)
        this.setData({
          // ne:[],
          ne:res.data,
          // time:this.data.time.concat(util.formatTimeTwo(this.data.ne[0].reserveTime,'Y-M-D h:m:s'))
        })
        console.log("Message ne:",this.data.ne)
        console.log("预约时间1：",this.data.time)
        this.setData({
          time:this.data.time.concat(util.formatTimeTwo(this.data.ne[0].reserveTime,'Y-M-D h:m:s'))
        })
        this.setData({
          signTime:this.data.signTime.concat(util.formatTimeTwo(this.data.ne[0].signTime,'Y-M-D h:m:s'))
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function () {
    this.setData({
      time:[],
      signTime:[]
    })
    
    console.log("预约时间2：",time)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})