// pages/service/service.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //右侧
    dataArr_job: [],
    dataArr_resume: [],
    // 是否已登录并完善信息
    isLogin: false,
    mainActiveIndex_job: 0,
    activeId_job: null,
    mainActiveIndex_resume: 0,
    activeId_resume: null,
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



  onClickJobNav({
    detail = {}
  }) {
    var that = this;
    if (detail.index == that.data.mainActiveIndex_job) {
      return;
    }
    that.setData({
      mainActiveIndex_job: detail.index || 0,
    });
    console.log(detail);
    that.getJobList();
  },

  onClickResumeNav({
    detail = {}
  }) {
    var that = this;
    if (detail.index == that.data.mainActiveIndex_resume) {
      return;
    }
    that.setData({
      mainActiveIndex_resume: detail.index || 0,
    });
    console.log(detail);
    that.getResumeList();

  },

  onClickJobItem({
    detail = {}
  }) {
    const activeId = this.data.activeId_job === detail.id ? null : detail.id;

    this.setData({
      activeId_job: activeId
    });
  },

  onClickResumeItem({
    detail = {}
  }) {
    const activeId = this.data.activeId_resume === detail.id ? null : detail.id;

    this.setData({
      activeId_resume: activeId
    });
  },

  jobItemClickHandle(event) {
    console.log(event.detail);
    wx.navigateTo({
      url: '../jobDetail/jobDetail',
    })
  },

  resumeItemClickHandle(event) {
    wx.navigateTo({
      url: '../resDetail/resDetail',
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
          that.getJobList();
          that.getResumeList();
        }
        console.log(data);
        wx.hideLoading({
          success: (res) => {},
        })
      }

    })
  },
  // 加载右侧侧数据
  getJobList() {
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    var item = that.data.items[that.data.mainActiveIndex_job];
    wx.cloud.callFunction({
      name: 'user_record',
      data: {
        text: item.text
      },
      success: res => {
        if (!app.isNull(res.result)) {
          var dataArr = res.result.data;
          that.setData({
            dataArr_job: dataArr,
          })
        }
        wx.hideLoading({
          success: (res) => {},
        })
      },
      fail: console.error
    })
  },

  getResumeList() {
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    var item = that.data.items[that.data.mainActiveIndex_resume];
    wx.cloud.callFunction({
      name: 'user_record',
      data: {
        text: item.text
      },
      success: res => {
        if (!app.isNull(res.result)) {
          var dataArr = res.result.data;
          that.setData({
            dataArr_resume: dataArr,
          })
        }
        wx.hideLoading({
          success: (res) => {},
        })
      },
      fail: console.error
    })
  },

})