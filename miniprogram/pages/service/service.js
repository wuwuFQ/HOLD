// pages/service/service.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //右侧
    dataArr: [],
    // 是否已登录并完善信息
    isLogin: false,
    mainActiveIndex: 0,
    activeId: null,
    //左侧
    items: [],

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
    if (app.isNull(app.globalData.userInfo) || app.isNull(app.globalData.userInfo.name)) {
      this.setData({
        isLogin: false,
      })
    } else {
      this.setData({
        isLogin: true,
      })
    }
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



  onClickNav({detail = {}}) {
    if (detail.index == this.data.mainActiveIndex) {
      return;
    }
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
    console.log(detail);
    this.getServiceList();

  },

  onClickItem({
    detail = {}
  }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({
      activeId
    });
  },

  itemClickHandle(e) {
    wx.makePhoneCall({
      phoneNumber: '19902019616',
    })
  },
  // 个人信息
  userInfoClick(e) {
    wx.navigateTo({
      url: '../userInfo/userInfo',
    })
  },
  //加载左侧数据
  getServiceItems() {
    wx.showLoading({
      title: '加载中...',
    })
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
          that.getServiceList();
        }
        console.log(data);
        wx.hideLoading({
          success: (res) => {},
        })
      }

    })
  },
  // 加载右侧侧数据
  getServiceList() {
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    var item = that.data.items[that.data.mainActiveIndex];
    wx.cloud.callFunction({
      name: 'user_record',
      data: {
        text: item.text
      },
      success: res => {
        if (!app.isNull(res.result)) {
          var dataArr = res.result.data;
            that.setData({
              dataArr: dataArr,
            })
        }
        wx.hideLoading({
          success: (res) => {},
        })
      },
      fail: console.error
    })
  },


  /*
  getPeopleList() {
    var that = this;
    wx.request({
      url: app.globalData.httpURL + 'hold/service/peopleList',
      method: 'GET',
      success: res => {
        let response = res.data;
        if (response.code == 10000) {
          that.setData({
            dataArr: response.data,
          })
        } else {

        }
      }
    })
  },

  wxLogin() {
    var that = this;
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId（otvsv5ai27v_Wu3r55-vA1KJE0lU）, sessionKey, unionId
        that.getWeChatOpenID(res.code);
      }
    })

  },
  // 获取openID
  getWeChatOpenID: function (code) {
    var that = this;
    wx.request({
      url: app.globalData.httpURL + 'wechat/getHoldOpenID',
      data: {
        code: code
      },
      success: res => {
        let response = res.data;
        if (response.code == 10000) {
          let openid = response.data.openid;
          console.log("openid：" + openid);
          app.globalData.openid = openid;
          that.getUserInfo(openid);
        }
      }
    })
  },
  //根据openID获取用户信息 可能为null
  getUserInfo: function (openid) {
    var that = this;
    app.globalData.openid = openid;
    wx.request({
      url: app.globalData.httpURL + 'hold/user/getUserInfo',
      data: {
        openid: openid
      },
      success: res => {
        console.log("userInfo：" + res.data.data);
        app.globalData.userInfo = res.data.data;
        if (!app.isNull(app.globalData.userInfo)) {
          that.setData({
            isLogin: true,
          })
          wx.setStorage({
            data: app.globalData.userInfo,
            key: 'userInfo',
          })
        }
      }
    })
  },
*/



})