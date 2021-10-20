var app = getApp()
var localData = require("../../../data/Rocket.js");

Page({
  data: {
    title: "", 
  },

  onLoad: function (options) {
    this.setData({
      title: options.title ,
      //加载本地json数据,localData.dataList获取本地Rocket.js里定义的dataList数据，并赋值给dataList
      dataList: localData.dataList
    });
  },
  
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
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


