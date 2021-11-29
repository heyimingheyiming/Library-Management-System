// pages/demo1/demo1.js

//备注 seats: seat=0为此座位已被预约  User:reserveTime==0,说明没有预约信息
const db=wx.cloud.database();
var new_data=[] //定义一个空的集合，将查到的数据存放其中
var isreserve
var isre=[]


Page({
  /**
   * 页面的初始数据
   */
  data: {
    userName:' ',
    userId:"",
    array:["一楼报纸阅览区","二楼大厅","二楼中文社科图书阅览区一区","二楼中文社科图书阅览区二区"],
    index:'',//房间选项
    index2:'',//座位选项
    seat:[],
    ne:[],
    year:'1',
    month:'1',
    day:'1',
  },
 
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2:''
    })
    // var index=this.data.index;
    // var location_=this.data.array[index];
    this.setData({
      index: e.detail.value
    })
    console.log('index',this.data.index)
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
        wx.hideLoading()
      }
      seat.sort(function(a,b){return a-b});
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
      }
    })
    
  },



  bindPickerChange2:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    // var index=this.data.index;
    // var location_=this.data.array[index];
    this.setData({
      index2: e.detail.value
    })
   
    console.log('index',this.data.index2)
  },



  loginBtnClick:function(e){
    var user=this.data.ne;
     //  console.log("进入")
    var dex=this.data.index;
    console.log(dex)
    var location_=this.data.array[dex];
    var dex2=this.data.index2;
    console.log(dex2)
    var seat_=this.data.seat[dex2];
    //获取当前时间戳  
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    if(Y==12){
      Y=Y+1;
      M=1;
    }
    else{
      M=M+1;
    }
    this.setData({
      year:Y,
      month:M,
      day:D
    })
    db.collection("User")
    .where({
      account:user[0].account
    }).update({
      data:{
      reserveTime:timestamp,
      seatLocation:location_,
      seatNumber:seat_
      }
    }).then(res=>{
      console.log(res)
    })
    
    db.collection("seats")
    .where({
      location:location_,
      num:seat_
    }).update({
      data:{
       state:0
      }
    }).then(res=>{
      console.log("更新后的座位信息:",res)
    })

    wx.showToast({
      title: '预约成功',
      icon: 'succes',
      duration: 1000,
      mask:true
  })
  wx.navigateBack({
    success: function() {
        beforePage.onLoad(); // 执行前一个页面的onLoad方法
    }
});
  // wx.navigateTo({
  //   url: '../index/index',
  // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const accountID=getApp().globalData.account;
    const cont =db.collection('User');
    cont.where({account:accountID}).get({
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
    new_data=[] //定义一个空的集合，将查到的数据存放其中
    isreserve=''
    isre=[]
    this.setData({
      index:'5',//房间选项
      index2:'',//座位选项
      seat:[],
      year:'1',
      month:'1',
      day:'1',
    })
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