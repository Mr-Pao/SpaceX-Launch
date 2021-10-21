

Page({

  //获取授权的点击事件
  shouquan() {
    wx.requestSubscribeMessage({
      tmplIds: ['Vc2Mo9xgsr-e9gBD4Nfz-0bSKSXQPUgcZnAkveYveiQ'], //这里填入我们生成的模板id
      success(res) {
        console.log('授权成功', res)
      },
      fail(res) {
        console.log('授权失败', res)
      }
    })
  },
  //获取用户的openid
  getOpenid() {
    wx.cloud.callFunction({
      name: "getopenid"
    }).then(res => {
      let openid = res.result.openid
      console.log("获取openid成功", openid)
      this.send(openid)
    }).catch(res => {
      console.log("获取openid失败", res)
    })
  },
  //发送模板消息到指定用户,推送之前要先获取用户的openid
  send(openid) {
    wx.cloud.callFunction({
      name: "sendMsg",
      data: {
        openid: openid
      }
    }).then(res => {
      console.log("推送消息成功", res)
    }).catch(res => {
      console.log("推送消息失败", res)
    })
  },

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


