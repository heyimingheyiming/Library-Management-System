// pages/borrowMassage/borrowMassage.js
const db = wx.cloud.database({});
const cont = db.collection('User');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ne:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    
        var _this = this;
        const db = wx.cloud.database({
          env:'cloud1-1gg3rpqx5b612ebc'
        })
        const cont =db.collection('User');
        cont.doc("fa24ce1a616a43a700500e9252147a13").get({
          success:res=>{
            console.log(res.data)
            this.setData({
              ne:res.data
            })
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