const db=wx.cloud.database()//连接数据库
Page({


  freeBtn:async function(options){
    const accountID=getApp().globalData.account;
    const cont =db.collection('User');
    await cont.where({account:accountID}).get()
    .then(res =>{
        console.log("onShow内res:",res.data)
        this.setData({
          ne:[],
          ne:res.data
        })
        // console.log("找到的ne值：",ne)
      })
    var user=this.data.ne;
    console.log("freeBtn内user:",user)
    if(user[0].reserveTime==0){
      wx.showToast({
        title:'您未预约，无法释放座位',
        icon:'none',
        duration: 2500
      })
    }
    else{
      await db.collection("User")
    .where({
      account:user[0].account
    }).update({
      data:{
      reserveTime:0,
      seatLocation:'',
      seatNumber:0,
      signTime:0
      }
    }).then(async res=>{
      console.log(res)
    })
    
    await db.collection("seats")
    .where({
      location:user[0].location,
      num:user[0].seatNumber
    }).update({
      data:{
       state:1
      }
    }).then(async res=>{
      console.log("更新后的座位信息:",res)
    })

    wx.showToast({
      title: '释放成功',
      icon: 'succes',
      duration: 1000,
      mask:true
  })
    }
  },
  MessageBtn:async function(options){
    const accountID=getApp().globalData.account;
    const cont =db.collection('User');
    await cont.where({
      account:accountID
    }).get().then(async res=>{
      console.log("onShow内res:",res.data)
      this.setData({
        ne:res.data
    })
  })
    var user=this.data.ne;
    console.log("user:",user)
    if(user[0].reserveTime==0){
      wx.showToast({
        title:'您未预约，暂无预约信息',
        icon:'none',
        duration: 2500
      })
    }
    else{
     wx.navigateTo({
       url:'../reserveMessage/reserveMessage'
     })
    }
  },
 reserveBtn:async function(options){
  const accountID=getApp().globalData.account;
  const cont =db.collection('User');
  await cont.where({account:accountID}).get().then(res=>{
      console.log("onShow内res:",res.data)
      this.setData({
        ne:[],
        ne:res.data
      })
      // console.log("找到的ne值：",ne)
    })
  var user=this.data.ne;
  console.log("user:",user)
  if(user[0].reserveTime!=0){
    wx.showToast({
      title:'您已预约，如需重新预约，请先释放座位',
      icon:'none',
      duration: 2500
    })
  }
  else{
   wx.navigateTo({
     url:'../demo1/demo1'
   })
  }
 },
  /**
   * 页面的初始数据
   */
  data: {
    dataObj:"",
    ne:[]
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
    this.setData({
      dataObj:"",
    })
    // const accountID=getApp().globalData.account;
    // const cont =db.collection('User');
    // await cont.where({account:accountID}).get()
    // .then(res =>{
    //     console.log("onShow内res:",res.data)
    //     this.setData({
    //       ne:[],
    //       ne:res.data
    //     })
    //     // console.log("找到的ne值：",ne)
    //   })
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
