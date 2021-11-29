const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObject:""
  },

  getData(){
    db.collection("User").where({
      account:"19020031079"
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataObject:res.data
      })
    })
  },

  addData(){
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    db.collection("User").add({
      data:{
        account:"19024031085",
        name:"李安",
        academy:"环境科学与工程学院",
        isReserve:false,
        password:"19024031085",
        role:false
      }
    }).then(res=>{
      console.log(res)
      wx.hideLoading()
    })
  },

  btnQd(){
    wx.navigateTo({
      url: '../qiandao/qiandao',
    })
  },

  btnJ(){
    wx.navigateTo({
      url: '../jhbook/jhbook?id=1',
    })
  },

  btnH(){
    wx.navigateTo({
      url: '../jhbook/jhbook?id=2',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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