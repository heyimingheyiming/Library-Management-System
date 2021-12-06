const db=wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuanze:'',
    jieshu:false,
    huanshu:false,
  },

  btnbook(res){
    var account=res.detail.value.account;
    var bookid=res.detail.value.bookid;
    var xuan=this.data.xuanze;
    console.log(account);
    console.log(bookid);
    console.log(xuan)
    db.collection("User").where({
      account:account
    }).get()
    .then(res=>{
      //学号不存在
      var id = res.data[0]._id;
      if(res.data.length==0){
        wx.showModal({
          title:'提示',
          content:'当前学号不存在，请输入正确的学号！',
          success:function(res){
            if(res.confirm){
              wx.redirectTo({
                url: '../jhbook/jhbook?id='+xuan,
              })
            }
            else{
              wx.redirectTo({
                url: '../manage/manage',
              })
            }
          }
        })
      }
      //学号存在
      else{
        db.collection("Book").where({
          bookId:bookid
        }).get()
        .then(res=>{
          //书籍不存在
          if(res.data.length==0){
            wx.showModal({
              title:'提示',
              content:'当前书籍不存在，请输入正确的图书编号！',
              success:function(res){
                if(res.confirm){
                  wx.redirectTo({
                    url: '../jhbook/jhbook?id='+xuan,
                  })
                }
                else{
                  wx.redirectTo({
                    url: '../manage/manage',
                  })
                }
              }
            })
          }
          //书籍存在
          else{
            if(xuan==1){
              var num = res.data[0].book_num;
              if(num==0){
                wx.showModal({
                  title:'提示',
                  content:'当前书籍可借数量为0，暂时无法借阅！',
                  success:function(res){
                    if(res.confirm){
                      wx.redirectTo({
                        url: '../jhbook/jhbook?id='+xuan,
                      })
                    }
                    else{
                      wx.redirectTo({
                        url: '../manage/manage',
                      })
                    }
                  }
                })
              }
              else{
                console.log(id)
                db.collection("User").doc(id).get()
                .then(res=>{
                  var i=0;
                  for(i;i<res.data.borrowingBookid.length;i++){
                    if(res.data.borrowingBookid[i].bookid==bookid){
                      wx.showModal({
                        title:'提示',
                        content:'当前已借阅该书籍，无法重复借阅！',
                        success:function(res){
                          if(res.confirm){
                            wx.redirectTo({
                              url: '../jhbook/jhbook?id='+xuan,
                            })
                          }
                          else{
                            wx.redirectTo({
                              url: '../manage/manage',
                            })
                          }
                        }
                      })
                      break;
                    }
                  }
                  if(i==res.data.borrowingBookid.length){
                    wx.navigateTo({
                      url: '../booknext/booknext?account='+account+'&bookid='+bookid+'&xuanze='+xuan,
                    })
                  }
                })
              }
            }
            else{
                console.log(id)
                db.collection("User").doc(id).get()
                .then(res=>{
                  var i=0;
                  for(i;i<res.data.borrowingBookid.length;i++){
                    if(res.data.borrowingBookid[i].bookid==bookid){
                      break;
                    }
                  }
                  if(i==res.data.borrowingBookid.length){
                    wx.showModal({
                      title:'提示',
                      content:'当前未借阅该书籍，请输入正确的图书编号！',
                      success:function(res){
                        if(res.confirm){
                          wx.redirectTo({
                            url: '../jhbook/jhbook?id='+xuan,
                          })
                        }
                        else{
                          wx.redirectTo({
                            url: '../manage/manage',
                          })
                        }
                      }
                    })
                  }
                  else{
                    wx.navigateTo({
                      url: '../booknext/booknext?account='+account+'&bookid='+bookid+'&xuanze='+xuan,
                    })
                  }
                })
            }
          }
        })
      }
    })
  },

  fanhui(){
    wx.redirectTo({
      url: '../manage/manage',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var choice = options.id;
    this.setData({
      xuanze:choice,
    })
    if(choice==1){
      this.setData({
        jieshu:true
      })
    }
    if(choice==2){
      this.setData({
        huanshu:true
      })
    }
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