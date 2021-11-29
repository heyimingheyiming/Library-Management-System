const db=wx.cloud.database()
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObject:"",
    panduan:true,
    xuesheng:true,
    reserveFlag:false,
    chaoshi:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = options.account;
    //获取当前时间戳  
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    db.collection("User").where({
      account:a
    }).get()
    .then(res=>{
      console.log(res)
      if(res.data.length==0){
        this.setData({
          panduan:false
        })
        wx.showModal({
          title:'提示',
          content:'当前学号不存在，请输入正确的学号！',
          success:function(res){
            if(res.confirm){
              wx.navigateBack({
                delta: 1,
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
        if(res.data[0].reserveTime==0){
          this.setData({
            reserveFlag:true,
            xuesheng:false,
          })
        }
        else{
          this.setData({
            chaoshi:true,
            xuesheng:false,
          })
          var pastTime = res.data[0].reserveTime;
          var nowTime = timestamp;
          if(nowTime-pastTime>3600){
            var id = res.data[0]._id;
            var loca = res.data[0].seatLocation;
            var n = res.data[0].seatNumber;
            console.log(loca);
            console.log(n);
            db.collection("User").doc(id).update({
              data:{
                seatLocation:"",
                seatNumber:0,
              }
            }).then(res=>{
              console.log("success1")
            })
            db.collection("seats").where({
              location:loca,
              num:n,
            }).get()
            .then(res=>{
              //var i=res.data[0]._id;
              //console.log(i);
              db.collection("seats").doc('fa24ce1a6173c0e501cce1d95c765a9f').update({
                data:{
                  state:1,
                }
              }).then(res=>{
                console.log(res)
                console.log("座位状态更新成功")
              })
            })
          }
          else{
            var id = res.data[0]._id;
            db.collection("User").doc(id).update({
            data:{
              signTime:timestamp
            }
           })
            .then(res=>{
            console.log("success")
            })
          }
        }
      }
      this.setData({
        dataObject:res.data
      })
    })
  },

  fanhui(){
   wx.redirectTo({
     url: '../manage/manage',
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