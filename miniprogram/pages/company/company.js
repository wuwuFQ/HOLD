// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salesmanArr: [],
    salesman_default: 0,
    salesman_show: false,
    //股东信息
    shareholderArr: [{
      name: "",
      card: "",
      nation: "",
      address: ""
    }, ],
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

  clickSalesman() {
    this.setData({
      salesman_show: true
    })
  },
  onConfirmSalesman(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      salesman_default: `${index}`,
      salesman_show: false
    })

  },
  onCloseSalesman() {
    this.setData({
      salesman_show: false
    })
  },
  onCancelSalesman() {
    this.onCloseSalesman()
  },

  continueAddButtonClick() {
    var that = this;
    that.data.shareholderArr.push({
      name: "",
      card: "",
      nation: "",
      address: ""
    });
    var arr = that.data.shareholderArr;
    that.setData({
      shareholderArr: arr,
    })
  },

})