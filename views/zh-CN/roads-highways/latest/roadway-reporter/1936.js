;(function (){
          treedata = (window.treedata || {});
          window.treedata.mode = 0;
          window.treedata.mapping = {'1936' : 'roads-highways/latest/roadway-reporter' };
          treedata.data = {};
          treedata.data["root"]  = {  
              "parent" : "",
              "children" : ["1936_h0","1936_h1","1936_h2","1936_h3","1936_h4","1936_h5"]
            },treedata.data["root_1936"] = treedata.data["root"],
treedata.data["1936_h0"]  = { 
              "parent" : "root",
              "label" : "Introduction",
              "children" : ["1936_12"]
            }
            ,
treedata.data["1936_12"]  = {
            "parent" : "1936_h0",
            "label" : "Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/roadway-reporter.htm"
            
          },
treedata.data["1936_h1"]  = { 
              "parent" : "root",
              "label" : "Deployment Guide",
              "children" : ["1936_6","1936_21","1936_4","1936_5","1936_23","1936_20"]
            }
            ,
treedata.data["1936_6"]  = {
            "parent" : "1936_h1",
            "label" : "Deployment for Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/deployment-for-roadway-reporter.htm"
            
          },
treedata.data["1936_21"]  = {
            "parent" : "1936_h1",
            "label" : "Authoring a web map for Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/authoring-a-web-map-for-roadway-reporter.htm"
            
          },
treedata.data["1936_4"]  = {
            "parent" : "1936_h1",
            "label" : "Publishing the Generate Report tool to a service",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/publishing-the-generate-report-tool-to-a-service.htm"
            
          },
treedata.data["1936_5"]  = {
            "parent" : "1936_h1",
            "label" : "Configuring Portal for ArcGIS or ArcGIS Online for Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/configuring-portal-for-arcgis-for-roadway-reporter.htm"
            
          },
treedata.data["1936_23"]  = {
            "parent" : "1936_h1",
            "label" : "Configuration properties for Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/configuration-properties-for-roadway-reporter.htm"
            
          },
treedata.data["1936_20"]  = {
            "parent" : "1936_h1",
            "label" : "Configuring security for Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/configuring-security-for-roadway-reporter.htm"
            
          },
treedata.data["1936_h2"]  = { 
              "parent" : "root",
              "label" : "Producing a mileage report",
              "children" : ["1936_3","1936_15","1936_16","1936_2","1936_14"]
            }
            ,
treedata.data["1936_3"]  = {
            "parent" : "1936_h2",
            "label" : "Mileage Reports in Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/mileage-reports-in-roadway-reporter.htm"
            
          },
treedata.data["1936_15"]  = {
            "parent" : "1936_h2",
            "label" : "Configuring a mileage report",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/configuring-a-mileage-report.htm"
            
          },
treedata.data["1936_16"]  = {
            "parent" : "1936_h2",
            "label" : "Adding mileage fields using unique values",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/adding-mileage-fields-using-unique-values.htm"
            
          },
treedata.data["1936_2"]  = {
            "parent" : "1936_h2",
            "label" : "Adding mileage fields using range values",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/adding-mileage-fields-using-range-values.htm"
            
          },
treedata.data["1936_14"]  = {
            "parent" : "1936_h2",
            "label" : "Adding mileage fields using a calculated field",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/adding-mileage-fields-using-a-calculated-field.htm"
            
          },
treedata.data["1936_h3"]  = { 
              "parent" : "root",
              "label" : "Producing a segment report",
              "children" : ["1936_7","1936_10"]
            }
            ,
treedata.data["1936_7"]  = {
            "parent" : "1936_h3",
            "label" : "Segment reports in Roadway Reporter",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/segment-reports-in-the-roadway-reporter.htm"
            
          },
treedata.data["1936_10"]  = {
            "parent" : "1936_h3",
            "label" : "Configuring a segment report",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/configuring-a-segment-report.htm"
            
          },
treedata.data["1936_h4"]  = { 
              "parent" : "root",
              "label" : "Producing a road log report",
              "children" : ["1936_8","1936_17"]
            }
            ,
treedata.data["1936_8"]  = {
            "parent" : "1936_h4",
            "label" : "What is a road log report?",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/what-is-a-road-log-report-.htm"
            
          },
treedata.data["1936_17"]  = {
            "parent" : "1936_h4",
            "label" : "Configuring a road log report",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/configuring-a-road-log-report.htm"
            
          },
treedata.data["1936_h5"]  = { 
              "parent" : "root",
              "label" : "Running, editing and sharing reports",
              "children" : ["1936_22","1936_11","1936_19","1936_18","1936_9","1936_13"]
            }
            ,
treedata.data["1936_22"]  = {
            "parent" : "1936_h5",
            "label" : "Formatting a report",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/formatting-a-report.htm"
            
          },
treedata.data["1936_11"]  = {
            "parent" : "1936_h5",
            "label" : "Running a report",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/running-a-report.htm"
            
          },
treedata.data["1936_19"]  = {
            "parent" : "1936_h5",
            "label" : "Saving a report configuration",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/saving-a-report-configuration.htm"
            
          },
treedata.data["1936_18"]  = {
            "parent" : "1936_h5",
            "label" : "Modifying report configurations",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/modifying-report-configurations.htm"
            
          },
treedata.data["1936_9"]  = {
            "parent" : "1936_h5",
            "label" : "Sharing report configurations",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/sharing-report-configurations.htm"
            
          },
treedata.data["1936_13"]  = {
            "parent" : "1936_h5",
            "label" : "Accessing report configurations shared by others",
            "url" : "/zh-cn/roads-highways/latest/roadway-reporter/accessing-report-configurations-shared-by-others.htm"
            
          }
        })()