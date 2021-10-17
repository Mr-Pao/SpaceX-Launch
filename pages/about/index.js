

Page({
  //单击复制文本
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'Pao_Leo',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  }
})