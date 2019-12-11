function getOpt(params) {
  const {
    lineColor = '#F8E71C',
    barColors = ['#397FE0'],
    xData,
    yData1,
    yName1,
    yMax1,
    yData2,
    yName2,
    yMax2
  } = params
  return {
    // color: barColors,
    // grid: {
    //   bottom: 100
    // },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: 24
      },
      axisPointer: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      // axisLabel: {
      //   rotate: 45,
      //   color: 'rgba(255, 255, 255, 0.7)'
      // },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.2)'
        }
      },
      // boundaryGap: ['20%', '20%'],
      data: xData
    },
    yAxis: [{
      type: 'value',
      name: yName1,
      max: yMax1,
      nameTextStyle: {
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 400
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.2)'
        }
      },
      axisLabel: {
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.7)'
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }, {
      type: 'value',
      name: yName2,
      max: yMax2,
      nameTextStyle: {
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 400
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.2)'
        }
      },
      axisLabel: {
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.7)'
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }],
    series: [{
      name: yName1,
      data: yData1,
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        normal: {
          barBorderRadius: 40,
          shadowColor: '#111',
          color: function(params) {
            if (barColors.length > 1) {
              return barColors[params.dataIndex]
            } else {
              return barColors[0]
            }
          }
        }
      },
      // color: barColors,
      width: 3
    },
    {
      name: yName2,
      yAxisIndex: 1,
      data: yData2,
      type: 'line',
      smooth: true,
      symbol: 'emptyCircle',
      symbolSize: 8,
      color: lineColor,
      width: 3
    }]
  }
}
export default getOpt
