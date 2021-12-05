let app=getApp();
const db=wx.cloud.database();
const admin =db.collection('User')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  inputName:function(event){
   app.globalData.account=event.detail.value
  },
  inputPassword(event){ 
    app.globalData.password=event.detail.value
  },
  modify:function(){
    wx.navigateTo({
      url: '/pages/modify0/modify0'
    })
  },
 
  login(){
    //let that=this;
    admin.where({account:app.globalData.account}).get().then(res=> {
      if(res.data.length==0){
        console.log("数据库中无该用户记录，请核实account");
        wx.showToast({
          title:'用户名错误',
          icon:'none',
          duration: 2500
        })
      }else{
        //admin.where({password:this.data.password}).get().then(res=>{
          console.log(res.data)
          console.log(res.data[0].password)
          if(res.data[0].password!==app.globalData.password){
            wx.showToast({
              title: '密码错误！！',
              icon: 'none',
              duration: 2500
            })
          }else{
            wx.showToast({
              title: '登陆成功！！',
              icon: 'success',
              duration: 500,
              success:()=>{
                setTimeout(()=> {
                  if(res.data[0].role==true){
                    wx.navigateTo({
                      url: '/pages/manage/manage'//这里是成功登录后跳转的页面
                  })}
                  else{
                    wx.switchTab({
                      url: '/pages/index2/index',
                    })
                }
                },500)
            }
            }) 
            }

        //})
}}).catch(err=>{
  console.log(err)//打印错误信息
  wx.showToast({
    title:'用户名错误',
    icon:'none',
    duration: 2500
  })
})
/*    admin.where({
      account:this.data.Name
    }).get().then(res=>{
        console.log(res.data)//打印返回结果
        //之后编写 需要利用返回数据的代码 看个人情况吧
        admin.where({
          account:this.data.Name,
          password:this.data.password
        }).get().then(res=>{
          wx.showToast({
            title: '登陆成功！！',
            icon: 'success',
            duration: 2500
          })

        }).catch(err=>{
          wx.showToast({
            title: '密码错误！！',
            icon: 'none',
            duration: 2500
          })
        })

    }).catch(err=>{
      console.log(err)//打印错误信息
      wx.showToast({
        title:'用户名错误',
        icon:'none',
        duration: 2500
      })
    })*/
    /*admin.get({
      success:(res)=>{
        let User=res.data;
        console.log(res.data);
        for(let i=0;i<User.length;i++){
          
          if(Name===User[i].account){
            if (password !== User[i].password) {  //判断密码是否正确
              console.log('mima成功！')
              wx.showToast({
                title: '密码错误！！',
                icon: 'none',
                duration: 2500
              })
            } else {
              console.log('登陆成功！')
              wx.showToast({
                title: '登陆成功！！',
                icon: 'success',
                duration: 2500
              })
              if(User[i].role==true){
                wx.navigateTo({
                  url: '/pages/guanli/guanli'//这里是成功登录后跳转的页面
              })}
              else{
                wx.navigateTo({
                  url: '/pages/studen/student',
                })
              }
            }
           
          }
          else{
            console.log('yonghum成功！')
            wx.showToast({
              title:'用户名错误',
              icon:'none',
              duration: 2500
            })
          }
        }
      }
    })*/
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