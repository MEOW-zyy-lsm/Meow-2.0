// pages/info/info.js
var app =getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        num:0,
        num2:0,
        num3:0,
        num4:0,
        num5:0,
        num6:0,
        num7:0,
        num8:0,
        num9:0,
        num10:0,
        num11:0,
        num12:0,
        num13:0,
        num14:0,
        num15:0
    
    },
    onLode:function(){
        console.log(app.globalData.globaldanbai);
        getApp().globalData.globaldanbai= "20"
    },
    /*事件绑定+-10*/
    handletap(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num:this.data.num+=operation
        })
        
    },
    handletap2(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num2:this.data.num2+=operation
        })
    },
    handletap3(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num3:this.data.num3+=operation
        })
    },
    handletap4(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num4:this.data.num4+=operation
        })
    },
    handletap5(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num5:this.data.num5+=operation
        })
    },
    handletap6(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num6:this.data.num6+=operation
        })
    },
    handletap7(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num7:this.data.num7+=operation
        })
    },
    handletap8(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num8:this.data.num8+=operation
        })
    },
    handletap9(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num9:this.data.num9+=operation
        })
    },
    handletap10(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num10:this.data.num10+=operation
        })
    },
    handletap11(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num11:this.data.num11+=operation
        })
    },
    handletap12(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num12:this.data.num12+=operation
        })
    },
    handletap13(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num13:this.data.num13+=operation
        })
    },
    handletap14(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num14:this.data.num14+=operation
        })
    },
    handletap15(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num15:this.data.num15+=operation
        })
    },
   

    nutrition:function(event){
        var num=parseFloat(this.data.num)
        var num2=parseFloat(this.data.num2)
        var num3=parseFloat(this.data.num3)
        var num4=parseFloat(this.data.num4)
        var num5=parseFloat(this.data.num5)
        var num6=parseFloat(this.data.num6)
        var num7=parseFloat(this.data.num7)
        var num8=parseFloat(this.data.num8)
        var num9=parseFloat(this.data.num9)
        var num10=parseFloat(this.data.num10)
        var num11=parseFloat(this.data.num11)
        var num12=parseFloat(this.data.num12)
        var num13=parseFloat(this.data.num13)
        var num14=parseFloat(this.data.num14)
        var num15=parseFloat(this.data.num15)
        var globaldanbai=((num*0.199)+(num2*0.269)+(num3*0.132)+(num4*0.197)+(num5*0.165)+(num6*0.224)+(num7*0.172)+(num8*0.204)+(num9*0.29)+(num10*0.108)+(num11*0.13)+(num12*0.108)+(num13*0.166)).toFixed(3)
        console.log(globaldanbai)
        var globalzhifang=((num*0.042)+(num2*0.085)+(num3*0.37)+(num4*0.022)+(num5*0.075)+(num6*0.017)+(num7*0.078)+(num8*0.002)+(num9*0.09)+(num10*0.093)+(num11*0.111)+(num12*0.098)+(num13*0.048)).toFixed(3)
        console.log(globalzhifang)
        var globalgai=((num*0.23)+(num2*0.1)+(num3*0.06)+(num4*0.12)+(num5*0.12)+(num6*0.05)+(num7*0.13)+(num8*0.42)+(num9*0.12)+(num10*1.57)+(num11*0.56)+(num12*0.3)+(num13*0.07)+num15).toFixed(3)
        console.log(globalgai)
        var globallin=((num*1.69)+(num2*2)+(num3*1.62)+(num4*1.65)+(num5*1.84)+(num6*2.2)+(num7*1.54)+(num8*2.32)+(num9*2)+(num10*4.54)+(num11*1.3)+(num12*2.94)+(num13*2.63)).toFixed(3)
        console.log(globallin)
        var globaljia=((num*2.16)+(num2*2.6)+(num3*2.04)+(num4*2.84)+(num5*1)+(num6*3.2)+(num7*3.61)+(num8*3.21)+(num9*2.6)+(num10*2.64)+(num11*1.54)+(num12*2.59)+(num13*2.22)).toFixed(3)
        console.log(globaljia)
        var globalniuhuang=((num*0.362)+(num2*159)+(num7*1.3)+(num8*0.6)+(num9*0.4)+(num10*6)+(num12*0.6)+(num13*1.1)+(num14)).toFixed(3)
        console.log(globalniuhuang)
        var globalvd=((num*0.002)+(num2*0.001)+(num3*0.003)+(num4*0.005)+(num5*0.02)+(num6*0.05)+(num7*0.125)+(num8*0.167)+(num9*0.189)+(num10*0.113)+(num11*0.49)+(num12*0.32)+(num13*0.67)).toFixed(3)
        console.log(globalvd)
         this.setData({
             globaldanbai:globaldanbai,
             globalzhifang:globalzhifang,
             globalgai:globalgai,
             globallin:globallin,
             globaljia:globaljia,
             globalniuhuang:globalniuhuang,
             globalvd:globalvd
         })
     },
    
    goToPage1: function () {
        wx.navigateTo({
          url: '/pages/income/income',
        })
    
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})