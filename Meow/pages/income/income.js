// pages/income/income.js  
var app=getApp();
Page({
    onShareAppMessage: function (res) {
        return {
          title: 'ECharts 可以在微信小程序中使用啦！',
          path: '/pages/index/index',
          success: function () { },
          fail: function () { }
        }
      },
     
    /**
     * 页面的初始数据
     */

    data: {
        dan:0,
        ec: {
            onInit: initChart
        },
        NutriKind1:{kind:"蛋白质",min:"40",con:"50",max:"300"},
        NutriKind2:{kind:"脂肪",min:"2.88",con:"22.5",max:"82.5"},
        NutriKind3:{kind:"胆碱",min:"0.51",con:"0.637",max:"2.1"},
        NutriKind4:{kind:"钙",min:"0.4",con:"0.72",max:"1.72"},
        NutriKind5:{kind:"磷",min:"0.35",con:"0.64",max:"1.39"},
        NutriKind6:{kind:"牛磺酸",min:"0.08",con:"0.1",max:"0.14"},
        NutriKind7:{kind:"钾",min:"0",con:"1.3",max:"2.71"},
        NutriKind8:{kind:"维生素D",min:"0",con:"0.000175",max:"0.00188"},

    },
    onReady() {

    },
    /**
     * 生命周期函数--监听页面显示
     */

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onShow() {
        dan:app.globalData.globaldanbai
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

    },
})
import * as echarts from '../../ec-canvas/echarts.js';
function initChart(canvas, width, height, dpr) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
   
    var option = {
      title: {
        text: '',
        left: 'center'
      },
      legend: {
        data: ['最少', '标准','实际', '最大'],
        top: 50,
        left: 'center',
        backgroundColor:'red',
        z: 100
      },
      grid: {
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        width:1,
        data: ['蛋白质','脂肪', '胆碱', '钙', '磷','牛磺酸', '钾','维生素D']
        // show: false
      },
      yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
        // show: false
      },
      series: [{
        name: '最少',
        type: 'line',
        smooth: true,
        data: [40, 0, 0.51, 0.4,0.35, 0.08, 1.3,1.75]
      }, {
        name: '实际',
        type: 'line',
        smooth: true,
        data: [12.00, 25.00, 5.89, 5.43, 7.2, 2.7, 2.45,4.8]
      }, {
        name: '标准',
        type: 'line',
        smooth: true,
        data: [50.0, 22.05, 0.637, 0.72, 0.64, 1.96,18]
      }, {
        name: '最大',
        type: 'line',
        smooth: true,
        data: [100, 82.5, 1.72, 1.39, 0.14, 2.71,0.00188]
      }
    ]
    };
   
    chart.setOption(option);
    return chart;
  }
