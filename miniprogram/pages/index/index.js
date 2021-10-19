// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    // 是否已登录并完善信息
    isLogin: false,
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad() {
    app.checkUser(this.isPerfectInformation);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.isPerfectInformation();
  
  },
// 是不是完善好的信息
  isPerfectInformation() {
    // if (app.isNull(app.globalData.userInfo) || app.isNull(app.globalData.userInfo.name)) {
    //   this.setData({
    //     isLogin: false,
    //   })  
    // } else {
    //   this.setData({
    //     isLogin: true,
    //   }) 
    // }
   },
  // 事件处理函数
  journalButtonClick() {
    wx.navigateTo({
      url: '../journal/journal',
    })
  },
 
  registerButtonClick() {
wx.navigateTo({
  url: '../company/company',
})
  },
  

  

})
