var app = getApp()
const db=
Page({
  data: {
    viewShowed: false, //显示结果view的状态
    inputVal: "", // 搜索框值
    catList: [], //搜索渲染推荐数据
    list1: ['张三', '张一', '张二', '李四', '李毅', '王二', '王五', '王一', '王三','张三三', '张三四']
  },
  onLoad: function() {},

  // 隐藏搜索框样式
  hideInput: function() {
    this.setData({
      inputVal: "",
      viewShowed: false,
    });
  },
  // 键盘抬起事件2
  inputTyping: function(e) {
    console.log("input-----",e)
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        console.log(arr)
        that.setData({
          viewShowed: true,
          carList: arr
        });
      }
    }
  },
  // 获取选中推荐列表中的值
  name: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal: that.data.carList[index],
      viewShowed: false,
    })
  },
});
