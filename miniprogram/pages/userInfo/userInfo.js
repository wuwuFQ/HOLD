// pages/userInfo/userInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    idCard: '',
    phone: '',
    region: ['', '', ''],
    address: '',
    device: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!app.isNull(app.globalData.userInfo.name)) {
      let model = app.globalData.userInfo;
      this.setData({
        name: model.name,
        idCard: model.idCard,
        phone: model.phone,
        region: [model.provinces, model.city, model.areas],
        address: model.address,
        device: model.deviceNumber,    
      })
    }

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

  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  /* 保存 */
  saveButtonClick() {
    var that = this;
  
    if (app.isNull(that.data.name)) {
      wx.showToast({
        title: '请填写您的姓名',
        icon: 'none'
      })
      return;
    }
    if (app.isNull(that.data.idCard)) {
      wx.showToast({
        title: '请填写您的身份证号',
        icon: 'none'
      })
      return;
    }
    if (app.isNull(that.data.phone)) {
      wx.showToast({
        title: '请填写您的手机号',
        icon: 'none'
      })
      return;
    }
    if (app.isNull(that.data.region[0])) {
      wx.showToast({
        title: '请选择家庭住址',
        icon: 'none'
      })
      return;
    }
    if (app.isNull(that.data.address)) {
      wx.showToast({
        title: '请填写详细地址',
        icon: 'none'
      })
      return;
    }
    // if (app.isNull(that.data.device)) {
    //   wx.showToast({
    //     title: '请填写设备编号',
    //     icon: 'none'
    //   })
    //   return;
    // }
    var data = {
      name: that.data.name,
      idCard: that.data.idCard,
      phone: that.data.phone,
      provinces: that.data.region[0],
      city: that.data.region[1],
      areas: that.data.region[2],
      address: that.data.address,
    };
    wx.cloud.callFunction({
      name: 'user_update',
      data: data,
      success: res => {
        app.globalData.userInfo = data;
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 1500,
          success: () => {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1,
              })
            }, 1500);
          }
        })
      }
  
    })
    /*
    if (!app.isNull(app.globalData.userInfo)) {
      data.id = app.globalData.userInfo.id   
    } 
    wx.request({
      url: app.globalData.httpURL + 'hold/user/updateUserInfo',
      method: "POST",
      data: data,
      success: res => {
        var response = res.data;
        if (response.code == 10000) {
          app.globalData.userInfo = response.data;
          wx.setStorage({
            data: response.data,
            key: 'userInfo',
          })
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 1500,
            success: () => {
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1,
                })
              }, 1500);
            }
          })
        }
      }
    })*/
  }
})