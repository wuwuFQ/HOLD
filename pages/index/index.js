// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

    userInfo: {},

  },
  // 事件处理函数
  bindViewTap() {
    wx.showToast({
      title: '这个头像真帅',
      icon: 'none'
    })
  },
  onLoad() {
 
  },
  userInfoClick(e) {
   wx.navigateTo({
     url: '../userInfo/userInfo',
   })
  },
  
  
})
