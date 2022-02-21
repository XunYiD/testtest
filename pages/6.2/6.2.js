// pages/6.2/6.2.js
Page({

    /**
     * 页面的初始数据
     */
   
    data: {
        leaveSrc:"/use/left.png",
        infoText:"个人信息",
        genderSrc:{
            femaleSrc:"/use/female.png",
            maleSrc:"/use/male.png",
        },
       genderStatus:0,
        info:"武汉大学-计算机学院-本科-2017级",
        stuSrc:"/use/stu-reg.png",
        stuText:"学生认证",
        situSrc:{
            yes:"/use/yes.png",
            loading:"/use/loading.png"
        },
           situ:{
               yes:"已认证",
               loading:"认证中"
           },
           status:"0"
       



    },

    /**
     * 生命周期函数--监听页面加载
     */
  
     
  
    onLoad: function (options) {

    },
    onBack(event){
        wx.redirectTo({
          url: '/pages/6.3/6.3',
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