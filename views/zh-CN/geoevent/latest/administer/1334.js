;(function (){
          treedata = (window.treedata || {});
          window.treedata.mode = 0;
          window.treedata.mapping = {'1334' : 'geoevent/latest/administer' };
          treedata.data = {};
          treedata.data["root"]  = {  
              "parent" : "",
              "children" : ["1334_h0","1334_h1","1334_h2","1334_h3","1334_h4","1334_h5"]
            },treedata.data["root_1334"] = treedata.data["root"],
treedata.data["1334_h0"]  = { 
              "parent" : "root",
              "label" : "安装后配置入门",
              "children" : ["1334_43","1334_34","1334_44"]
            }
            ,
treedata.data["1334_43"]  = {
            "parent" : "1334_h0",
            "label" : "GeoEvent Server 使用的帐户",
            "url" : "/zh-cn/geoevent/latest/administer/accounts-used-by-geoevent-server.htm"
            
          },
treedata.data["1334_34"]  = {
            "parent" : "1334_h0",
            "label" : "GeoEvent Server 使用的端口",
            "url" : "/zh-cn/geoevent/latest/administer/ports-used-by-geoevent.htm"
            
          },
treedata.data["1334_44"]  = {
            "parent" : "1334_h0",
            "label" : "通过 GeoEvent Server 启动的进程",
            "url" : "/zh-cn/geoevent/latest/administer/processes-started-by-geoevent-server.htm"
            
          },
treedata.data["1334_h1"]  = { 
              "parent" : "root",
              "label" : "维护 ArcGIS GeoEvent Server",
              "children" : ["1334_11","1334_42"]
            }
            ,
treedata.data["1334_11"]  = {
            "parent" : "1334_h1",
            "label" : "监控 GeoEvent Server",
            "url" : "/zh-cn/geoevent/latest/administer/monitoring-geoevent-server.htm"
            
          },
treedata.data["1334_42"]  = {
            "parent" : "1334_h1",
            "label" : "监控日志",
            "url" : "/zh-cn/geoevent/latest/administer/monitoring-logs.htm"
            
          },
treedata.data["1334_h2"]  = { 
              "parent" : "root",
              "label" : "常见管理任务",
              "children" : ["1334_46","1334_27","1334_26","1334_28","1334_25","1334_2","1334_24","1334_33","1334_36","1334_45"]
            }
            ,
treedata.data["1334_46"]  = {
            "parent" : "1334_h2",
            "label" : "登录到 ArcGIS GeoEvent Manager",
            "url" : "/zh-cn/geoevent/latest/administer/log-in-to-geoevent-manager.htm"
            
          },
treedata.data["1334_27"]  = {
            "parent" : "1334_h2",
            "label" : "管理 GeoEvent 定义",
            "url" : "/zh-cn/geoevent/latest/administer/managing-geoevent-definitions.htm"
            
          },
treedata.data["1334_26"]  = {
            "parent" : "1334_h2",
            "label" : "管理标签",
            "url" : "/zh-cn/geoevent/latest/administer/managing-tags.htm"
            
          },
treedata.data["1334_28"]  = {
            "parent" : "1334_h2",
            "label" : "管理地理围栏",
            "url" : "/zh-cn/geoevent/latest/administer/managing-geofences.htm"
            
          },
treedata.data["1334_25"]  = {
            "parent" : "1334_h2",
            "label" : "管理连接器",
            "url" : "/zh-cn/geoevent/latest/administer/managing-connectors.htm"
            
          },
treedata.data["1334_2"]  = {
            "parent" : "1334_h2",
            "label" : "管理配置",
            "url" : "/zh-cn/geoevent/latest/administer/managing-configurations.htm"
            
          },
treedata.data["1334_24"]  = {
            "parent" : "1334_h2",
            "label" : "管理数据存储",
            "url" : "/zh-cn/geoevent/latest/administer/managing-data-stores.htm"
            
          },
treedata.data["1334_33"]  = {
            "parent" : "1334_h2",
            "label" : "管理时空大数据存储",
            "url" : "/zh-cn/geoevent/latest/administer/managing-big-data-stores.htm"
            
          },
treedata.data["1334_36"]  = {
            "parent" : "1334_h2",
            "label" : "管理全局设置",
            "url" : "/zh-cn/geoevent/latest/administer/managing-global-settings.htm"
            
          },
treedata.data["1334_45"]  = {
            "parent" : "1334_h2",
            "label" : "管理系统属性",
            "url" : "/zh-cn/geoevent/latest/administer/managing-system-properties.htm"
            
          },
treedata.data["1334_h3"]  = { 
              "parent" : "root",
              "label" : "对数据进行模拟、记录和采样",
              "children" : ["1334_38","1334_35","1334_37","1334_49"]
            }
            ,
treedata.data["1334_38"]  = {
            "parent" : "1334_h3",
            "label" : "在 GeoEvent Server 中模拟、记录和采样数据",
            "url" : "/zh-cn/geoevent/latest/administer/simulating-and-logging-data-in-geoevent-server.htm"
            
          },
treedata.data["1334_35"]  = {
            "parent" : "1334_h3",
            "label" : "GeoEvent Simulator",
            "url" : "/zh-cn/geoevent/latest/administer/geoevent-simulator.htm"
            
          },
treedata.data["1334_37"]  = {
            "parent" : "1334_h3",
            "label" : "GeoEvent Logger",
            "url" : "/zh-cn/geoevent/latest/administer/geoevent-logger.htm"
            
          },
treedata.data["1334_49"]  = {
            "parent" : "1334_h3",
            "label" : "GeoEvent Sampler",
            "url" : "/zh-cn/geoevent/latest/administer/geoevent-sampler.htm"
            
          },
treedata.data["1334_h4"]  = { 
              "parent" : "root",
              "label" : "ArcGIS GeoEvent Server REST API",
              "children" : ["1334_40","1334_39"]
            }
            ,
treedata.data["1334_40"]  = {
            "parent" : "1334_h4",
            "label" : "GeoEvent Server 管理",
            "url" : "/zh-cn/geoevent/latest/administer/geoevent-server-administration.htm"
            
          },
treedata.data["1334_39"]  = {
            "parent" : "1334_h4",
            "label" : "GeoEvent Server REST API 文档",
            "url" : "/zh-cn/geoevent/latest/administer/geoevent-server-rest-api-documentation.htm"
            
          },
treedata.data["1334_h5"]  = { 
              "parent" : "root",
              "label" : "扩展 ArcGIS GeoEvent Server",
              "children" : ["1334_16","1334_41"]
            }
            ,
treedata.data["1334_16"]  = {
            "parent" : "1334_h5",
            "label" : "如何扩展 GeoEvent Server",
            "url" : "/zh-cn/geoevent/latest/administer/extending-geoevent-server.htm"
            
          },
treedata.data["1334_41"]  = {
            "parent" : "1334_h5",
            "label" : "GeoEvent Server 软件开发工具包 (SDK) 入门",
            "url" : "/zh-cn/geoevent/latest/administer/getting-started-with-geoevent-server-sdk.htm"
            
          }
        })()