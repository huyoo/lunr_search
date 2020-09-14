;(function (){
          treedata = (window.treedata || {});
          window.treedata.mode = 0;
          window.treedata.mapping = {'2503' : 'image/latest/raster-analytics' };
          treedata.data = {};
          treedata.data["root"]  = {  
              "parent" : "",
              "children" : ["2503_h0","2503_h1"]
            },treedata.data["root_2503"] = treedata.data["root"],
treedata.data["2503_h0"]  = { 
              "parent" : "root",
              "label" : "配置类型",
              "children" : ["2503_4","2503_5","2503_6"]
            }
            ,
treedata.data["2503_4"]  = {
            "parent" : "2503_h0",
            "label" : "配置栅格分析部署",
            "url" : "/zh-cn/image/latest/raster-analytics/configure-and-deploy-arcgis-enterprise-for-raster-analytics.htm"
            
          },
treedata.data["2503_5"]  = {
            "parent" : "2503_h0",
            "label" : "配置栅格分析以供深度学习使用",
            "url" : "/zh-cn/image/latest/raster-analytics/configure-and-deploy-arcgis-enterprise-for-deep-learning-raster-analytics.htm"
            
          },
treedata.data["2503_6"]  = {
            "parent" : "2503_h0",
            "label" : "设置 Ortho Maker",
            "url" : "/zh-cn/image/latest/raster-analytics/ortho-maker-setup-and-configuration.htm"
            
          },
treedata.data["2503_h1"]  = { 
              "parent" : "root",
              "label" : "使用栅格分析工具",
              "children" : ["2503_7","2503_2"]
            }
            ,
treedata.data["2503_7"]  = {
            "parent" : "2503_h1",
            "label" : "ArcGIS 中的栅格分析工具",
            "url" : "/zh-cn/image/latest/raster-analytics/raster-analysis-tools-overview.htm"
            
          },
treedata.data["2503_2"]  = {
            "parent" : "2503_h1",
            "label" : "执行栅格分析",
            "url" : "/zh-cn/image/latest/raster-analytics/perform-raster-analysis.htm"
            
          }
        })()