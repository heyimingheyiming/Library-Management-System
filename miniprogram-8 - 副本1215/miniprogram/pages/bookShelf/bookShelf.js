// pages/myCollection/myCollection.js
const db = wx.cloud.database({});
const cont = db.collection('User');
const util = require('../borrowedMassage/util.js')
var app = getApp()

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    ne:[],
    shelf:[]
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
        for(let i=0;i<this.data.ne[0].bookshelf.length;i++){
          cont1.where({bookId:this.data.ne[0].bookshelf[i]}).get({
            success:res1=>{
              console.log(res1.data)
              this.setData({
                shelf:this.data.shelf.concat(res1.data)
              })
            }
          })
        }
      }
    })
  },

  delete:function(event){
      let id=event.currentTarget.dataset.id
      var index=event.currentTarget.dataset.index;
      console.log(id)
      console.log(index)
      var shelf=this.data.shelf;
      shelf.splice(index,1)
      this.setData({
        shelf:shelf
      })

      const db = wx.cloud.database({
        env:'cloud1-1gg3rpqx5b612ebc'
      })
      const cont =db.collection('User');
      const accountID=getApp().globalData.account;
      cont.where({account:accountID}).get({
        success:res=>{
            var _ID=res.data[0]._id
            const _=db.command
            db.collection('User').doc(_ID).update({
              data:{
                bookshelf:_.pull(id)
              },
            })  
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 2000
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