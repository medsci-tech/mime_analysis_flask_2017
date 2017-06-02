webpackJsonp([0],[,function(t,e){new Vue({el:"all_bar_doctor_age",data:{title:"all_bar_doctor_age",get_url:"/time/age_groups/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data,e=[];t=t.map(function(t){return e.push(t.age_group),t.count});var a={color:window.global.color,title:{text:"年龄段"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e}],yAxis:[{type:"value"}],series:[{name:"人数",type:"bar",data:t}]};echarts.init(document.getElementById(this.title)).setOption(a)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"all_heatmap_doctor_gis",data:{title:"all_heatmap_doctor_gis",get_url:"/time/regions/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data,e=0;t=t.map(function(t){return e=e>t.register_count?e:t.register_count,[t.longitude,t.latitude,t.register_count]}),e=10*Math.ceil(e/10);var a={title:{text:"全国用户分布热力图",left:"center",textStyle:{color:"#fff"}},backgroundColor:"#404a59",visualMap:{min:0,max:e,splitNumber:5,inRange:{color:["#d94e5d","#eac736","#50a3ba"].reverse()},textStyle:{color:"#fff"}},geo:{map:"china",label:{emphasis:{show:!1}},roam:!1,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},series:[{name:"AQI",type:"heatmap",coordinateSystem:"geo",data:t}]};echarts.init(document.getElementById(this.title)).setOption(a)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"all_pie_doctor_grade",data:{title:"all_pie_doctor_grade",get_url:"/time/hospital_levels/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data;t=t.map(function(t){return{name:t.hospital_level,value:t.count}});var e={color:window.global.color,title:{text:"医院级别统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};echarts.init(document.getElementById(this.title)).setOption(e)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"all_pie_doctor_office",data:{title:"all_pie_doctor_office",get_url:"/time/offices/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data;t=t.map(function(t){return{name:t.doctor_office,value:t.count}});var e={color:window.global.color,title:{text:"医生科室统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};echarts.init(document.getElementById(this.title)).setOption(e)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"all_pie_doctor_title",data:{title:"all_pie_doctor_title",get_url:"/time/titles/",get_data:""},methods:{refresh:function(t){var e=this;$.get(e.get_url,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data;t=t.map(function(t){return{name:t.doctor_title,value:t.count}});var e={color:window.global.color,title:{text:"医生职称统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};echarts.init(document.getElementById(this.title)).setOption(e)}},mounted:function(){this.refresh()}})},,,,function(t,e){new Vue({el:"month_line_doctor_all_count",data:{title:"month_line_doctor_all_count",get_url:"/days/",get_data:""},methods:{refresh:function(t){var e=this,a=$("#select_year2").val(),o=$("#select_month2").val();$.get(e.get_url+a+"/"+o,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=[],e=[],a=[],o=[];this.get_data.sort(function(t,e){return t>e}).map(function(r){t.push(r.day+"日"),e.push(r.register_count),a.push(r.authorize_count),o.push(r.trade_count)});var r={color:window.global.color,title:{text:"月份统计"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{normal:{}},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{normal:{}},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{normal:{}},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320]}]};echarts.init(document.getElementById(this.title)).setOption(r)}},mounted:function(){this.refresh()}})},function(t,e){new Vue({el:"year_bar_doctor_all_count",data:{title:"year_bar_doctor_all_count",get_url:"/time/months/",get_data:""},methods:{refresh:function(t){var e=this,a=$(select_year).val();$.get(e.get_url+a,{},function(t){e.get_data=JSON.parse(t),e.chart()})},chart:function(){var t=this.get_data,e=[],a=[],o=[],r=[];t.sort(function(t,e){return t>e}).map(function(t){e.push(t.month+"月"),a.push(t.register_count),o.push(t.authorize_count),r.push(t.trade_count)});var i={color:window.global.color,title:{text:"全年统计"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["register_count","authorize_count","trade_count"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e}],yAxis:[{type:"value"}],series:[{name:"register_count",type:"bar",data:a},{name:"authorize_count",type:"bar",data:o},{name:"trade_count",type:"bar",data:r}]};echarts.init(document.getElementById(this.title)).setOption(i)}},mounted:function(){this.refresh()}})},,,,,,function(t,e,a){a(2),a(1),a(5),a(4),a(3),a(10),a(9)}],[16]);