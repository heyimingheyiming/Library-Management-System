// pages/idChange/idChange.js
const db = wx.cloud.database({});
const cont = db.collection('User');
var app = getApp()

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    ne:[],
    changeemail:'',
    changephone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('in')
    const db = wx.cloud.database({
      env:'cloud1-1gg3rpqx5b612ebc'
    })
    const cont =db.collection('User');
    const accountID=getApp().globalData.account;
    cont.where({account:accountID}).get({
      success:res=>{
        console.log(res.data)
        this.setData({
          ne:res.data
        })
      }
    })
  },

  ok:function(){
    const accountID=getApp().globalData.account;
    db.collection('User').doc(accountID).update({
      data:{
        email:this.changeemail,
        phone:this.changephone,
      },
      success(res){
        console.log(res)
      }
    })  
    wx.redirectTo({
      url: '../idMassage/idMassage'
    })
  },

    changeemail:function(e){
        this.setData({
            changeemail:e.detail.value,
        })
    },

    changephone:function(e){
        this.setData({
            changephone:e.detail.value,
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
    onShow: function () {

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