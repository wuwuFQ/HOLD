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
  // 事件处理函数
  bindViewTap() {
    wx.showToast({
      title: '这个头像真帅',
      icon: 'none'
    })
  },
  // 个人信息
  userInfoClick(e) {
    wx.navigateTo({
      url: '../userInfo/userInfo',
    })
  },

  playVideoClick(e) {
    console.log(e.currentTarget.id);
    switch (e.currentTarget.id) {
      case 1:

        break;

      default:
        break;
    }
    wx.navigateTo({
      url: '../video/video',
    })
  },

  callMobilClick() {
    wx.makePhoneCall({
      phoneNumber: '19902019616',
    })
  },

  pushBtnHandle() {

  },

  
/*
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
