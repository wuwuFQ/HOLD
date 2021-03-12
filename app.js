// app.js
App({
  onLaunch() {

    //同步获取用户信息
    var info = wx.getStorageSync('userInfo');
    if (!this.isNull(info)) {
      this.globalData.userInfo = info;
      this.globalData.openid = info.openid;
    } else {
      // 登录   在index做了
      // this.wxLogin();
    }
  },
  globalData: {
    openid: null,
    userInfo: null,
    // httpURL: 'https://localhost/',   //测试
    httpURL: 'https://wuwufq.asia/',   //正式

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
      url: that.globalData.httpURL + 'wechat/getHoldOpenID',
      data: {
        code: code
      },
      success: res => {
        let response = res.data;
        if (response.code == 10000) {
          let openid = response.data.openid;
          console.log("openid：" + openid);
          that.globalData.openid = openid;
        }
      }
    })
  },

 
  // obj是空值?
  isNull: function (obj) {
    if (obj == null || obj == "") {
      return true;
    } else {
      return false;
    }
  }

})
