;(function (){
          treedata = (window.treedata || {});
          window.treedata.mode = 0;
          window.treedata.mapping = {'1336' : 'geoevent/latest/process-event-data' };
          treedata.data = {};
          treedata.data["root"]  = {  
              "parent" : "",
              "children" : ["1336_h0","1336_h2","1336_h5"]
            },treedata.data["root_1336"] = treedata.data["root"],
treedata.data["1336_h0"]  = { 
              "parent" : "root",
              "label" : "连接到数据",
              "children" : ["1336_21","1336_31","1336_h1"]
            }
            ,
treedata.data["1336_21"]  = {
            "parent" : "1336_h0",
            "label" : "输入连接器概览",
            "url" : "/zh-cn/geoevent/latest/process-event-data/overview-of-input-connectors.htm"
            
          },
treedata.data["1336_31"]  = {
            "parent" : "1336_h0",
            "label" : "可用输入连接器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/input-connectors.htm"
            
          },
treedata.data["1336_h1"]  = { 
              "parent" : "1336_h0",
              "label" : "输入连接器",
              "children" : ["1336_67","1336_80","1336_78","1336_79","1336_69","1336_70","1336_82","1336_77","1336_81","1336_75","1336_73","1336_74","1336_83","1336_85","1336_84","1336_72","1336_68","1336_71"]
            }
            ,
treedata.data["1336_67"]  = {
            "parent" : "1336_h1",
            "label" : "轮询 ArcGIS Server 以查找要素",
            "url" : "/zh-cn/geoevent/latest/process-event-data/poll-an-arcgis-server-for-features.htm"
            
          },
treedata.data["1336_80"]  = {
            "parent" : "1336_h1",
            "label" : "轮询外部网站以获取 GeoJSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/poll-an-external-website-for-geojson.htm"
            
          },
treedata.data["1336_78"]  = {
            "parent" : "1336_h1",
            "label" : "轮询外部网站以查找 JSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/poll-an-external-website-for-json.htm"
            
          },
treedata.data["1336_79"]  = {
            "parent" : "1336_h1",
            "label" : "轮询外部网站以查找 XML",
            "url" : "/zh-cn/geoevent/latest/process-event-data/poll-an-external-website-for-xml.htm"
            
          },
treedata.data["1336_69"]  = {
            "parent" : "1336_h1",
            "label" : "在 REST 端点接收要素",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-features-on-a-rest-endpoint.htm"
            
          },
treedata.data["1336_70"]  = {
            "parent" : "1336_h1",
            "label" : "在 REST 端点接收 GeoJSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-geojson-on-a-rest-endpoint.htm"
            
          },
treedata.data["1336_82"]  = {
            "parent" : "1336_h1",
            "label" : "接收 WebSocket 上的 GeoJSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-geojson-on-a-websocket.htm"
            
          },
treedata.data["1336_77"]  = {
            "parent" : "1336_h1",
            "label" : "在 REST 端点接收 JSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-json-on-a-rest-endpoint.htm"
            
          },
treedata.data["1336_81"]  = {
            "parent" : "1336_h1",
            "label" : "接收 WebSocket 上的 JSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-json-on-a-websocket.htm"
            
          },
treedata.data["1336_75"]  = {
            "parent" : "1336_h1",
            "label" : "接收 RSS",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-rss.htm"
            
          },
treedata.data["1336_73"]  = {
            "parent" : "1336_h1",
            "label" : "从 TCP 套接字接收文本",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-text-from-a-tcp-socket.htm"
            
          },
treedata.data["1336_74"]  = {
            "parent" : "1336_h1",
            "label" : "从 UDP 套接字接收文本",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-text-from-a-udp-socket.htm"
            
          },
treedata.data["1336_83"]  = {
            "parent" : "1336_h1",
            "label" : "在 REST 端点接收 XML",
            "url" : "/zh-cn/geoevent/latest/process-event-data/receive-xml-on-a-rest-endpoint.htm"
            
          },
treedata.data["1336_85"]  = {
            "parent" : "1336_h1",
            "label" : "订阅外部 WebSocket 以获取 GeoJSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/subscribe-to-an-external-websocket-for-geojson.htm"
            
          },
treedata.data["1336_84"]  = {
            "parent" : "1336_h1",
            "label" : "订阅外部 WebSocket 以获取 JSON",
            "url" : "/zh-cn/geoevent/latest/process-event-data/subscribe-to-an-external-websocket-for-json.htm"
            
          },
treedata.data["1336_72"]  = {
            "parent" : "1336_h1",
            "label" : "查看新 CSV 文件的文件夹",
            "url" : "/zh-cn/geoevent/latest/process-event-data/watch-a-folder-for-new-csv-files.htm"
            
          },
treedata.data["1336_68"]  = {
            "parent" : "1336_h1",
            "label" : "查看新 GeoJSON 文件的文件夹",
            "url" : "/zh-cn/geoevent/latest/process-event-data/watch-a-folder-for-new-geojson-files.htm"
            
          },
treedata.data["1336_71"]  = {
            "parent" : "1336_h1",
            "label" : "查看新 JSON 文件的文件夹",
            "url" : "/zh-cn/geoevent/latest/process-event-data/watch-a-folder-for-new-json-files.htm"
            
          },
treedata.data["1336_h2"]  = { 
              "parent" : "root",
              "label" : "分析和处理数据",
              "children" : ["1336_4","1336_23","1336_103","1336_104","1336_26","1336_h3","1336_25","1336_h4","1336_28","1336_105"]
            }
            ,
treedata.data["1336_4"]  = {
            "parent" : "1336_h2",
            "label" : "GeoEvent 服务概述",
            "url" : "/zh-cn/geoevent/latest/process-event-data/overview-of-geoevent-services.htm"
            
          },
treedata.data["1336_23"]  = {
            "parent" : "1336_h2",
            "label" : "创建 GeoEvent 服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/creating-a-geoevent-service.htm"
            
          },
treedata.data["1336_103"]  = {
            "parent" : "1336_h2",
            "label" : "将输入添加到 GeoEvent 服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/adding-inputs-to-geoevent-services.htm"
            
          },
treedata.data["1336_104"]  = {
            "parent" : "1336_h2",
            "label" : "将输出添加到 GeoEvent 服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/adding-outputs-to-geoevent-services.htm"
            
          },
treedata.data["1336_26"]  = {
            "parent" : "1336_h2",
            "label" : "将过滤器添加到 GeoEvent 服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/adding-a-filter-to-a-geoevent-service.htm"
            
          },
treedata.data["1336_h3"]  = { 
              "parent" : "1336_h2",
              "label" : "过滤器",
              "children" : ["1336_32","1336_58","1336_40","1336_60","1336_44","1336_54"]
            }
            ,
treedata.data["1336_32"]  = {
            "parent" : "1336_h3",
            "label" : "什么是过滤器？",
            "url" : "/zh-cn/geoevent/latest/process-event-data/filters.htm"
            
          },
treedata.data["1336_58"]  = {
            "parent" : "1336_h3",
            "label" : "属性过滤器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/attribute-filters.htm"
            
          },
treedata.data["1336_40"]  = {
            "parent" : "1336_h3",
            "label" : "空间过滤器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/spatial-filters.htm"
            
          },
treedata.data["1336_60"]  = {
            "parent" : "1336_h3",
            "label" : "属性过滤器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/property-filters.htm"
            
          },
treedata.data["1336_44"]  = {
            "parent" : "1336_h3",
            "label" : "使用标签创建过滤器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/create-filters-using-tags.htm"
            
          },
treedata.data["1336_54"]  = {
            "parent" : "1336_h3",
            "label" : "使用正则表达式创建过滤器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/create-filters-using-regular-expressions.htm"
            
          },
treedata.data["1336_25"]  = {
            "parent" : "1336_h2",
            "label" : "将处理器添加到 GeoEvent 服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/adding-a-processor-to-a-geoevent-service.htm"
            
          },
treedata.data["1336_h4"]  = { 
              "parent" : "1336_h2",
              "label" : "处理器",
              "children" : ["1336_30","1336_61","1336_62","1336_48","1336_56","1336_49","1336_53","1336_64","1336_63","1336_65","1336_41","1336_46","1336_50","1336_47","1336_57","1336_39","1336_45","1336_51","1336_37","1336_52","1336_55","1336_66","1336_38","1336_59","1336_42","1336_43"]
            }
            ,
treedata.data["1336_30"]  = {
            "parent" : "1336_h4",
            "label" : "什么是处理器？",
            "url" : "/zh-cn/geoevent/latest/process-event-data/processors.htm"
            
          },
treedata.data["1336_61"]  = {
            "parent" : "1336_h4",
            "label" : "添加 XYZ 值处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/add-xyz-values-processor.htm"
            
          },
treedata.data["1336_62"]  = {
            "parent" : "1336_h4",
            "label" : "方位角计算器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/bearing-calculator-processor.htm"
            
          },
treedata.data["1336_48"]  = {
            "parent" : "1336_h4",
            "label" : "缓冲区创建器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/buffer-creator-processor.htm"
            
          },
treedata.data["1336_56"]  = {
            "parent" : "1336_h4",
            "label" : "凸多边形处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/convex-hull-creator-processor.htm"
            
          },
treedata.data["1336_49"]  = {
            "parent" : "1336_h4",
            "label" : "差创建器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/difference-creator-processor.htm"
            
          },
treedata.data["1336_53"]  = {
            "parent" : "1336_h4",
            "label" : "包络创建器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/envelope-creator-processor.htm"
            
          },
treedata.data["1336_64"]  = {
            "parent" : "1336_h4",
            "label" : "事件连接器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/event-joiner-processor.htm"
            
          },
treedata.data["1336_63"]  = {
            "parent" : "1336_h4",
            "label" : "事件量控制器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/event-volume-controller-processor.htm"
            
          },
treedata.data["1336_65"]  = {
            "parent" : "1336_h4",
            "label" : "要素转点处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/feature-to-point-processor.htm"
            
          },
treedata.data["1336_41"]  = {
            "parent" : "1336_h4",
            "label" : "字段计算器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/field-calculator-processor.htm"
            
          },
treedata.data["1336_46"]  = {
            "parent" : "1336_h4",
            "label" : "字段计算器（正则表达式）处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/field-calculator-regular-expression-processor.htm"
            
          },
treedata.data["1336_50"]  = {
            "parent" : "1336_h4",
            "label" : "字段丰富器（要素服务）处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/field-enricher-feature-service-processor.htm"
            
          },
treedata.data["1336_47"]  = {
            "parent" : "1336_h4",
            "label" : "字段丰富器（文件）处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/field-enricher-file-processor.htm"
            
          },
treedata.data["1336_57"]  = {
            "parent" : "1336_h4",
            "label" : "字段映射器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/field-mapper-processor.htm"
            
          },
treedata.data["1336_39"]  = {
            "parent" : "1336_h4",
            "label" : "字段缩减器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/field-reducer-processor.htm"
            
          },
treedata.data["1336_45"]  = {
            "parent" : "1336_h4",
            "label" : "地理标记器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/geotagger-processor.htm"
            
          },
treedata.data["1336_51"]  = {
            "parent" : "1336_h4",
            "label" : "事件检测器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/incident-detector-processor.htm"
            
          },
treedata.data["1336_37"]  = {
            "parent" : "1336_h4",
            "label" : "相交器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/intersector-processor.htm"
            
          },
treedata.data["1336_52"]  = {
            "parent" : "1336_h4",
            "label" : "无操作处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/no-operation-processor.htm"
            
          },
treedata.data["1336_55"]  = {
            "parent" : "1336_h4",
            "label" : "投影器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/projector-processor.htm"
            
          },
treedata.data["1336_66"]  = {
            "parent" : "1336_h4",
            "label" : "扇形视域计算器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/range-fan-calculator-processor.htm"
            
          },
treedata.data["1336_38"]  = {
            "parent" : "1336_h4",
            "label" : "简化器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/simplifier-processor.htm"
            
          },
treedata.data["1336_59"]  = {
            "parent" : "1336_h4",
            "label" : "对称差集创建器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/symmetric-difference-creator-processor.htm"
            
          },
treedata.data["1336_42"]  = {
            "parent" : "1336_h4",
            "label" : "追踪间距检测器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/track-gap-detector-processor.htm"
            
          },
treedata.data["1336_43"]  = {
            "parent" : "1336_h4",
            "label" : "并集创建器处理器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/union-creator-processor.htm"
            
          },
treedata.data["1336_28"]  = {
            "parent" : "1336_h2",
            "label" : "发布 GeoEvent 服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/publishing-a-geoevent-service.htm"
            
          },
treedata.data["1336_105"]  = {
            "parent" : "1336_h2",
            "label" : "在 GeoEvent 服务中访问 GeoEvent Server 设置",
            "url" : "/zh-cn/geoevent/latest/process-event-data/accessing-geoevent-server-settings.htm"
            
          },
treedata.data["1336_h5"]  = { 
              "parent" : "root",
              "label" : "发送更新和提醒",
              "children" : ["1336_20","1336_29","1336_h6","1336_33"]
            }
            ,
treedata.data["1336_20"]  = {
            "parent" : "1336_h5",
            "label" : "输出连接器概览",
            "url" : "/zh-cn/geoevent/latest/process-event-data/overview-of-output-connectors.htm"
            
          },
treedata.data["1336_29"]  = {
            "parent" : "1336_h5",
            "label" : "可用输出连接器",
            "url" : "/zh-cn/geoevent/latest/process-event-data/output-connectors.htm"
            
          },
treedata.data["1336_h6"]  = { 
              "parent" : "1336_h5",
              "label" : "输出连接器",
              "children" : ["1336_87","1336_88","1336_101","1336_93","1336_102","1336_91","1336_99","1336_100","1336_96","1336_97","1336_98","1336_95","1336_86","1336_89","1336_90","1336_92","1336_94"]
            }
            ,
treedata.data["1336_87"]  = {
            "parent" : "1336_h6",
            "label" : "添加要素",
            "url" : "/zh-cn/geoevent/latest/process-event-data/add-a-feature.htm"
            
          },
treedata.data["1336_88"]  = {
            "parent" : "1336_h6",
            "label" : "向时空大数据存储中添加要素",
            "url" : "/zh-cn/geoevent/latest/process-event-data/add-a-feature-to-a-spatiotemporal-big-data-store.htm"
            
          },
treedata.data["1336_101"]  = {
            "parent" : "1336_h6",
            "label" : "将文本发布到 UDP 套接字",
            "url" : "/zh-cn/geoevent/latest/process-event-data/publish-text-to-a-udp-socket.htm"
            
          },
treedata.data["1336_93"]  = {
            "parent" : "1336_h6",
            "label" : "将 GeoJSON 推送到外部网站",
            "url" : "/zh-cn/geoevent/latest/process-event-data/push-geojson-to-an-external-website.htm"
            
          },
treedata.data["1336_102"]  = {
            "parent" : "1336_h6",
            "label" : "将 GeoJSON 推送到外部 WebSocket",
            "url" : "/zh-cn/geoevent/latest/process-event-data/push-geojson-to-an-external-websocket.htm"
            
          },
treedata.data["1336_91"]  = {
            "parent" : "1336_h6",
            "label" : "将 JSON 推送到外部网站",
            "url" : "/zh-cn/geoevent/latest/process-event-data/push-json-to-an-external-website.htm"
            
          },
treedata.data["1336_99"]  = {
            "parent" : "1336_h6",
            "label" : "将 JSON 推送到外部 WebSocket",
            "url" : "/zh-cn/geoevent/latest/process-event-data/push-json-to-an-external-websocket.htm"
            
          },
treedata.data["1336_100"]  = {
            "parent" : "1336_h6",
            "label" : "将文本推送到外部 TCP 套接字",
            "url" : "/zh-cn/geoevent/latest/process-event-data/push-text-to-an-external-tcp-socket.htm"
            
          },
treedata.data["1336_96"]  = {
            "parent" : "1336_h6",
            "label" : "发送文本消息",
            "url" : "/zh-cn/geoevent/latest/process-event-data/send-a-text-message.htm"
            
          },
treedata.data["1336_97"]  = {
            "parent" : "1336_h6",
            "label" : "发送电子邮件",
            "url" : "/zh-cn/geoevent/latest/process-event-data/send-an-email.htm"
            
          },
treedata.data["1336_98"]  = {
            "parent" : "1336_h6",
            "label" : "发送即时消息",
            "url" : "/zh-cn/geoevent/latest/process-event-data/send-an-instant-message.htm"
            
          },
treedata.data["1336_95"]  = {
            "parent" : "1336_h6",
            "label" : "将要素发送至流服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/send-features-to-a-stream-service.htm"
            
          },
treedata.data["1336_86"]  = {
            "parent" : "1336_h6",
            "label" : "更新要素",
            "url" : "/zh-cn/geoevent/latest/process-event-data/update-a-feature.htm"
            
          },
treedata.data["1336_89"]  = {
            "parent" : "1336_h6",
            "label" : "在时空大数据存储中更新要素",
            "url" : "/zh-cn/geoevent/latest/process-event-data/update-a-feature-in-a-spatiotemporal-big-data-store.htm"
            
          },
treedata.data["1336_90"]  = {
            "parent" : "1336_h6",
            "label" : "写入 CSV 文件",
            "url" : "/zh-cn/geoevent/latest/process-event-data/write-to-a-csv-file.htm"
            
          },
treedata.data["1336_92"]  = {
            "parent" : "1336_h6",
            "label" : "写入 GeoJSON 文件",
            "url" : "/zh-cn/geoevent/latest/process-event-data/write-to-a-geojson-file.htm"
            
          },
treedata.data["1336_94"]  = {
            "parent" : "1336_h6",
            "label" : "写入 JSON 文件",
            "url" : "/zh-cn/geoevent/latest/process-event-data/write-to-a-json-file.htm"
            
          },
treedata.data["1336_33"]  = {
            "parent" : "1336_h5",
            "label" : "流服务",
            "url" : "/zh-cn/geoevent/latest/process-event-data/stream-services.htm"
            
          }
        })()