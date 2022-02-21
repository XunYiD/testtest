// pages/6.3/6.3.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leaveSrc:"/use/left_g.png",
        title:"个人信息",
        alRegSrc:"/use/al-reg.png",
        insSrc:"/use/ins.png",
        hatSrc:"/use/hat.png",
        school:"武汉大学",
        reRegSrc:"/use/re-reg.png",
        insText:"计算机学院",
        majText:"计算机科学与技术",
        phone:"151****7757",
        grade:2019,
        edu:"本科",
        status:"0"


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onBack(event){

    },
    onReReg(event){
        wx.redirectTo({
          url: '/pages/6.0/6.0',
        })
    },
    onDetail(event){
        wx.redirectTo({
          url: '/pages/6.2/6.2',
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