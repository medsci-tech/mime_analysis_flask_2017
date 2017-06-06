webpackJsonp([0],[function(t,e){new Vue({el:"#all_bar_doctor_age",data:{title:"all_bar_doctor_age",get_url:"/time/age_groups/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data,e=[];t=t.map(function(t){return e.push(t.age_group),t.count});var a={color:window.global.color,title:{text:"年龄段"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e}],yAxis:[{type:"value"}],series:[{name:"人数",type:"bar",data:t}]};echarts.init(document.getElementById(this.title)).setOption(a)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"#all_pie_doctor_grade",data:{title:"all_pie_doctor_grade",get_url:"/time/hospital_levels/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data;t=t.map(function(t){return{name:t.hospital_level,value:t.count}});var e={color:window.global.color,title:{text:"医院级别统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};echarts.init(document.getElementById(this.title)).setOption(e)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"#all_pie_doctor_office",data:{title:"all_pie_doctor_office",get_url:"/time/offices/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data;t=t.map(function(t){return{name:t.doctor_office,value:t.count}});var e={color:window.global.color,title:{text:"医生科室统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};echarts.init(document.getElementById(this.title)).setOption(e)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"#all_pie_doctor_title",data:{title:"all_pie_doctor_title",get_url:"/time/titles/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data;t=t.map(function(t){return{name:t.doctor_title,value:t.count}});var e={color:window.global.color,title:{text:"医生职称统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};echarts.init(document.getElementById(this.title)).setOption(e)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"#month_line_doctor_all_count_block",data:{title:"month_line_doctor_all_count",get_url:"/time/days/",get_data:"",select_year:window.global.now_year,select_month:window.global.now_month},watch:{select_year:function(){this.refresh()},select_month:function(){this.refresh()}},methods:{refresh:function(t){var e=this;$.get(e.get_url+e.select_year+"/"+e.select_month,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data,e=[],a=[],o=[],r=[];t.sort(function(t,e){return t>e}).map(function(t){e.push(t.day+"日"),a.push(t.register_count),o.push(t.authorize_count),r.push(t.trade_count)});var n={color:window.global.color,title:{text:"月份统计"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["register_count","authorize_count","trade_count"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:e}],yAxis:[{type:"value"}],series:[{name:"register_count",type:"line",stack:"总量",areaStyle:{normal:{}},data:a},{name:"authorize_count",type:"line",stack:"总量",areaStyle:{normal:{}},data:o},{name:"trade_count",type:"line",stack:"总量",areaStyle:{normal:{}},data:r}]};echarts.init(document.getElementById(this.title)).setOption(n)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"#year_bar_doctor_all_count_block",data:{title:"year_bar_doctor_all_count",get_url:"/time/months/",get_data:"",select_year:window.global.now_year},watch:{select_year:function(){this.refresh()}},methods:{refresh:function(){var t=this;$.get(t.get_url+t.select_year,{},function(e){t.get_data=JSON.parse(e),t.chart()})},chart:function(){var t=this.get_data,e=[],a=[],o=[],r=[];t.sort(function(t,e){return t>e}).map(function(t){e.push(t.month+"月"),a.push(t.register_count),o.push(t.authorize_count),r.push(t.trade_count)});var n={color:window.global.color,title:{text:"全年统计"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["register_count","authorize_count","trade_count"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e}],yAxis:[{type:"value"}],series:[{name:"register_count",type:"bar",data:a},{name:"authorize_count",type:"bar",data:o},{name:"trade_count",type:"bar",data:r}]};echarts.init(document.getElementById(this.title)).setOption(n)}},mounted:function(){this.refresh()}})},,,function(t,e){new Vue({delimiters:["[[","]]"],el:"#all_map_doctor_gis_block",data:{title:"all_map_doctor_gis",get_url:"/region/index/",get_data:"",select_province:"湖北",provinces:["南海诸岛","台湾","河北","山西","内蒙古","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","北京","天津","上海","重庆","香港","澳门"]},watch:{select_province:function(){window.global.select_province=this.select_province,this.refresh()}},methods:{refresh:function(t){var e=this;$.get(e.get_url+e.select_province,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this,e={title:{text:t.select_province,left:"center"},series:[{type:"map",mapType:"china",selectedMode:"single",label:{normal:{show:!0},emphasis:{show:!0}},itemStyle:{normal:{areaColor:window.global.color[0],borderColor:"#fff"},emphasis:{areaColor:window.global.color[4]}},data:[{name:t.select_province,selected:!0}]}]},a=echarts.init(document.getElementById(this.title));a.setOption(e),a.on("mapselectchanged",function(e){t.select_province=e.batch[0].name})}},mounted:function(){this.refresh()}})},,,,,,function(t,e,a){a(8),a(0),a(3),a(2),a(1),a(5),a(4)}],[14]);