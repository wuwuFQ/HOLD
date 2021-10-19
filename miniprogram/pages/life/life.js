// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsText: ['招聘', '求职', '收藏', '门锁', '好店发现', '我的预约', '优惠券', '培训', '财务销售', '个人设置', ],
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
          url: '../job/job',//招聘
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../resume/resume',//求职
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../collection/collection',//收藏
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../lock/lock',//门锁
        })
        break;
      case 4:
        wx.navigateTo({
          url: '../shop/shop',//好店发现
        })
        break;
      case 5:
        wx.navigateTo({
          url: '../subscribeList/subscribeList',//我的预约
        })
        break;
      case 6:
        wx.navigateTo({
          url: '../coupon/coupon',//优惠券
        })
        break;
      case 7:
        wx.navigateTo({
          url: '../training/training',//培训
        })
        break;
      case 8:
        wx.navigateTo({
          url: '../sales/sales',//财务销售
        })
        break;
      case 9:
        wx.navigateTo({
          url: '../userInfo/userInfo',//个人设置
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