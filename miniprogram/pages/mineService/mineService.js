// miniprogram/pages/mineService/mineService.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    result: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getServiceItems();
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
  getServiceItems() {
    var that = this;
    wx.cloud.callFunction({
      name: 'service_item',
      data: {},
      success: res => {
        var data = res.result.data;
        if (data.length != 0) {
          that.setData({
            items: data,
          })
          that.loadUserInfo();
        }
        console.log(data);
      }

    })
  },
  loadUserInfo() {
    var that = this;
    wx.cloud.callFunction({
      name: 'user_info',
      data: {

      },
      success: res => {
        var info = res.result.data[0];
        app.globalData.userInfo = info;
        if (!app.isNull(info.projects)) {
          that.setData({
            result: info.projects
          })

        }
      },
      fail: console.error
    })
  },

  onChange(event) {
    this.setData({
      result: event.detail,
    });
    console.log(event.detail);
  },

  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() { },
})