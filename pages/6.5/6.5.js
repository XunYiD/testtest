// pages/6.5/6.5.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       leaveSrc: "/use/left.png",
       title:"答题认证",
       question:"信息学部主教学楼叫什么?",
       ans1:"一教",
       ans2:"青楼",
       nextSrc:"/use/next.png"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onsub(event)
    {
        wx.redirectTo({
          url: '/pages/6.3/6.3',
        })
    },
    onBack(event){
        wx.redirectTo({
          url: '/pages/6.0/6.0',
        })
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