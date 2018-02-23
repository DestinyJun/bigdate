//  accumulation_echart
var accumulationEchart = echarts.init(document.getElementById('accumulation_echart'), 'light');
var accumulationEchartOption = {
    // 图标的标题样式
    title: {
        text: '流动人口社保、公积金缴纳情况',
        textStyle: {
            color: 'white',
            fontStyle: 12
        }
    },
    // 图标的图列控制配置
    legend: {
        textStyle: {
            color: 'white',
            fontStyle: 12
        },
        data:['社保','公积金'],
        top:25,
        right:5,
        itemGap:20,
        itemHeight:0 //设置图列标记的高
    },
    // 控制坐标系内绘图区域的相关样式
    grid: {
        show: false,
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    // 控制x轴样式
    xAxis: {
        show:true,
        type: 'category',
        boundaryGap: false,
        data: ['2007','','2009','','2011','','2013','','2015','','2017'],
        // 坐标轴轴线相关设置
        axisLine:{
            lineStyle:{
                color:'#2D3653'
            }
        },
        // 坐标轴刻度相关设置
        axisTick:{
            show: false
        },
        // 坐标轴刻度标签的相关设置
        axisLabel:{
            color:'white',
            interval:0
        },
        // 控制水平网格线是否显示
        splitLine: {
            show: false,
            interval: '0',
            lineStyle:{
                opacity:'0.1'
            }
        }
    },
    // 控制y轴样式
    yAxis: {
        show:true,
        type: 'value',

        // 坐标轴轴线相关设置
        axisLine:{
            lineStyle:{
                color:'#2D3653'
            }
        },
        // 坐标轴刻度相关设置
        axisTick:{
            show: false
        },
        // 坐标轴刻度标签的相关设置
        axisLabel:{
            color:'white',
            length:6,
            formatter: function (value) {
                var texts = [];
                if(value===0){
                    texts.push('0');
                }
                else if (value <= 5) {
                    texts.push('5%');
                }
                else if (value<= 10) {
                    texts.push('10%');
                }
                else if(value<= 20){
                    texts.push('20%');
                }
                else if(value<= 30){
                    texts.push('30%');
                }
                else if(value<= 40){
                    texts.push('40%');
                }
                return texts.join('/');
            }
        },
        // 控制水平网格线是否显示
        splitLine: {
            show: false,
            interval: '0',
            lineStyle:{
                opacity:'0.1'
            }
        }
    },
    tooltip: {
        trigger: 'none'
    },
    series: [
        {
            name:'社保',
            type:'line',
            stack: null,
            data:[7, 1, 10, 23, 10, 30,12,45,13,5,12,33],
            color: ['#697FA4']
        },
        {
            name:'公积金',
            type:'line',
            stack: null,
            data:[1, 7, 9, 13, 15, 27,46,10,5,48,13,28],
            color: '#E5E7B6'
        }
    ]
};
accumulationEchart.setOption(accumulationEchartOption);

//  income_echart
var incomeEchart = echarts.init(document.getElementById('income_echart'), 'light');
var incomeEchartOption = {
    // 图标的标题样式
    title: {
        text: '流动人口职业收入情况',
        textStyle: {
            color: 'white',
            fontStyle: 12
        }
    },
    series: [
        {
            name:'人口分布',
            type:'pie',
            legendHoverLink:true,
            hoverAnimation:true,
            startAngle:60,
            hoverOffset:10,
            roseType:false,
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'outside',
                formatter: '{b}: {d}%',
                color: 'white',
                align:'center',
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    }
                }
            },
            labelLine: {
                show: true

            },
            center:['45%','50%'],
            data:[
                {
                    value:25,
                    name:'企事业单位',
                    labelLine:{
                        color:'white'
                    },
                    itemStyle:{
                        color:'#FADD27'
                    }

                },
                {
                    value:75,
                    name:'其他',
                    labelLine:{
                        color:'white'
                    },
                    itemStyle:{
                        color:'#4171BD'
                    }
                }
            ]
        }
    ]
};
incomeEchart.setOption(incomeEchartOption);

//  crime_echart
var crimeData = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];
var crimeEchart = echarts.init(document.getElementById('crime_echart'), 'light');
var crimeEchartOption = {
    title: {
        text: '流动人口犯罪率及犯罪类型',
        textStyle: {
            color: 'white',
            fontStyle: 14
        },
        subtext:'流动人口犯罪率：20%',
        subtextStyle:{
            color:'#fff',
            fontStyle: 12,
            align:'center',
            verticalAlign:'bottom',
            rich:{
                formatter: [
                    '{a|这段文本采用样式a}',
                    '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
                ].join('\n'),
                a: {
                    color: 'red',
                    lineHeight: 10
                },
                b: {
                    backgroundColor: {
                        image: 'xxx/xxx.jpg'
                    },
                    height: 40
                },
                x: {
                    fontSize: 18,
                    fontFamily: 'Microsoft YaHei',
                    borderColor: '#449933',
                    borderRadius: 4
                }
            }
        }
    },
    xAxis: {
        splitLine: {
            show:false
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'solid',
                opacity:0.1
            }
        },
        scale: true
    },
    series: [
        {
        name: '1990',
        data: crimeData[0],
        type: 'scatter',
        symbolSize: function (crimeData) {
            return Math.sqrt(crimeData[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    },
        {
        name: '2015',
        data: crimeData[1],
        type: 'scatter',
        symbolSize: function (crimeData) {
            return Math.sqrt(crimeData[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};
crimeEchart.setOption(crimeEchartOption);

//right_top_histogram
var rightTopHistogram = echarts.init(document.getElementById('right_top_histogram'), 'light');
var rightTopHistogramOption = {
    // 图标的标题样式
    title: {
        text: '流动人口社保、公积金缴纳情况',
        textStyle: {
            color: 'white',
            fontStyle: '12px'
        }
    },
    tooltip: {
        trigger: 'none'
    },
    legend: {
        textStyle: {
            color: 'white',
            fontStyle: '12px'
        },
        data:['社保','公积金'],
        top:'25px',
        right:'5px'
    },
    // 控制坐标系内绘图区域的相关样式
    grid: {
        show: false,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // 控制x轴样式
    xAxis: {
        show:true,
        type: 'category',
        boundaryGap: false,
        data: ['2007','','2009','','2011','','2013','','2015','','2017'],
        // 控制水平网格线是否显示
        splitLine: {
            show: false,
            interval: '0',
            lineStyle:{
                opacity:'0.1'
            }
        }
    },
    // 控制y轴样式
    yAxis: {
        show:true,
        type: 'value',
        // 控制水平网格线是否显示
        splitLine: {
            show: false,
            interval: '0',
            lineStyle:{
                opacity:'0.1'
            }
        }
    },
    series: [
        {
            name:'社保',
            type:'line',
            stack: '总量',
            data:[7, 1, 10, 23, 10, 30],
            color: ['#697FA4']
        },
        {
            name:'公积金',
            type:'line',
            stack: '总量',
            data:[1, 7, 9, 13, 15, 27],
            color: '#E5E7B6'
        }
    ]
};
rightTopHistogram.setOption(rightTopHistogramOption);