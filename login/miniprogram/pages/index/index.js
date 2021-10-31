let app=getApp();
const db=wx.cloud.database();
const admin =db.collection('User')
let Name=null;
let password =null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  inputName:function(event){
   Name=event.detail.value
  },
  inputPassword(event){
    password=event.detail.value
  },
  login(){
    let that=this;
    admin.get({
      success:(res)=>{
        let User=res.data;
        console.log(res.data);
        for(let i=0;i<User.length;i++){
          if(Name===User[i].account){
            if (password !== User[i].password) {  //判断密码是否正确
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

              wx.switchTab({
                url: '/pages/index/index',//这里是成功登录后跳转的页面
              })
            }
          }else{
            wx.showToast({
              title:'无此用户名！！',
              icon:'none',
              duration: 2500
            })
          }
        }
      }
    })
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