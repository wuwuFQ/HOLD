// pages/job/job.js

const payRange_columns = ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '15000', '20000', '25000', '30000'];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobType: [],
    jobType_show: false,
    jobType_default: 2,

    payRange: [{
        values: payRange_columns,
        className: 'column1',
      },
      {
        values: payRange_columns,
        className: 'column1',
      }
    ],
    payRange_show: false,
    payRange_1_default: 12,
    payRange_2_default: 14,

    payments: ['日结', '周结', '月结'],
    payments_show: false,
    payments_default: 2,

    gender: ['不限', '男', '女'],
    gender_show: false,
    gender_default: 0,

    age: ['不限', '18-30岁', '30-40岁', '40-50岁', '50-60岁'],
    age_show: false,
    age_default: 0,

    education: ['不限', '高中及以下', '专科', '本科', '研究生及以上'],
    edu_show: false,
    edu_default: 0,

    exp: ['不限', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上'],
    exp_show: false,
    exp_default: 0,
    jobContent: '',
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

  // 职位类型picker
  clickJobType() {
    this.setData({
      jobType_show: true
    })
  },
  onConfirmJobType(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      jobType_default: `${index}`,
      jobType_show: false
    })

  },
  onCloseJobType() {
    this.setData({
      jobType_show: false
    })
  },
  onCancelJobType() {
    this.onCloseJobType()
  },

  // 薪资范围picker
  clickPayRange() {
    this.setData({
      payRange_show: true
    })
  },
  onConfirmPayRange(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    console.log(`${index[0]}`);
    console.log(index[1]);
    this.setData({
      payRange_1_default: `${index[0]}`,
      payRange_2_default: `${index[1]}`,
      payRange_show: false
    })
    // console.log(this.payRange[0]['values'][this.payRange_1_default]);
    console.log(this.data.payRange[0]['values'][this.data.payRange_1_default]);
  },
  onClosePayRange() {
    this.setData({
      payRange_show: false
    })
  },
  onCancelPayRange() {
    this.onClosePayRange()
  },

  // 薪资结算picker
  clickPayments() {
    this.setData({
      payments_show: true
    })
  },
  onConfirmPayments(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      payments_default: `${index}`,
      payments_show: false
    })

  },
  onClosePayments() {
    this.setData({
      payments_show: false
    })
  },
  onCancelPayments() {
    this.onClosePayments()
  },

  // 性别Picker
  clickGender() {
    this.setData({
      gender_show: true
    })
  },
  onConfirmGender(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      gender_default: `${index}`,
      gender_show: false
    })

  },
  onCloseGender() {
    this.setData({
      gender_show: false
    })
  },
  onCancelGender() {
    this.onCloseGender()
  },

  // 年龄Picker
  clickAge() {
    this.setData({
      age_show: true
    })
  },
  onConfirmAge(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      age_default: `${index}`,
      age_show: false
    })

  },
  onCloseAge() {
    this.setData({
      age_show: false
    })
  },
  onCancelAge() {
    this.onCloseAge()
  },

  // 学历Picker
  clickEdu() {
    this.setData({
      edu_show: true
    })
  },
  onConfirmEdu(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      edu_default: `${index}`,
      edu_show: false
    })

  },
  onCloseEdu() {
    this.setData({
      edu_show: false
    })
  },
  onCancelEdu() {
    this.onCloseEdu()
  },

  // 经验Picker
  clickExp() {
    this.setData({
      exp_show: true
    })
  },
  onConfirmExp(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      exp_default: `${index}`,
      exp_show: false
    })

  },
  onCloseExp() {
    this.setData({
      exp_show: false
    })
  },
  onCancelExp() {
    this.onCloseExp()
  },

})