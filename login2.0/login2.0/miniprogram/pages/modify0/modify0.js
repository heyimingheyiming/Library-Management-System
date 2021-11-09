let app=getApp();
const db0=wx.cloud.database();
const admin0 =db0.collection('User')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name0:"",
    password0:"",
    password1:"",
    password2:""
  },
  inputName0:function(event){
   this.data.Name0=event.detail.value
  },
  inputPassword0(event){
    this.data.password0=event.detail.value
  },
  inputPassword1(event){
    this.data.password1=event.detail.value
  },
  inputPassword2(event){
    this.data.password2=event.detail.value
  },
  modified(){
    admin0.where({account:this.data.Name0}).get().then(res=> {
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
          if(res.data[0].password!==this.data.password0){
            wx.showToast({
              title: '原密码错误！！',
              icon: 'none',
              duration: 2500
            })
          }else{
            if(this.data.password1==this.data.password2&&this.data.password1!==""){
            admin0.doc(res.data[0]._id).update({
              // data 传入需要局部更新的数据
               data: {
                 // 表示将 done 字段置为 true
                password: this.data.password1
               },
        
               success: function (res) {
                 console.log("修改成功", res)
                  wx.showToast({
                     title:'修改成功',
                     icon:'success',
                     duration: 500,
                success:()=>{
                  setTimeout(()=> {
                    wx.navigateTo({
                      url: '/pages/index/index'//这里是成功登录后跳转的页面
                  })    
                  },500)
              }
                  } )
                
        }})}
        else if(this.data.password1==this.data.password2&&this.data.password1==="")
        {
          wx.showToast({
            title: '密码不能为空！！',
            icon: 'none',
            duration: 2500
          })
        }
        else if(this.data.password1!==this.data.password2){
          wx.showToast({
            title: '两次密码不一致！！',
            icon: 'none',
            duration: 2500
          })
        }
      }}}).catch(err=>{
  console.log(err)//打印错误信息
  wx.showToast({
    title:'用户名错误',
    icon:'none',
    duration: 2500
  })
})
  },
  /*modified(){
    let that=this;
    admin0.get({
      success:(res)=>{
        let User=res.data;
        console.log(res.data);
        for(let i=0;i<User.length;i++){
          if(Name0===User[i].account){
            if (password0 !== User[i].password) {  //判断密码是否正确
              console.log('mnnmbh成功！')
              wx.showToast({
                title: '原密码错误！！',
                icon: 'none',
                duration: 2500
              })
            } else {
              admin0.doc(User[i]._id).update({
              // data 传入需要局部更新的数据
               data: {
                 // 表示将 done 字段置为 true
                password: password1
               },
        
               success: function (res) {
                 console.log("修改成功", res)
                  wx.showToast({
                     title:'修改成功',
                     icon:'success',
                     duration: 2500
                  })
            }})}}
                    
              
            else{
              console.log('mmmmm成功！')
              wx.showToast({
                title:'无此用户名！！',
                icon:'none',
                duration: 2500
              })
            }
            
        }
      }
    })
  
  },*/
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