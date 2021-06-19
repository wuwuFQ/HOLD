// app.js
App({
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-7gzhryy6ff9cbe80',
        traceUser: true,
      })
    }
    //同步获取用户信息   使用云开发能力。之前的服务器接口代码 //全部注释
    // var info = wx.getStorageSync('userInfo');
    // if (!this.isNull(info)) {
    //   this.globalData.userInfo = info;
    //   this.globalData.openid = info.openid;
    // } else {
    //   // 登录   在index做了
    //   // this.wxLogin();
    // }
   
  },
  globalData: {
    openid: null,
    userInfo: {
      openid: '',
      name: '',
      idCard: '',
      phone: '',
      provinces: '',
      city: '',
      areas: '',
      address: '',
      device: '',
      },
    // httpURL: 'https://localhost/',   //测试
    httpURL: 'https://wuwufq.asia/',   //正式

  },
  //判断是否是新用户， 是就增加记录
  checkUser(callBack) { 
    wx.cloud.callFunction({ 
    name: 'user_info',
    data: {

    },
    success: res => {
      var result = res.result.data[0];
      if (res.result.data.length == 0) {
        wx.cloud.callFunction({
         name: 'user_add',
         data: {

         },
         success: ress => {
          console.log("新增用户_id：" + ress.result._id);
          callBack();
         }
        })
      } else {
        this.globalData.userInfo = result;
        console.log("老用户：" + result.openid);
        callBack();
      }
    },
    fail: console.error
  }) 
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
*/
 
  // obj是空值?
  isNull: function (obj) {
    if (obj == null || obj == "") {
      return true;
    } else {
      return false;
    }
  }

})
