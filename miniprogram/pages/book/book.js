// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      if (type === 'day') {
        return `${value}日`;
      }
      return value;
    },
    date_show: false,

    time: ['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00'],
    time_show: false,
    time_default: 1,

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




  clickTime() {
    this.setData({
      time_show: true
    })
  },
  onConfirmTime(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      time_default: `${index}`,
      time_show: false
    })

  },
  onCloseTime() {
    this.setData({
      time_show: false
    })
  },
  onCancelTime() {
    this.onCloseTime()
  },
  // 日期Picker
  clickDate() {
    this.setData({
      date_show: true
    })
  },
  onConfirmDate(event) {
    this.setData({
      currentDate: event.detail,
    });
    this.onCloseDate();
  },

  onCloseDate() {
    this.setData({
      date_show: false
    })
  },
  onCancelDate() {
    this.onCloseDate()
  },

})