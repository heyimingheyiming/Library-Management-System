const db = wx.cloud.database()
const Book = db.collection('Book')
let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:[]

  },


  inputTyping:function(event){
    this.name=event.detail.value
    console.log(this.name)
   },

   search:function(event){
    console.log(this.name)
      Book.where({name:this.name}).get().then(res=> {
        if(res.data.length==0){
          console.log("数据库中无该用户记录，请核实account");
          wx.showToast({
            title:'图书馆中无此书',
            icon:'none',
            duration: 2500
          })
          }
          else{
            console.log(11111)
            wx.navigateTo({
              url: '/pages/demo1/demo1?name='+this.name+''
            })
          }
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