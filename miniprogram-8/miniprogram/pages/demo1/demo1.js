// pages/demo1/demo1.js
const db=wx.cloud.database();
var new_data=[] //定义一个空的集合，将查到的数据存放其中
//var index=1
//var array=["一楼报纸阅览区","二楼大厅","二楼中文社科图书阅览区一区","二楼中文社科图书阅览区二区"]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userName:' ',
    userId:"",
    array:["一楼报纸阅览区","二楼大厅","二楼中文社科图书阅览区一区","二楼中文社科图书阅览区二区"],
    index:'5',
    seat:[]
  },
  userNameInput:function(e){
    this.setData({
      userName:e.detail.value
    })
  },
  userIdInput:function(e){
    this.setData({
      userId:e.detail.value
    })
  },
  telePhoneInput:function(e){
    this.setData({
      telePhone:e.detail.value
    })
  },
  //获取用户输入的密码
  loginBtnClick: function (e) {
    console.log("用户名："+this.data.userName+" 密码：" +this.data.userId+"联系方式"+this.data.telePhone);
    //console.log(this.data.userId);
  },
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    // var index=this.data.index;
    // var location_=this.data.array[index];
    this.setData({
      index: e.detail.value
    })
   
    console.log('index',this.data.index)
  },
  // bindPickerChange2:function(e){
  //   db.collection('seats').where({
  //    // state:'1'
  //    location:'二楼'
  //     // skzhID: _.in(data.wdhID)
  //   }).where({
  //     //number:this.data.index3
  //     state:'1'
  //   }).count().then(async res => {
  //     let total = res.total;
  //     console.log('测试res.total', res.total)
  //     //   // 计算需分几次取
  //    if(total<20){
  //     db.collection('seat1').where({
  //         state:1
  //         //skzhID: _.in(data.wdhID)
  //       }).where({
  //         number:this.data.index3
  //       }).get().then(async res => {
  //         new_data = new_data.concat(res.data)
  //         console.log(new_data)
  //         //let old_data = that.data.allRecords
  //         //           that.setData({
  //         //         allRecords : new_data.concat(new_data)
  //         // })
  //       })
  //     }
  //    else{
  //     const batchTimes = Math.ceil(total / 20)
  //     // 循环读取数据库，并将读取的数据存放至new_data
  //     for (let i = 0; i < batchTimes; i++) {
  //       await  db.collection(this.data.index3).where({
  //         state:1
  //         //skzhID: _.in(data.wdhID)
  //       }).skip(i * 20).limit(20).get().then(async res => {
  //         new_data = new_data.concat(res.data)
  //         console.log(new_data)
  //         //let old_data = that.data.allRecords
  //         //           that.setData({
  //         //         allRecords : new_data.concat(new_data)
  //         // })
  //       })
  //     }       
  //     var new_data_json = JSON.stringify(new_data) //将数据库查询的数据集合转换为json用于传递给下一界面
  //     // wx.navigateTo({
  //     //   url: '../jieguozhanshi/jieguozhanshi?banner=' + new_data_json //将数据传递给指定界面,用../跳转到两一个文件夹的页面
  //     // })
  //   }})
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },
  //据库获取所有记录
  getData(){
    var dex=this.data.index;
    console.log(dex)
    var location_=this.data.array[dex];
    db.collection("seats")
    .where({
      state:1,
  // number:this.data.index
   //location:this.data.index4
    location:location_
    // skzhID: _.in(data.wdhID)
    })
    .count().then(async res => {
    let total = res.total;
    console.log('测试res.total', res.total)
    console.log('index变量',this.data.index)
   // console.log('变量',this.data.array[1])
    //   // 计算需分几次取
    const batchTimes = Math.ceil(total / 20)
    // 循环读取数据库，并将读取的数据存放至new_data
    for (let i = 0; i < batchTimes; i++) {
      await db.collection("seats").where({
       state:1,
      // number:this.data.index
      // location:this.data.index4
       //location:'一楼报纸阅览区'
      location:location_
        //skzhID: _.in(data.wdhID)
      }).skip(i * 20).limit(20).get().then(async res => {
        new_data = new_data.concat(res.data)
        console.log(new_data)
        var se=[];
        for(let j=0;j<new_data.length;j++){
          se[j]=new_data[j].num;
          console.log(se[j])
        }
        for(let k=0;k<se.length;k++){
        this.setData({
           seat:se
           //['seat[${j}]']:new_data[j].num
          //}
        })
      }
        var that=this
        //console,log(se)
        console.log(that.data.seat)
        console.log('new_data2:',new_data)
        //let old_data = that.data.allRecords
        //           that.setData({
        //         allRecords : new_data.concat(new_data)
        // })
      })
    
    console.log('new_data3:',new_data)
    var new_data_json = JSON.stringify(new_data) //将数据库查询的数据集合转换为json用于传递给下一界面
    // wx.navigateTo({
    //   url: '../jieguozhanshi/jieguozhanshi?banner=' + new_data_json //将数据传递给指定界面,用../跳转到两一个文件夹的页面
    // })
      }
    })
    
  },


  // updateData(){
  //   db.collection("seats").where({num:1}).update({
  //     data:{
  //       num:3
  //     }
  //   }).then(res=>{
  //     console.log(res)
  //   })
 // },

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