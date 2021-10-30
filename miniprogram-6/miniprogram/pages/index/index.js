const db=wx.cloud.database()//连接数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:""
  },
  getData(){
    // db.collection("demolist").get().then(res=>{
    //   //console.log(res)
    //   this.setData({
    //     dataObj:res.data
    //   })
    // })
    db.collection("demolist").where({
      author:"yk" //根据作者查询
    }).get()
    .then(res=>{
      console.log(res)
    })
  },//回调，把值赋给res

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