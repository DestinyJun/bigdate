/**
 * Created by wangwenjun on 2018/2/23.
 */
'use strict';
var map = new BMap.Map("center_map");
// 创建地图实例
var point = new BMap.Point(116.404, 39.915);
// 创建点坐标
map.centerAndZoom(point, 15);
// 初始化地图，设置中心点坐标和地图级别