;(function (){
          treedata = (window.treedata || {});
          window.treedata.mode = 0;
          window.treedata.mapping = {'2350' : 'server/latest/deploy/windows' };
          treedata.data = {};
          treedata.data["root"]  = {  
              "parent" : "",
              "children" : ["2350_38","2350_h0","2350_h1","2350_h2","2350_h3","2350_h5","2350_h9"]
            },treedata.data["root_2350"] = treedata.data["root"],
treedata.data["2350_38"]  = {
            "parent" : "root",
            "label" : "部署 ArcGIS Server",
            "url" : "/zh-cn/server/latest/deploy/windows/deploy-arcgis-server.htm"
            ,"homepage": true
          },
treedata.data["2350_h0"]  = { 
              "parent" : "root",
              "label" : "规划您的站点",
              "children" : ["2350_16","2350_57","2350_33","2350_5","2350_8"]
            }
            ,
treedata.data["2350_16"]  = {
            "parent" : "2350_h0",
            "label" : "预估和容纳用户",
            "url" : "/zh-cn/server/latest/deploy/windows/anticipating-and-accommodating-users.htm"
            
          },
treedata.data["2350_57"]  = {
            "parent" : "2350_h0",
            "label" : "系统架构的最佳做法",
            "url" : "/zh-cn/server/latest/deploy/windows/best-practices-for-system-architecture.htm"
            
          },
treedata.data["2350_33"]  = {
            "parent" : "2350_h0",
            "label" : "为 ArcGIS Server 选择 NAS 设备",
            "url" : "/zh-cn/server/latest/deploy/windows/choosing-a-nas-device.htm"
            
          },
treedata.data["2350_5"]  = {
            "parent" : "2350_h0",
            "label" : "ArcGIS Server 站点数据存储注意事项",
            "url" : "/zh-cn/server/latest/deploy/windows/data-storage-considerations-for-an-arcgis-server-site.htm"
            
          },
treedata.data["2350_8"]  = {
            "parent" : "2350_h0",
            "label" : "在虚拟化硬件上部署 ArcGIS Server",
            "url" : "/zh-cn/server/latest/deploy/windows/virtualization-and-arcgis-server.htm"
            
          },
treedata.data["2350_h1"]  = { 
              "parent" : "root",
              "label" : "了解",
              "children" : ["2350_7","2350_17","2350_30"]
            }
            ,
treedata.data["2350_7"]  = {
            "parent" : "2350_h1",
            "label" : "ArcGIS Server 使用的帐户",
            "url" : "/zh-cn/server/latest/deploy/windows/accounts-used-by-arcgis-server.htm"
            
          },
treedata.data["2350_17"]  = {
            "parent" : "2350_h1",
            "label" : "开发、过渡和生产环境中的 ArcGIS Server",
            "url" : "/zh-cn/server/latest/deploy/windows/arcgis-server-in-development-staging-and-production-environments.htm"
            
          },
treedata.data["2350_30"]  = {
            "parent" : "2350_h1",
            "label" : "ArcGIS URL 组成",
            "url" : "/zh-cn/server/latest/deploy/windows/components-of-arcgis-urls.htm"
            
          },
treedata.data["2350_h2"]  = { 
              "parent" : "root",
              "label" : "安装后配置",
              "children" : ["2350_27","2350_56","2350_25","2350_9","2350_26","2350_21","2350_22","2350_34","2350_35","2350_53"]
            }
            ,
treedata.data["2350_27"]  = {
            "parent" : "2350_h2",
            "label" : "创建站点",
            "url" : "/zh-cn/server/latest/deploy/windows/creating-a-new-site.htm"
            
          },
treedata.data["2350_56"]  = {
            "parent" : "2350_h2",
            "label" : "加入现有站点",
            "url" : "/zh-cn/server/latest/deploy/windows/join-a-machine-to-a-site.htm"
            
          },
treedata.data["2350_25"]  = {
            "parent" : "2350_h2",
            "label" : "将 ArcGIS Server 计算机添加到站点",
            "url" : "/zh-cn/server/latest/deploy/windows/adding-a-gis-server-to-a-site-in-manager.htm"
            
          },
treedata.data["2350_9"]  = {
            "parent" : "2350_h2",
            "label" : "从站点删除 ArcGIS Server 计算机",
            "url" : "/zh-cn/server/latest/deploy/windows/deleting-a-gis-server-from-a-site-in-manager.htm"
            
          },
treedata.data["2350_26"]  = {
            "parent" : "2350_h2",
            "label" : "删除站点",
            "url" : "/zh-cn/server/latest/deploy/windows/deleting-a-site.htm"
            
          },
treedata.data["2350_21"]  = {
            "parent" : "2350_h2",
            "label" : "配置云存储区域",
            "url" : "/zh-cn/server/latest/deploy/windows/configure-regions-for-cloud-stores.htm"
            
          },
treedata.data["2350_22"]  = {
            "parent" : "2350_h2",
            "label" : "使用 ArcGIS Server 配置转发代理服务器",
            "url" : "/zh-cn/server/latest/deploy/windows/using-a-forward-proxy-server-with-arcgis-server.htm"
            
          },
treedata.data["2350_34"]  = {
            "parent" : "2350_h2",
            "label" : "使用 ArcGIS Server 配置反向代理服务器",
            "url" : "/zh-cn/server/latest/deploy/windows/using-a-reverse-proxy-server-with-arcgis-server.htm"
            
          },
treedata.data["2350_35"]  = {
            "parent" : "2350_h2",
            "label" : "从 ArcGIS Desktop 连接到 ArcGIS Server。",
            "url" : "/zh-cn/server/latest/deploy/windows/connect-to-arcgis-server-from-arcgis-desktop.htm"
            
          },
treedata.data["2350_53"]  = {
            "parent" : "2350_h2",
            "label" : "在高级方案中配置 ArcGIS Server",
            "url" : "/zh-cn/server/latest/deploy/windows/multiple-nic-cards-dns-entries.htm"
            
          },
treedata.data["2350_h3"]  = { 
              "parent" : "root",
              "label" : "升级到最新版本",
              "children" : ["2350_11","2350_31","2350_52","2350_h4"]
            }
            ,
treedata.data["2350_11"]  = {
            "parent" : "2350_h3",
            "label" : "常见升级问题",
            "url" : "/zh-cn/server/latest/deploy/windows/existing-arcgis-server-users.htm"
            
          },
treedata.data["2350_31"]  = {
            "parent" : "2350_h3",
            "label" : "升级 ArcGIS Server",
            "url" : "/zh-cn/server/latest/deploy/windows/upgrade-arcgis-server.htm"
            
          },
treedata.data["2350_52"]  = {
            "parent" : "2350_h3",
            "label" : "升级多集群站点",
            "url" : "/zh-cn/server/latest/deploy/windows/upgrade-a-multiple-cluster-site.htm"
            
          },
treedata.data["2350_h4"]  = { 
              "parent" : "2350_h3",
              "label" : "从 ArcGIS Server 10.0 及更早版本升级",
              "children" : ["2350_29","2350_24","2350_13"]
            }
            ,
treedata.data["2350_29"]  = {
            "parent" : "2350_h4",
            "label" : "将 ArcGIS Server 10.0 升级至更高版本时可能出现的情况",
            "url" : "/zh-cn/server/latest/deploy/windows/what-to-expect-when-migrating-arcgis-server-10-0-to-later-versions.htm"
            
          },
treedata.data["2350_24"]  = {
            "parent" : "2350_h4",
            "label" : "将 ArcGIS Server 10.0 升级到更高版本",
            "url" : "/zh-cn/server/latest/deploy/windows/migrating-arcgis-server-10-0-to-later-versions.htm"
            
          },
treedata.data["2350_13"]  = {
            "parent" : "2350_h4",
            "label" : "从 ArcGIS Server 10.0 升级一览表",
            "url" : "/zh-cn/server/latest/deploy/windows/migration-checklist.htm"
            
          },
treedata.data["2350_h5"]  = { 
              "parent" : "root",
              "label" : "与 ArcGIS Enterprise 集成",
              "children" : ["2350_50","2350_h6","2350_h7","2350_h8","2350_45"]
            }
            ,
treedata.data["2350_50"]  = {
            "parent" : "2350_h5",
            "label" : "将您的服务器与 ArcGIS Enterprise 集成",
            "url" : "/zh-cn/server/latest/deploy/windows/about-using-your-server-with-portal-for-arcgis.htm"
            
          },
treedata.data["2350_h6"]  = { 
              "parent" : "2350_h5",
              "label" : "注册服务",
              "children" : ["2350_54","2350_43","2350_41"]
            }
            ,
treedata.data["2350_54"]  = {
            "parent" : "2350_h6",
            "label" : "向 ArcGIS Enterprise 门户添加 ArcGIS Server web 服务",
            "url" : "/zh-cn/server/latest/deploy/windows/add-web-services-to-portal.htm"
            
          },
treedata.data["2350_43"]  = {
            "parent" : "2350_h6",
            "label" : "连接到安全服务",
            "url" : "/zh-cn/server/latest/deploy/windows/connect-secured-services.htm"
            
          },
treedata.data["2350_41"]  = {
            "parent" : "2350_h6",
            "label" : "服务和门户项目",
            "url" : "/zh-cn/server/latest/deploy/windows/relationships-between-web-services-and-portal-items.htm"
            
          },
treedata.data["2350_h7"]  = { 
              "parent" : "2350_h5",
              "label" : "联合服务器",
              "children" : ["2350_42","2350_39","2350_48","2350_44","2350_51","2350_46"]
            }
            ,
treedata.data["2350_42"]  = {
            "parent" : "2350_h7",
            "label" : "联合 ArcGIS Server 站点与门户",
            "url" : "/zh-cn/server/latest/deploy/windows/federate-an-arcgis-server-site-with-your-portal.htm"
            
          },
treedata.data["2350_39"]  = {
            "parent" : "2350_h7",
            "label" : "从联合服务器中导入服务",
            "url" : "/zh-cn/server/latest/deploy/windows/importing-services-from-a-federated-server.htm"
            
          },
treedata.data["2350_48"]  = {
            "parent" : "2350_h7",
            "label" : "管理联合服务器",
            "url" : "/zh-cn/server/latest/deploy/windows/administer-a-federated-server.htm"
            
          },
treedata.data["2350_44"]  = {
            "parent" : "2350_h7",
            "label" : "访问联合服务器上的 Administrator Directory",
            "url" : "/zh-cn/server/latest/deploy/windows/accessing-the-administrator-directory-on-a-federated-server.htm"
            
          },
treedata.data["2350_51"]  = {
            "parent" : "2350_h7",
            "label" : "移除从联合服务器中导入的服务",
            "url" : "/zh-cn/server/latest/deploy/windows/removing-services-imported-from-a-federated-server.htm"
            
          },
treedata.data["2350_46"]  = {
            "parent" : "2350_h7",
            "label" : "从门户移除 ArcGIS Server 站点",
            "url" : "/zh-cn/server/latest/deploy/windows/removing-an-arcgis-server-site-from-your-portal.htm"
            
          },
treedata.data["2350_h8"]  = { 
              "parent" : "2350_h5",
              "label" : "指定托管服务器",
              "children" : ["2350_47","2350_40"]
            }
            ,
treedata.data["2350_47"]  = {
            "parent" : "2350_h8",
            "label" : "配置托管服务器",
            "url" : "/zh-cn/server/latest/deploy/windows/configure-hosting-server-for-portal.htm"
            
          },
treedata.data["2350_40"]  = {
            "parent" : "2350_h8",
            "label" : "从门户中移除托管服务器",
            "url" : "/zh-cn/server/latest/deploy/windows/removing-a-hosting-server-from-your-portal.htm"
            
          },
treedata.data["2350_45"]  = {
            "parent" : "2350_h5",
            "label" : "将 ArcGIS Server 服务目录连接至门户",
            "url" : "/zh-cn/server/latest/deploy/windows/connecting-the-arcgis-server-services-directory-to-your-portal.htm"
            
          },
treedata.data["2350_h9"]  = { 
              "parent" : "root",
              "label" : "独立站点的注意事项",
              "children" : ["2350_28","2350_h10","2350_h11","2350_37","2350_10","2350_h12"]
            }
            ,
treedata.data["2350_28"]  = {
            "parent" : "2350_h9",
            "label" : "部署方案",
            "url" : "/zh-cn/server/latest/deploy/windows/deployment-scenarios.htm"
            
          },
treedata.data["2350_h10"]  = { 
              "parent" : "2350_h9",
              "label" : "单机站点配置",
              "children" : ["2350_15","2350_2","2350_23","2350_18"]
            }
            ,
treedata.data["2350_15"]  = {
            "parent" : "2350_h10",
            "label" : "单机部署",
            "url" : "/zh-cn/server/latest/deploy/windows/single-machine-deployment.htm"
            
          },
treedata.data["2350_2"]  = {
            "parent" : "2350_h10",
            "label" : "使用反向代理服务器的单机部署",
            "url" : "/zh-cn/server/latest/deploy/windows/single-machine-deployment-with-reverse-proxy-server.htm"
            
          },
treedata.data["2350_23"]  = {
            "parent" : "2350_h10",
            "label" : "单机高可用性（主动 - 被动）部署",
            "url" : "/zh-cn/server/latest/deploy/windows/single-machine-high-availability-active-passive-deployment.htm"
            
          },
treedata.data["2350_18"]  = {
            "parent" : "2350_h10",
            "label" : "单机高可用性（主动 - 主动）部署",
            "url" : "/zh-cn/server/latest/deploy/windows/single-machine-high-availability-active-active-deployment.htm"
            
          },
treedata.data["2350_h11"]  = { 
              "parent" : "2350_h9",
              "label" : "多机站点配置",
              "children" : ["2350_3","2350_12","2350_36"]
            }
            ,
treedata.data["2350_3"]  = {
            "parent" : "2350_h11",
            "label" : "关于多机 ArcGIS Server 站点",
            "url" : "/zh-cn/server/latest/deploy/windows/about-adding-a-gis-server-to-a-site.htm"
            
          },
treedata.data["2350_12"]  = {
            "parent" : "2350_h11",
            "label" : "通过 ArcGIS Web Adaptor 实现多机部署",
            "url" : "/zh-cn/server/latest/deploy/windows/multiple-machine-deployment-with-arcgis-web-adaptor.htm"
            
          },
treedata.data["2350_36"]  = {
            "parent" : "2350_h11",
            "label" : "具有第三方负载均衡器的多机部署",
            "url" : "/zh-cn/server/latest/deploy/windows/multiple-machine-deployment-with-third-party-load-balancer.htm"
            
          },
treedata.data["2350_37"]  = {
            "parent" : "2350_h9",
            "label" : "配置单机部署",
            "url" : "/zh-cn/server/latest/deploy/windows/configuring-a-one-machine-deployment.htm"
            
          },
treedata.data["2350_10"]  = {
            "parent" : "2350_h9",
            "label" : "配置多机部署",
            "url" : "/zh-cn/server/latest/deploy/windows/configuring-a-multiple-machine-deployment.htm"
            
          },
treedata.data["2350_h12"]  = { 
              "parent" : "2350_h9",
              "label" : "为 ArcGIS Server 配置 Web Adaptor",
              "children" : ["2350_14","2350_55"]
            }
            ,
treedata.data["2350_14"]  = {
            "parent" : "2350_h12",
            "label" : "关于 ArcGIS Web Adaptor",
            "url" : "/zh-cn/server/latest/deploy/windows/about-the-arcgis-web-adaptor.htm"
            
          },
treedata.data["2350_55"]  = {
            "parent" : "2350_h12",
            "label" : "配置 ArcGIS Web Adaptor",
            "url" : "/zh-cn/server/latest/deploy/windows/arcgis-web-adaptor-link.htm"
            
          }
        })()