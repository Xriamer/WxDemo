// pages/qq/qq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idcard:"",
    result:""
  },
  getId:function(e){
    this.setData({
      idcard:e.detail.value
    })
  },
  select:function(){
    var that=this;
    wx.request({
      url: 'https://api.jisuapi.com/idcard/query',
      data: {
        idcard: this.data.idcard,
        appkey:"cc816b360dd875b5"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          result: res.data.result
        })
      }
    })
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

  }
})