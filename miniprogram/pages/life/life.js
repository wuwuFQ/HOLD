// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  gridItemClickHandler(event) {
console.log(event.currentTarget.dataset.index);
var index = event.currentTarget.dataset.index;
switch (index) {
  case 0:
    wx.navigateTo({
      url: '../resume/resume',
    })
    break;

  default:
    wx.navigateTo({
      url: '../job/job',
    })
    break;
}
  },
// 事件处理函数
bindViewTap() {
  wx.navigateTo({
    url: '../userInfo/userInfo',
  })
},


})