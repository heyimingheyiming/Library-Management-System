const db=wx.cloud.database();
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:'1',
    username:'1',
    bookname:'1',
    year:'1',
    month:'1',
    day:'1',
    jieshu:false,
    huanshu:false,
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
    var cho=options.xuanze;
    var account=options.account;
    var bookid=options.bookid;
    //获取当前时间戳  
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间  
    timestamp=timestamp+60*60*24*31;
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    this.setData({
      year:Y,
      month:M,
      day:D
    })
    if(cho==1){
      this.setData({
        jieshu:true,
      })
      wx.showLoading({
        title: '数据加载中...',
        mask:true
      })
      var id;
      db.collection("User").where({
        account:account
      }).get()
      .then(res=>{
        this.setData({
          account:res.data[0].account,
          username:res.data[0].name,
        })
        console.log(res)
        id=res.data[0]._id;
        const _ = db.command;
        console.log(id)
        db.collection("User").doc(id).update({
          data:{
            borrowingBookid:_.push({
              bookid:bookid,
              time:timestamp
            }),
          }
        }).then(res=>{
          console.log(res)
          wx.hideLoading()
        })
      })
      db.collection("Book").where({
        bookId:bookid
      }).get()
      .then(res=>{
        this.setData({
          bookname:res.data[0].name
        })
        var total=res.data[0].book_num - 1;
        var bn=res.data[0].borrow_num + 1;
        var bookid=res.data[0]._id;
        db.collection('Book').doc(bookid).update({
          data:{
            book_num:total,
            borrow_num:bn,
          },
          success(res){
            console.log(res)
          }
        })
      })
    }
    if(cho==2){
      this.setData({
        huanshu:true,
      })
      wx.showLoading({
        title: '数据加载中...',
        mask:true
      })
      var id;
      db.collection("User").where({
        account:account
      }).get()
      .then(res=>{
        this.setData({
          account:res.data[0].account,
          username:res.data[0].name,
        })
        console.log(res)
        id=res.data[0]._id;
        const _ = db.command;
        console.log(id)
        db.collection("User").doc(id).update({
          data:{
            borrowedBookid:_.push([bookid]),
            borrowingBookid:_.pull({bookid:bookid}),
          }
        }).then(res=>{
          console.log(res)
          wx.hideLoading()
        })
      })
      db.collection("Book").where({
        bookId:bookid
      }).get()
      .then(res=>{
        this.setData({
          bookname:res.data[0].name
        })
        var total=res.data[0].book_num + 1;
        var bn=res.data[0].borrow_num - 1;
        var bookid=res.data[0]._id;
        db.collection('Book').doc(bookid).update({
          data:{
            book_num:total,
            borrow_num:bn,
          },
          success(res){
            console.log(res)
          }
        })
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