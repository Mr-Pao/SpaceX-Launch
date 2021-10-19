

Page({

//单击复制文本
copyTBL: function (e) {
  var self = this;
  wx.setClipboardData({
    data: 'Pao_Leo',//需要复制的内容
    success: function (res) {
      // self.setData({copyTip:true})
    }
  })
},

  /**
 * 生命周期函数--监听页面显示
 */
onShow: function () {
  if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
},



//转发此页面的设置
onShareAppMessage: function (ops) {
  if (ops.from === 'button') {
    // 来自页面内转发按钮
    console.log(ops.target)
  }
  return {
    path: 'pages/index/Rocket/index',  // 路径，传递参数到指定页面。
    success: function (res) {
      // 转发成功
      console.log("转发成功:" + JSON.stringify(res));
    },
    fail: function (res) {
      // 转发失败
      console.log("转发失败:" + JSON.stringify(res));
    }
  }
},

// 转发到朋友圈
onShareTimeline: function (res) {
  if (ops.from === 'button') {
    // 来自页面内转发按钮
    console.log(ops.target)
  }
  return {
    path: 'pages/index/Rocket/index',  // 路径，传递参数到指定页面。
    success: function (res) {
      // 转发成功
      console.log("转发成功:" + JSON.stringify(res));
    },
    fail: function (res) {
      // 转发失败
      console.log("转发失败:" + JSON.stringify(res));
    }
  }
}

})


