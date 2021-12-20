// pages/demo1/demo1.js
const db = wx.cloud.database()
const Book = db.collection('Book')
let app=getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        img:"",
        ne:[],
        book:[],
        name:"",
        post_Id:"",
    },

    jump_to_book:function(event){
      this.post_Id=event.currentTarget.dataset;
      console.log(this.post_Id)
      wx.navigateTo({
        url: '/pages/demo2/demo2?bookId='+this.post_Id.postid+''})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.name=options.name;
        console.log(this.name)
        //console.log(options)

        /*
        Book.where({name:this.name}).get({
          success:res=>{
            console.log(res.data)
            this.setData({
              ne:res.data
            })
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
              }
       }
      })
      */
     Book.where({
      name:/options.name/i
    })
     Book.where({
      name: db.RegExp({
        regexp:options.name,
        options:'i',
    })
    }).get({
      success: res => {
        this.setData({
          ne: res.data
        })
        //console.log(this.ne)
        console.log(res.data)
      }
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