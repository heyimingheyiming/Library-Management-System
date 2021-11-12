// pages/borrowMassage/borrowMassage.js
const db = wx.cloud.database({});
const cont = db.collection('User');
const util = require('../borrowMassage/util.js')
var app = getApp()

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    ne:[],
    borrowed:[],
    borrowing:[],
    time:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
        const cont1=db.collection('Book');
        for(let i=0;i<this.data.ne[0].borrowedBookid.length;i++){
          cont1.where({bookId:this.data.ne[0].borrowedBookid[i]}).get({
            success:res1=>{
              console.log(res1.data)
              this.setData({
                borrowed:this.data.borrowed.concat(res1.data)
              })
            }
          })
        }
        for(let i=0;i<this.data.ne[0].borrowingBookid.length;i++){
          cont1.where({bookId:this.data.ne[0].borrowingBookid[i]}).get({
            success:res2=>{
              console.log(res2.data)
              this.setData({
                borrowing:this.data.borrowing.concat(res2.data)
              })
            }
          })
          for(let i=0;i<this.data.ne[0].borrowingBookid.length;i++){
            this.setData({
              time:this.data.time.concat(util.formatTimeTwo(this.data.ne[0].borrowTime[i],'Y-M-D h:m:s'))
            })
          }
        }
        
        
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