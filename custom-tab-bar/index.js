Component({
  data: {
    selected: 0,
    color: "#",
    selectedColor: "#13227a",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/pages/images/huojian1.png",
      selectedIconPath: "/pages/images/huojian2.png",
      text: "火箭"
    },{
      pagePath: "/pages/launches/index",
      iconPath: "/pages/images/fashe1.png",
      selectedIconPath: "/pages/images/fashe2.png",
      text: "发射任务"
    },{
      pagePath: "/pages/about/index",
      iconPath: "/pages/images/guanyu1.png",
      selectedIconPath: "/pages/images/guanyu2.png",
      text: "关于"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})