// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsText: ['招聘', '求职', '收藏', '门锁', '养生预约', '美甲/美睫', '培训', '兼职', '个人设置', ],
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
          url: '../job/job',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../resume/resume',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../collection/collection',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../lock/lock',
        })
        break;
      case 4:
        wx.navigateTo({
          url: '../book/book',
        })
        break;
      case 5:
        wx.navigateTo({
          url: '../book/book',
        })
        break;
      case 6:
        wx.navigateTo({
          url: '../training/training',
        })
        break;
      case 7:
        break;
      case 8:
        wx.navigateTo({
          url: '../userInfo/userInfo',
        })
        break;

      default:
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