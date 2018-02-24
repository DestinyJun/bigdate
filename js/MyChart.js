//  accumulation_echart 社保公积金折现图
var accumulationEchart = echarts.init(document.getElementById('accumulation_echart'), 'light');
var accumulationEchartOption = {
    // 图标的标题样式
    title: {
        text: '流动人口社保、公积金缴纳情况',
        top:5,
        textStyle: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'normal'
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
        data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
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
            interval:1
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
                var texts = [value+'%'];
                if(value===0){
                    texts =[0]
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
            data:[1, 7, 9, 13, 15, 27,46,10,5,48,13],
            color: '#E5E7B6'
        }
    ]
};
accumulationEchart.setOption(accumulationEchartOption);

//  income_echart 流动人口职业收入饼图
var incomeEchart = echarts.init(document.getElementById('income_echart'), 'light');
var incomeEchartOption = {
    // 图标的标题样式
    title: {
        text: '流动人口职业收入情况',
        textStyle: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'normal'
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

//  crime_echart 犯罪率及犯罪类型气泡图
var crimeEchart = echarts.init(document.getElementById('crime_echart'), 'light');
var crimeEchartOption = {
    title: {
        text: '流动人口犯罪率及犯罪类型',
        top:5,
        textStyle: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'normal'
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
            color:'white'
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
            symbolSize: 0,
            data: [['', 0]],
            type: 'scatter',
            itemStyle:{
                color:'#FB5C35'
            }
        },
        {
            symbolSize: 30,
            data: [['放火罪', 20]],
            type: 'scatter',
            itemStyle:{
                color:'#FB5C35'
            }
        },
        {
            symbolSize: 25,
            data: [['破坏交通', 15]],
            type: 'scatter',
            itemStyle:{
                color:'#FB5C35'
            }
        },
        {
            symbolSize: 20,
            data: [['抢劫', 12]],
            type: 'scatter',
            itemStyle:{
                color:'#FB5C35'
            }
        },
        {
            symbolSize: 15,
            data: [['强奸', 4]],
            type: 'scatter',
            itemStyle:{
                color:'#FEBB4A'
            }
        },
        {
            symbolSize: 15,
            data: [['诈骗', 1]],
            type: 'scatter',
            itemStyle:{
                color:'#FEBB4A'
            }
        },
        {
            symbolSize: 15,
            data: [['勒索', 3]],
            type: 'scatter',
            itemStyle:{
                color:'#FEBB4A'
            }
        },
        {
            symbolSize: 15,
            data: [['伪造假币', 9]],
            type: 'scatter',
            itemStyle:{
                color:'#FEBB4A'
            }
        },
        {
            symbolSize: 15,
            data: [['非法经营', 13]],
            type: 'scatter',
            itemStyle:{
                color:'#FB5C35'
            }
        }
    ]
};
crimeEchart.setOption(crimeEchartOption);

//  religion_echart 宗教扇形图
var religionEchart = echarts.init(document.getElementById('religion_echart'), 'light');
var religionEchartOption = {
    title: {
        text: '流动人口名族宗教',
        top:5,
        textStyle: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'normal'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    series : [
        {
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
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
            data:[
                {
                    value:10,
                    name:'伊斯兰教',
                    itemStyle:{color:'#E64018'}
                },
                {
                    value:15,
                    name:'佛教',
                    itemStyle:{color:'#FBB034'}
                },
                {
                    value:10,
                    name:'道教',
                    itemStyle:{color:'#FEEB23'}
                },
                {
                    value:12,
                    name:'基督教',
                    itemStyle:{color:'#E30B40'}
                },
                {
                    value:6,
                    name:'印度教',
                    itemStyle:{color:'#3291DD'}
                },
                {
                    value:4,
                    name:'其他',
                    itemStyle:{color:'#8B489E'}
                },

                {
                    value:30,
                    name:'天主教',
                    itemStyle:{color:'#75E925'}
                },

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
religionEchart.setOption(religionEchartOption);


//  histogram_echarts 流动人口数量性别变化直方体折线图
var histogramEchart = echarts.init(document.getElementById('histogram_echarts'), 'light');
var histogramEchartOption = {
    // 图标的标题样式
    title: {
        text: '流动人口数量及性别年变化',
        top:5,
        textStyle: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'normal'
        }
    },
    legend: {
        top:30,
        data:['女','男','常驻人口总量','流动人口总量'],
        itemHeight:10,
        itemWidth:20,
        textStyle:{
            color:'white'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['2011','2012','2013','2014','2015','2016'],
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
                interval:1
            },
            // 控制水平网格线是否显示
            splitLine: {
                show: false,
                interval: '0',
                lineStyle:{
                    opacity:'0.1'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',

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
                color:'white'
            },
            // 控制水平网格线是否显示
            splitLine: {
                show: false,
                interval: '0',
                lineStyle:{
                    opacity:'0.1'
                }
            }
        }
    ],
    series : [
        {
            name:'常驻人口总量',
            type:'line',
            stack: null,
            data:[277,480,508,590,501,536],
            color: ['#89B39D']
        },
        {
            name:'流动人口总量',
            type:'line',
            stack: null,
            data:[520,432,52,414,120,228],
            color: '#FFEB64'
        },

        {
            name:'男',
            type:'bar',
            stack: '人数',
            itemStyle:{
                color:'#219FF3'
            },
            barWidth:'50%',
            data:[220, 182, 191, 234, 290, 330]
        },
        {
            name:'女',
            type:'bar',
            stack: '人数',
            itemStyle:{
                color:'#FE3732'
            },
            barWidth:'50%',
            data:[120, 132, 101, 134, 90, 230]
        }
    ]
};
histogramEchart.setOption(histogramEchartOption);

//  education_echart 教育折线图
var educationEchart = echarts.init(document.getElementById('education_echart'), 'light');
var educationEchartOption = {
    // 图标的标题样式
    title: {
        text: '流动人口子女入学率',
        top:5,
        textStyle: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'normal'
        }
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
        data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
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
            interval:1
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
            // formatter: '{value} w'
            formatter: function (value) {
                var texts = [value+'w'];
                if(value===0){
                     texts =[0]
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
    series: [
        {
            symbolSize: 24,
            data: [
                ['2007', 0]
            ],
            symbolOffset:['0%','0'],
            type: 'scatter',

            itemStyle:{
                color:'#FDA201'
            }
        },
        {
            symbolSize: 24,
            data: [
                ['2017', 15]
            ],
            symbolOffset:['0','50%'],
            type: 'scatter',
            itemStyle:{
                color:'#FDA201'
            }
        },
        {
            type:'line',
            stack: null,
            data:[0,15,5,23,10,30,12,30,13,5,12],
            color: ['#CBD29D']
        }
    ]
};
educationEchart.setOption(educationEchartOption);