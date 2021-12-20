// pages/demo2/demo2.js
const db = wx.cloud.database()
const Book = db.collection('Book')
const admin =db.collection('User')
let app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ne:[],
        bookId:"",
        post_Id:"",
    },
    //app.globalData.user_ID
    addbook:function(event){
        console.log(event)
        this.post_Id=event.currentTarget.dataset;
        console.log("ne:",event.currentTarget.dataset)
        var i;
        var flag=0;

        admin.where({account:'190'}).get().then(res=> {
            console.log(res.data)
            console.log(res.data[0].bookshelf)
            for(i=0;i<res.data[0].bookshelf.length;i++){
                if(res.data[0].bookshelf[i]==this.post_Id.bookid){
                    flag=1;
                }
            }
            if(flag==0){
              console.log("加入书架成功");
              //修改云数据库
              wx.showToast({
                title:'加入书架成功',
                icon:'none',
                duration: 2500
              })
            }
            else{
                console.log("该书以存在书架中");
                wx.showToast({
                title:'该书以存在书架中',
                icon:'none',
                duration: 2500
              })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.bookId=options.bookId;
        console.log(this.bookId)
        Book.where({bookId:this.bookId}).get().then(res=> {
            this.setData({
                ne: res.data
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