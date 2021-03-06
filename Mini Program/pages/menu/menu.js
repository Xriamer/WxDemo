// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:"",
    list:[],
   
  },
  getMenu:function(e){
    this.setData({
       keyword:e.detail.value
    })
  },
  select: function () {
    var that = this;
     wx.request({
       url: 'https://api.jisuapi.com/recipe/search',
       data:{
         appkey:"ebddb31cc9c08a6f",
         keyword:this.data.keyword,
         num:1,
         start:0
       },
       success:function(res){
          console.log(res);
          that.setData({
           
            list:res.data.result.list,
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