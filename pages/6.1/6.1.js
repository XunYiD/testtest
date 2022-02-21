// pages/6.1/6.1.js
Page({

    /**
     * 页面的初始数据
     */
    
 
data: {
    options_ins: [
      {
        insCode: "1221002",
        insName: "计算机学院"
      },
      {
        insCode: "1221011",
        insName: "网络安全学院"
      },
      {
        insCode: "1221012",
        insName: "法学院"
      },
      {
        insCode: "1221012",
        insName: "新闻与传播学院"
      }
    ],
    options_maj: [
      {
        majCode: "1221002",
        majName: "软件工程"
      },
      {
        majCode: "1221011",
        majName: "计算机科学与技术"
      },
      {
        majCode: "1221012",
        majName: "人工智能"
      },
      {
        majCode: "1221012",
        majName: "广告学"
      }
    ],
    options_gra: [
      {
        graCode: "1221002",
        graName: "2018"
      },
      {
        graCode: "1221011",
        graName: "2019"
      },
      {
        graCode: "1221012",
        graName: "2020"
      },
      {
        graCode: "1221022",
        graName: "2021"
      }
    ],
    showFieldName1: "insName",
    keyFieldName1: "insCode",
    showFieldName2: "majName",
    keyFieldName2: "majCode",
    showFieldName3: "graName",
    keyFieldName3: "graCode",
    leaveSrc:"/use/left.png",
    title:"学生认证",
    jusSrc:"/use/jus.png",
    opSrc:"/use/op.png",
    txt1:"注：  认证类型仅支持 ",
    txt2:"学生证  校园卡",
    gender:"性别",
    male:"男",
    female:"女",
    ins:"学院",
    maj:"专业",
    grade:"年级",
    submitSrc:"/use/submit.png"

  },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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