const db=wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuanze:'',
    jieshu:false,
    huanshu:false,
  },

  btnbook(res){
    var account=res.detail.value.account;
    var bookid=res.detail.value.bookid;
    var xuan=this.data.xuanze;
    console.log(account);
    console.log(bookid);
    console.log(xuan)
    db.collection("User").where({
      account:account
    }).get()
    .then(res=>{
      if(res.data.length==0){
        wx.showModal({
          title:'提示',
          content:'当前学号不存在，请输入正确的学号！',
          success:function(res){
            if(res.confirm){
              wx.redirectTo({
                url: '../jhbook/jhbook?id='+xuan,
              })
            }
            else{
              wx.redirectTo({
                url: '../manage/manage',
              })
            }
          }
        })
      }
      else{
        wx.navigateTo({
          url: '../booknext/booknext?account='+account+'&bookid='+bookid+'&xuanze='+xuan,
        })
      }
    })
  },

  fanhui(){
    wx.redirectTo({
      url: '../manage/manage',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var choice = options.id;
    this.setData({
      xuanze:choice,
    })
    if(choice==1){
      this.setData({
        jieshu:true
      })
    }
    if(choice==2){
      this.setData({
        huanshu:true
      })
    }
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