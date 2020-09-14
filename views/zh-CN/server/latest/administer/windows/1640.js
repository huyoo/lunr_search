;(function (){
          treedata = (window.treedata || {});
          window.treedata.mode = 0;
          window.treedata.mapping = {'1640' : 'server/latest/administer/windows' };
          treedata.data = {};
          treedata.data["root"]  = {  
              "parent" : "",
              "children" : ["1640_h0","1640_h1","1640_h6","1640_h11","1640_h16","1640_h20"]
            },treedata.data["root_1640"] = treedata.data["root"],
treedata.data["1640_h0"]  = { 
              "parent" : "root",
              "label" : "管理 ArcGIS Server",
              "children" : ["1640_238","1640_48","1640_118"]
            }
            ,
treedata.data["1640_238"]  = {
            "parent" : "1640_h0",
            "label" : "管理 ArcGIS Server",
            "url" : "/zh-cn/server/latest/administer/windows/administer-arcgis-server.htm"
            
          },
treedata.data["1640_48"]  = {
            "parent" : "1640_h0",
            "label" : "ArcGIS Server 站点内部",
            "url" : "/zh-cn/server/latest/administer/windows/inside-an-arcgis-server-site.htm"
            
          },
treedata.data["1640_118"]  = {
            "parent" : "1640_h0",
            "label" : "登录 Manager",
            "url" : "/zh-cn/server/latest/administer/windows/log-in-to-manager.htm"
            
          },
treedata.data["1640_h1"]  = { 
              "parent" : "root",
              "label" : "监控",
              "children" : ["1640_h2","1640_h3","1640_h5","1640_234"]
            }
            ,
treedata.data["1640_h2"]  = { 
              "parent" : "1640_h1",
              "label" : "错误报告",
              "children" : ["1640_74","1640_19"]
            }
            ,
treedata.data["1640_74"]  = {
            "parent" : "1640_h2",
            "label" : "提交错误报告",
            "url" : "/zh-cn/server/latest/administer/windows/submitting-error-reports.htm"
            
          },
treedata.data["1640_19"]  = {
            "parent" : "1640_h2",
            "label" : "指定要保存的错误报告数",
            "url" : "/zh-cn/server/latest/administer/windows/specifying-the-number-of-error-reports-to-save.htm"
            
          },
treedata.data["1640_h3"]  = { 
              "parent" : "1640_h1",
              "label" : "日志",
              "children" : ["1640_56","1640_38","1640_236","1640_228","1640_h4"]
            }
            ,
treedata.data["1640_56"]  = {
            "parent" : "1640_h3",
            "label" : "服务器日志",
            "url" : "/zh-cn/server/latest/administer/windows/about-server-logs.htm"
            
          },
treedata.data["1640_38"]  = {
            "parent" : "1640_h3",
            "label" : "使用服务器日志",
            "url" : "/zh-cn/server/latest/administer/windows/work-with-server-logs.htm"
            
          },
treedata.data["1640_236"]  = {
            "parent" : "1640_h3",
            "label" : "指定服务器日志设置",
            "url" : "/zh-cn/server/latest/administer/windows/specify-server-log-settings.htm"
            
          },
treedata.data["1640_228"]  = {
            "parent" : "1640_h3",
            "label" : "ArcGIS Server 中的磁盘空间监控",
            "url" : "/zh-cn/server/latest/administer/windows/disk-space-monitoring.htm"
            
          },
treedata.data["1640_h4"]  = { 
              "parent" : "1640_h3",
              "label" : "日志编码",
              "children" : ["1640_89","1640_193","1640_97","1640_182","1640_90"]
            }
            ,
treedata.data["1640_89"]  = {
            "parent" : "1640_h4",
            "label" : "日志编码概述",
            "url" : "/zh-cn/server/latest/administer/windows/log-codes-overview.htm"
            
          },
treedata.data["1640_193"]  = {
            "parent" : "1640_h4",
            "label" : "ArcObjects 日志编码",
            "url" : "/zh-cn/server/latest/administer/windows/arcobjects-log-codes.htm"
            
          },
treedata.data["1640_97"]  = {
            "parent" : "1640_h4",
            "label" : "服务器日志核心编码",
            "url" : "/zh-cn/server/latest/administer/windows/core-server-log-codes.htm"
            
          },
treedata.data["1640_182"]  = {
            "parent" : "1640_h4",
            "label" : "地理处理服务日志编码",
            "url" : "/zh-cn/server/latest/administer/windows/geoprocessing-service-log-codes.htm"
            
          },
treedata.data["1640_90"]  = {
            "parent" : "1640_h4",
            "label" : "地图服务日志编码",
            "url" : "/zh-cn/server/latest/administer/windows/map-service-log-codes.htm"
            
          },
treedata.data["1640_h5"]  = { 
              "parent" : "1640_h1",
              "label" : "服务器统计数据",
              "children" : ["1640_107","1640_49"]
            }
            ,
treedata.data["1640_107"]  = {
            "parent" : "1640_h5",
            "label" : "关于服务器统计数据",
            "url" : "/zh-cn/server/latest/administer/windows/about-server-statistics.htm"
            
          },
treedata.data["1640_49"]  = {
            "parent" : "1640_h5",
            "label" : "使用服务器统计数据",
            "url" : "/zh-cn/server/latest/administer/windows/working-with-server-statistics.htm"
            
          },
treedata.data["1640_234"]  = {
            "parent" : "1640_h1",
            "label" : "在 Manager 中使用当前的地理处理作业",
            "url" : "/zh-cn/server/latest/administer/windows/work-with-current-geoprocessing-jobs-in-manager.htm"
            
          },
treedata.data["1640_h6"]  = { 
              "parent" : "root",
              "label" : "管理",
              "children" : ["1640_h7","1640_h8","1640_h9","1640_h10","1640_172","1640_88","1640_76","1640_208","1640_108","1640_86","1640_16","1640_99"]
            }
            ,
treedata.data["1640_h7"]  = { 
              "parent" : "1640_h6",
              "label" : "服务器目录",
              "children" : ["1640_123","1640_199","1640_136","1640_239"]
            }
            ,
treedata.data["1640_123"]  = {
            "parent" : "1640_h7",
            "label" : "服务器目录",
            "url" : "/zh-cn/server/latest/administer/windows/about-server-directories.htm"
            
          },
treedata.data["1640_199"]  = {
            "parent" : "1640_h7",
            "label" : "在 Server Manager 中添加服务器目录",
            "url" : "/zh-cn/server/latest/administer/windows/adding-a-server-directory-in-manager.htm"
            
          },
treedata.data["1640_136"]  = {
            "parent" : "1640_h7",
            "label" : "在 Manager 中编辑服务器目录",
            "url" : "/zh-cn/server/latest/administer/windows/editing-a-server-directory-in-manager.htm"
            
          },
treedata.data["1640_239"]  = {
            "parent" : "1640_h7",
            "label" : "将地理处理服务的作业目录移动到 Microsoft Azure 存储",
            "url" : "/zh-cn/server/latest/administer/windows/use-cloud-storage-for-a-gp-service-jobs-directory.htm"
            
          },
treedata.data["1640_h8"]  = { 
              "parent" : "1640_h6",
              "label" : "服务",
              "children" : ["1640_222","1640_189","1640_237","1640_35","1640_103","1640_2","1640_176","1640_119","1640_100","1640_55","1640_106","1640_43","1640_235"]
            }
            ,
treedata.data["1640_222"]  = {
            "parent" : "1640_h8",
            "label" : "更改地理处理服务和服务扩展发布权限",
            "url" : "/zh-cn/server/latest/administer/windows/change-geoprocessing-service-and-service-extension-publishing-privileges.htm"
            
          },
treedata.data["1640_189"]  = {
            "parent" : "1640_h8",
            "label" : "更改默认服务定义过渡文件夹",
            "url" : "/zh-cn/server/latest/administer/windows/changing-the-default-service-definition-staging-folder-in-arcgis-for-desktop.htm"
            
          },
treedata.data["1640_237"]  = {
            "parent" : "1640_h8",
            "label" : "配置服务实例设置",
            "url" : "/zh-cn/server/latest/administer/windows/configure-service-instance-settings.htm"
            
          },
treedata.data["1640_35"]  = {
            "parent" : "1640_h8",
            "label" : "禁用服务目录",
            "url" : "/zh-cn/server/latest/administer/windows/disabling-the-services-directory.htm"
            
          },
treedata.data["1640_103"]  = {
            "parent" : "1640_h8",
            "label" : "在发布到服务器时禁用自动数据复制",
            "url" : "/zh-cn/server/latest/administer/windows/disabling-automatic-data-copying-when-publishing-to-the-server.htm"
            
          },
treedata.data["1640_2"]  = {
            "parent" : "1640_h8",
            "label" : "禁用管理员目录的浏览器缓存",
            "url" : "/zh-cn/server/latest/administer/windows/disable-browser-caching-of-the-administrator-directory.htm"
            
          },
treedata.data["1640_176"]  = {
            "parent" : "1640_h8",
            "label" : "在地图服务中禁用方案锁定",
            "url" : "/zh-cn/server/latest/administer/windows/disabling-schema-locking-on-a-map-service.htm"
            
          },
treedata.data["1640_119"]  = {
            "parent" : "1640_h8",
            "label" : "显示服务类型",
            "url" : "/zh-cn/server/latest/administer/windows/displaying-the-types-of-services-that-can-be-hosted.htm"
            
          },
treedata.data["1640_100"]  = {
            "parent" : "1640_h8",
            "label" : "在 Manager 中编辑服务图库设置",
            "url" : "/zh-cn/server/latest/administer/windows/editing-service-gallery-settings-in-manager.htm"
            
          },
treedata.data["1640_55"]  = {
            "parent" : "1640_h8",
            "label" : "隐藏 ArcGIS Server 服务目录中的服务",
            "url" : "/zh-cn/server/latest/administer/windows/hiding-a-service-in-the-arcgis-server-services-directory.htm"
            
          },
treedata.data["1640_106"]  = {
            "parent" : "1640_h8",
            "label" : "重新创建几何服务",
            "url" : "/zh-cn/server/latest/administer/windows/re-creating-the-geometry-service.htm"
            
          },
treedata.data["1640_43"]  = {
            "parent" : "1640_h8",
            "label" : "在 Manager 中搜索服务",
            "url" : "/zh-cn/server/latest/administer/windows/searching-for-services-in-manager.htm"
            
          },
treedata.data["1640_235"]  = {
            "parent" : "1640_h8",
            "label" : "使用最佳做法调整服务",
            "url" : "/zh-cn/server/latest/administer/windows/tuning-your-arcgis-server-site.htm"
            
          },
treedata.data["1640_h9"]  = { 
              "parent" : "1640_h6",
              "label" : "站点模式",
              "children" : ["1640_217","1640_214","1640_216","1640_215","1640_218"]
            }
            ,
treedata.data["1640_217"]  = {
            "parent" : "1640_h9",
            "label" : "ArcGIS Server 站点模式",
            "url" : "/zh-cn/server/latest/administer/windows/about-arcgis-server-site-mode.htm"
            
          },
treedata.data["1640_214"]  = {
            "parent" : "1640_h9",
            "label" : "管理操作和 ArcGIS Server 站点模式",
            "url" : "/zh-cn/server/latest/administer/windows/administrative-operations-and-arcgis-server-site-mode.htm"
            
          },
treedata.data["1640_216"]  = {
            "parent" : "1640_h9",
            "label" : "更改 ArcGIS Server 站点模式",
            "url" : "/zh-cn/server/latest/administer/windows/change-the-arcgis-server-site-mode-in-manager.htm"
            
          },
treedata.data["1640_215"]  = {
            "parent" : "1640_h9",
            "label" : "高级站点模式配置",
            "url" : "/zh-cn/server/latest/administer/windows/advanced-site-mode-configuration.htm"
            
          },
treedata.data["1640_218"]  = {
            "parent" : "1640_h9",
            "label" : "恢复站点",
            "url" : "/zh-cn/server/latest/administer/windows/recover-a-site.htm"
            
          },
treedata.data["1640_h10"]  = { 
              "parent" : "1640_h6",
              "label" : "令牌",
              "children" : ["1640_46","1640_45","1640_116","1640_126","1640_84"]
            }
            ,
treedata.data["1640_46"]  = {
            "parent" : "1640_h10",
            "label" : "关于 ArcGIS 令牌",
            "url" : "/zh-cn/server/latest/administer/windows/about-arcgis-tokens.htm"
            
          },
treedata.data["1640_45"]  = {
            "parent" : "1640_h10",
            "label" : "在 Manager 中编辑令牌设置",
            "url" : "/zh-cn/server/latest/administer/windows/editing-token-settings-in-manager.htm"
            
          },
treedata.data["1640_116"]  = {
            "parent" : "1640_h10",
            "label" : "访问受 ArcGIS 令牌保护的 Web 服务",
            "url" : "/zh-cn/server/latest/administer/windows/accessing-arcgis-token-secured-web-services.htm"
            
          },
treedata.data["1640_126"]  = {
            "parent" : "1640_h10",
            "label" : "获取 ArcGIS Server 令牌",
            "url" : "/zh-cn/server/latest/administer/windows/acquiring-arcgis-tokens.htm"
            
          },
treedata.data["1640_84"]  = {
            "parent" : "1640_h10",
            "label" : "启用基于 HTTP GET 请求的令牌获取",
            "url" : "/zh-cn/server/latest/administer/windows/enable-token-acquisition-through-an-http-get-request.htm"
            
          },
treedata.data["1640_172"]  = {
            "parent" : "1640_h6",
            "label" : "关于 ArcGIS Server 管理员目录",
            "url" : "/zh-cn/server/latest/administer/windows/about-the-arcgis-server-administrator-directory.htm"
            
          },
treedata.data["1640_88"]  = {
            "parent" : "1640_h6",
            "label" : "备份和还原 ArcGIS Server 站点配置",
            "url" : "/zh-cn/server/latest/administer/windows/back-up-and-restore-your-arcgis-server-site-configuration.htm"
            
          },
treedata.data["1640_76"]  = {
            "parent" : "1640_h6",
            "label" : "检查并安装软件修补程序和更新",
            "url" : "/zh-cn/server/latest/administer/windows/check-for-software-patches-and-updates.htm"
            
          },
treedata.data["1640_208"]  = {
            "parent" : "1640_h6",
            "label" : "常见问题及解决方案",
            "url" : "/zh-cn/server/latest/administer/windows/common-problems-and-solutions.htm"
            
          },
treedata.data["1640_108"]  = {
            "parent" : "1640_h6",
            "label" : "指定配置存储位置",
            "url" : "/zh-cn/server/latest/administer/windows/specifying-the-configuration-store-location-in-manager.htm"
            
          },
treedata.data["1640_86"]  = {
            "parent" : "1640_h6",
            "label" : "在 Manager 中查看计算机信息",
            "url" : "/zh-cn/server/latest/administer/windows/viewing-machine-information-in-manager.htm"
            
          },
treedata.data["1640_16"]  = {
            "parent" : "1640_h6",
            "label" : "在 Manager 中查看软件授权元数据",
            "url" : "/zh-cn/server/latest/administer/windows/viewing-software-authorization-metadata-in-manager.htm"
            
          },
treedata.data["1640_99"]  = {
            "parent" : "1640_h6",
            "label" : "在 Manager 中查看 Web Adaptor 属性",
            "url" : "/zh-cn/server/latest/administer/windows/viewing-web-adaptor-properties-in-manager.htm"
            
          },
treedata.data["1640_h11"]  = { 
              "parent" : "root",
              "label" : "安全",
              "children" : ["1640_183","1640_42","1640_24","1640_h12","1640_h13","1640_h14","1640_h15"]
            }
            ,
treedata.data["1640_183"]  = {
            "parent" : "1640_h11",
            "label" : "保护 ArcGIS Server 站点安全性",
            "url" : "/zh-cn/server/latest/administer/windows/securing-your-arcgis-server-site.htm"
            
          },
treedata.data["1640_42"]  = {
            "parent" : "1640_h11",
            "label" : "控制 ArcGIS Server 中的访问",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-arcgis-server-security.htm"
            
          },
treedata.data["1640_24"]  = {
            "parent" : "1640_h11",
            "label" : "ArcGIS Server 帐户",
            "url" : "/zh-cn/server/latest/administer/windows/the-arcgis-server-account.htm"
            
          },
treedata.data["1640_h12"]  = { 
              "parent" : "1640_h11",
              "label" : "保护服务器环境",
              "children" : ["1640_18","1640_154","1640_33","1640_198","1640_61","1640_219"]
            }
            ,
treedata.data["1640_18"]  = {
            "parent" : "1640_h12",
            "label" : "安全性最佳做法",
            "url" : "/zh-cn/server/latest/administer/windows/best-practices-for-configuring-a-secure-environment.htm"
            
          },
treedata.data["1640_154"]  = {
            "parent" : "1640_h12",
            "label" : "强制执行标准化 SQL 查询",
            "url" : "/zh-cn/server/latest/administer/windows/about-standardized-queries.htm"
            
          },
treedata.data["1640_33"]  = {
            "parent" : "1640_h12",
            "label" : "防火墙和 ArcGIS Server",
            "url" : "/zh-cn/server/latest/administer/windows/firewalls-and-arcgis-server.htm"
            
          },
treedata.data["1640_198"]  = {
            "parent" : "1640_h12",
            "label" : "使数据可供 ArcGIS Server 访问",
            "url" : "/zh-cn/server/latest/administer/windows/making-your-data-accessible-to-arcgis-server.htm"
            
          },
treedata.data["1640_61"]  = {
            "parent" : "1640_h12",
            "label" : "ArcGIS Server 使用的端口",
            "url" : "/zh-cn/server/latest/administer/windows/ports-used-by-arcgis-server.htm"
            
          },
treedata.data["1640_219"]  = {
            "parent" : "1640_h12",
            "label" : "扫描 ArcGIS Server 以获得安全性最佳做法",
            "url" : "/zh-cn/server/latest/administer/windows/scan-arcgis-server-for-security-best-practices.htm"
            
          },
treedata.data["1640_h13"]  = { 
              "parent" : "1640_h11",
              "label" : "保护 web 流量",
              "children" : ["1640_66","1640_229","1640_77","1640_221","1640_22"]
            }
            ,
treedata.data["1640_66"]  = {
            "parent" : "1640_h13",
            "label" : "保护 ArcGIS Server 通信安全",
            "url" : "/zh-cn/server/latest/administer/windows/secure-arcgis-server-communication.htm"
            
          },
treedata.data["1640_229"]  = {
            "parent" : "1640_h13",
            "label" : "强制使用严格的 HTTPS 通信",
            "url" : "/zh-cn/server/latest/administer/windows/enforce-strict-https-communication.htm"
            
          },
treedata.data["1640_77"]  = {
            "parent" : "1640_h13",
            "label" : "限制跨域请求 ArcGIS Server",
            "url" : "/zh-cn/server/latest/administer/windows/restricting-cross-domain-requests-to-arcgis-server.htm"
            
          },
treedata.data["1640_221"]  = {
            "parent" : "1640_h13",
            "label" : "限制 TLS 协议和密码套件",
            "url" : "/zh-cn/server/latest/administer/windows/restrict-arcgis-server-ssl-protocols-and-cipher-suites.htm"
            
          },
treedata.data["1640_22"]  = {
            "parent" : "1640_h13",
            "label" : "支持公共服务和私有服务混合使用",
            "url" : "/zh-cn/server/latest/administer/windows/supporting-a-mix-of-public-and-private-services.htm"
            
          },
treedata.data["1640_h14"]  = { 
              "parent" : "1640_h11",
              "label" : "配置服务器证书",
              "children" : ["1640_47","1640_241","1640_113","1640_164","1640_170","1640_181","1640_71","1640_78","1640_230"]
            }
            ,
treedata.data["1640_47"]  = {
            "parent" : "1640_h14",
            "label" : "服务器证书",
            "url" : "/zh-cn/server/latest/administer/windows/introduction-to-https.htm"
            
          },
treedata.data["1640_241"]  = {
            "parent" : "1640_h14",
            "label" : "适用于服务器证书的最佳做法",
            "url" : "/zh-cn/server/latest/administer/windows/best-practices-for-server-certificates.htm"
            
          },
treedata.data["1640_113"]  = {
            "parent" : "1640_h14",
            "label" : "禁止自签名证书的警告",
            "url" : "/zh-cn/server/latest/administer/windows/suppress-warnings-from-self-signed-certificates.htm"
            
          },
treedata.data["1640_164"]  = {
            "parent" : "1640_h14",
            "label" : "使用默认自签名证书配置 ArcGIS Server",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-https-only-using-the-default-self-signed-certificate.htm"
            
          },
treedata.data["1640_170"]  = {
            "parent" : "1640_h14",
            "label" : "使用自签名证书配置 ArcGIS Server",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-https-using-a-self-signed-certificate.htm"
            
          },
treedata.data["1640_181"]  = {
            "parent" : "1640_h14",
            "label" : "使用新 CA 签名证书配置 ArcGIS Server",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-https-using-a-new-ca-signed-certificate.htm"
            
          },
treedata.data["1640_71"]  = {
            "parent" : "1640_h14",
            "label" : "使用现有的 CA 签名证书配置 ArcGIS Server",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-https-using-an-existing-ssl-certificate.htm"
            
          },
treedata.data["1640_78"]  = {
            "parent" : "1640_h14",
            "label" : "在通过 ArcGIS Web Adaptor 访问 ArcGIS Server 时，请为其配置 CA 签名证书",
            "url" : "/zh-cn/server/latest/administer/windows/enable-https-on-arcgis-server-when-accessed-through-arcgis-web-adaptor.htm"
            
          },
treedata.data["1640_230"]  = {
            "parent" : "1640_h14",
            "label" : "创建域证书",
            "url" : "/zh-cn/server/latest/administer/windows/create-a-domain-certificate.htm"
            
          },
treedata.data["1640_h15"]  = { 
              "parent" : "1640_h11",
              "label" : "复杂情况",
              "children" : ["1640_165","1640_233","1640_212"]
            }
            ,
treedata.data["1640_165"]  = {
            "parent" : "1640_h15",
            "label" : "禁用端口 6443 上对 ArcGIS Server 的管理访问权限",
            "url" : "/zh-cn/server/latest/administer/windows/disabling-administrative-access-to-arcgis-server-on-port-6080.htm"
            
          },
treedata.data["1640_233"]  = {
            "parent" : "1640_h15",
            "label" : "禁用反嗅探标头",
            "url" : "/zh-cn/server/latest/administer/windows/disable-the-no-sniff-header.htm"
            
          },
treedata.data["1640_212"]  = {
            "parent" : "1640_h15",
            "label" : "排除请求中的 MIME 类型",
            "url" : "/zh-cn/server/latest/administer/windows/excluding-mime-types-in-requests.htm"
            
          },
treedata.data["1640_h16"]  = { 
              "parent" : "root",
              "label" : "自动",
              "children" : ["1640_202","1640_h17","1640_h18","1640_h19"]
            }
            ,
treedata.data["1640_202"]  = {
            "parent" : "1640_h16",
            "label" : "编写 ArcGIS Server 管理脚本的基础知识",
            "url" : "/zh-cn/server/latest/administer/windows/scripting-arcgis-server-administration.htm"
            
          },
treedata.data["1640_h17"]  = { 
              "parent" : "1640_h16",
              "label" : "使用 ArcGIS REST API 编写脚本",
              "children" : ["1640_91","1640_149","1640_10","1640_186","1640_197","1640_196","1640_21","1640_93","1640_11","1640_195","1640_201","1640_137","1640_192","1640_41","1640_205","1640_54","1640_115","1640_72","1640_95","1640_139"]
            }
            ,
treedata.data["1640_91"]  = {
            "parent" : "1640_h17",
            "label" : "使用 ArcGIS REST API 编写脚本",
            "url" : "/zh-cn/server/latest/administer/windows/scripting-with-the-arcgis-rest-api.htm"
            
          },
treedata.data["1640_149"]  = {
            "parent" : "1640_h17",
            "label" : "脚本语言和 ArcGIS REST API",
            "url" : "/zh-cn/server/latest/administer/windows/scripting-languages-and-the-arcgis-rest-api.htm"
            
          },
treedata.data["1640_10"]  = {
            "parent" : "1640_h17",
            "label" : "示例：创建站点",
            "url" : "/zh-cn/server/latest/administer/windows/example-create-a-site.htm"
            
          },
treedata.data["1640_186"]  = {
            "parent" : "1640_h17",
            "label" : "示例：将计算机加入站点中",
            "url" : "/zh-cn/server/latest/administer/windows/example-join-a-machine-to-a-site.htm"
            
          },
treedata.data["1640_197"]  = {
            "parent" : "1640_h17",
            "label" : "示例：启动几何服务",
            "url" : "/zh-cn/server/latest/administer/windows/example-start-the-geometry-service.htm"
            
          },
treedata.data["1640_196"]  = {
            "parent" : "1640_h17",
            "label" : "示例：停止或启动文件夹中的所有服务",
            "url" : "/zh-cn/server/latest/administer/windows/example-stop-or-start-all-services-in-a-folder.htm"
            
          },
treedata.data["1640_21"]  = {
            "parent" : "1640_h17",
            "label" : "示例：检查文件夹中是否存在停止的服务",
            "url" : "/zh-cn/server/latest/administer/windows/example-check-a-folder-for-stopped-services.htm"
            
          },
treedata.data["1640_93"]  = {
            "parent" : "1640_h17",
            "label" : "示例：将所有服务的属性写入 CSV 文件",
            "url" : "/zh-cn/server/latest/administer/windows/example-write-properties-of-all-services-to-a-csv-file.htm"
            
          },
treedata.data["1640_11"]  = {
            "parent" : "1640_h17",
            "label" : "示例：编辑服务属性",
            "url" : "/zh-cn/server/latest/administer/windows/example-edit-service-properties.htm"
            
          },
treedata.data["1640_195"]  = {
            "parent" : "1640_h17",
            "label" : "示例：使用详细参数发布服务",
            "url" : "/zh-cn/server/latest/administer/windows/example-publish-a-service-with-detailed-parameters.htm"
            
          },
treedata.data["1640_201"]  = {
            "parent" : "1640_h17",
            "label" : "示例：查询 ArcGIS Server 日志",
            "url" : "/zh-cn/server/latest/administer/windows/example-query-the-arcgis-server-logs.htm"
            
          },
treedata.data["1640_137"]  = {
            "parent" : "1640_h17",
            "label" : "示例：从 ArcGIS Server 日志中获取地图服务统计数据",
            "url" : "/zh-cn/server/latest/administer/windows/example-derive-map-service-statistics-from-the-arcgis-server-logs.htm"
            
          },
treedata.data["1640_192"]  = {
            "parent" : "1640_h17",
            "label" : "示例：将请求的地图范围写入要素类",
            "url" : "/zh-cn/server/latest/administer/windows/example-write-requested-map-extents-to-a-feature-class.htm"
            
          },
treedata.data["1640_41"]  = {
            "parent" : "1640_h17",
            "label" : "示例：根据 CSV 文件创建用户和角色",
            "url" : "/zh-cn/server/latest/administer/windows/example-create-users-and-roles-from-a-csv-file.htm"
            
          },
treedata.data["1640_205"]  = {
            "parent" : "1640_h17",
            "label" : "示例：根据两个文本文件创建用户和角色",
            "url" : "/zh-cn/server/latest/administer/windows/example-create-users-and-roles-from-two-text-files.htm"
            
          },
treedata.data["1640_54"]  = {
            "parent" : "1640_h17",
            "label" : "示例：对服务应用权限",
            "url" : "/zh-cn/server/latest/administer/windows/example-apply-permissions-to-a-service.htm"
            
          },
treedata.data["1640_115"]  = {
            "parent" : "1640_h17",
            "label" : "示例：通过文本文件应用服务权限",
            "url" : "/zh-cn/server/latest/administer/windows/example-apply-service-permissions-from-a-text-file.htm"
            
          },
treedata.data["1640_72"]  = {
            "parent" : "1640_h17",
            "label" : "示例：防止在发布时复制数据",
            "url" : "/zh-cn/server/latest/administer/windows/example-prevent-data-copying-at-publish-time.htm"
            
          },
treedata.data["1640_95"]  = {
            "parent" : "1640_h17",
            "label" : "示例：创建所有服务请求的报告",
            "url" : "/zh-cn/server/latest/administer/windows/example-create-a-report-of-all-service-requests.htm"
            
          },
treedata.data["1640_139"]  = {
            "parent" : "1640_h17",
            "label" : "示例：将服务统计数据导出至文件",
            "url" : "/zh-cn/server/latest/administer/windows/example-export-service-statistics-to-a-file.htm"
            
          },
treedata.data["1640_h18"]  = { 
              "parent" : "1640_h16",
              "label" : "使用 ArcPy 编写管理和数据管理脚本",
              "children" : ["1640_40","1640_152","1640_128","1640_65","1640_53","1640_167","1640_122","1640_129"]
            }
            ,
treedata.data["1640_40"]  = {
            "parent" : "1640_h18",
            "label" : "通过 ArcPy 编写服务发布的脚本",
            "url" : "/zh-cn/server/latest/administer/windows/scripting-service-publishing-with-arcpy.htm"
            
          },
treedata.data["1640_152"]  = {
            "parent" : "1640_h18",
            "label" : "示例：使用服务定义发布各种服务类型",
            "url" : "/zh-cn/server/latest/administer/windows/example-publish-various-service-types-using-service-definitions.htm"
            
          },
treedata.data["1640_128"]  = {
            "parent" : "1640_h18",
            "label" : "示例：发布文本文件中列出的服务定义",
            "url" : "/zh-cn/server/latest/administer/windows/example-publish-service-definitions-listed-in-a-text-file.htm"
            
          },
treedata.data["1640_65"]  = {
            "parent" : "1640_h18",
            "label" : "示例：从地图文档 (MXD) 发布地图服务",
            "url" : "/zh-cn/server/latest/administer/windows/example-publish-a-map-service-from-a-map-document-mxd-.htm"
            
          },
treedata.data["1640_53"]  = {
            "parent" : "1640_h18",
            "label" : "示例：从模型结果发布地理处理服务",
            "url" : "/zh-cn/server/latest/administer/windows/example-publish-a-geoprocessing-service-from-a-model-result.htm"
            
          },
treedata.data["1640_167"]  = {
            "parent" : "1640_h18",
            "label" : "示例：从影像文件夹发布影像服务",
            "url" : "/zh-cn/server/latest/administer/windows/example-publish-an-image-service-from-a-folder-of-images.htm"
            
          },
treedata.data["1640_122"]  = {
            "parent" : "1640_h18",
            "label" : "示例：在发布时注册数据文件夹",
            "url" : "/zh-cn/server/latest/administer/windows/example-register-a-data-folder-at-publish-time.htm"
            
          },
treedata.data["1640_129"]  = {
            "parent" : "1640_h18",
            "label" : "示例：注册文本文件中列出的文件夹和数据库",
            "url" : "/zh-cn/server/latest/administer/windows/example-register-folders-and-databases-listed-in-a-text-file.htm"
            
          },
treedata.data["1640_h19"]  = { 
              "parent" : "1640_h16",
              "label" : "ArcGIS Server 命令行实用程序",
              "children" : ["1640_134","1640_203","1640_63","1640_98","1640_138","1640_8","1640_102","1640_9","1640_227","1640_127"]
            }
            ,
treedata.data["1640_134"]  = {
            "parent" : "1640_h19",
            "label" : "ArcGIS Server 命令行实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/arcgis-server-command-line-utilities.htm"
            
          },
treedata.data["1640_203"]  = {
            "parent" : "1640_h19",
            "label" : "备份实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/backup-utility.htm"
            
          },
treedata.data["1640_63"]  = {
            "parent" : "1640_h19",
            "label" : "转换缓存存储格式工具",
            "url" : "/zh-cn/server/latest/administer/windows/convert-cache-storage-format-utility.htm"
            
          },
treedata.data["1640_98"]  = {
            "parent" : "1640_h19",
            "label" : "创建缓存方案实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/create-cache-schema-utility.htm"
            
          },
treedata.data["1640_138"]  = {
            "parent" : "1640_h19",
            "label" : "创建服务实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/create-service-utility.htm"
            
          },
treedata.data["1640_8"]  = {
            "parent" : "1640_h19",
            "label" : "删除缓存实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/delete-cache-utility.htm"
            
          },
treedata.data["1640_102"]  = {
            "parent" : "1640_h19",
            "label" : "“管理缓存切片”实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/manage-cache-tiles-utility.htm"
            
          },
treedata.data["1640_9"]  = {
            "parent" : "1640_h19",
            "label" : "“管理服务”实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/manage-service-utility.htm"
            
          },
treedata.data["1640_227"]  = {
            "parent" : "1640_h19",
            "label" : "发布路径服务实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/publishing-routing-services.htm"
            
          },
treedata.data["1640_127"]  = {
            "parent" : "1640_h19",
            "label" : "还原实用程序",
            "url" : "/zh-cn/server/latest/administer/windows/restore-utility.htm"
            
          },
treedata.data["1640_h20"]  = { 
              "parent" : "root",
              "label" : "控制独立站点访问",
              "children" : ["1640_174","1640_h21","1640_h22","1640_51","1640_h23"]
            }
            ,
treedata.data["1640_174"]  = {
            "parent" : "1640_h20",
            "label" : "配置服务器层身份验证",
            "url" : "/zh-cn/server/latest/administer/windows/securing-services-with-users-and-roles-specific-to-arcgis-server.htm"
            
          },
treedata.data["1640_h21"]  = { 
              "parent" : "1640_h20",
              "label" : "配置 Web 层身份验证",
              "children" : ["1640_52","1640_158","1640_135","1640_225"]
            }
            ,
treedata.data["1640_52"]  = {
            "parent" : "1640_h21",
            "label" : "Web 层身份验证",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-arcgis-server-s-authentication-tier.htm"
            
          },
treedata.data["1640_158"]  = {
            "parent" : "1640_h21",
            "label" : "使用 LDAP 目录配置 web 层身份验证",
            "url" : "/zh-cn/server/latest/administer/windows/securing-services-with-users-and-roles-from-an-ldap-server.htm"
            
          },
treedata.data["1640_135"]  = {
            "parent" : "1640_h21",
            "label" : "使用集成的 Windows 身份验证来配置 Web 层身份验证",
            "url" : "/zh-cn/server/latest/administer/windows/securing-web-services-with-integrated-windows-authentication.htm"
            
          },
treedata.data["1640_225"]  = {
            "parent" : "1640_h21",
            "label" : "使用集成的 Windows 身份验证和 PKI 来配置 Web 层身份验证",
            "url" : "/zh-cn/server/latest/administer/windows/using-windows-active-directory-and-pki-to-secure-access-to-arcgis-server.htm"
            
          },
treedata.data["1640_h22"]  = { 
              "parent" : "1640_h20",
              "label" : "管理用户和角色",
              "children" : ["1640_25","1640_179","1640_85","1640_204","1640_185","1640_13","1640_187"]
            }
            ,
treedata.data["1640_25"]  = {
            "parent" : "1640_h22",
            "label" : "在 Manager 中管理用户",
            "url" : "/zh-cn/server/latest/administer/windows/managing-users-in-manager.htm"
            
          },
treedata.data["1640_179"]  = {
            "parent" : "1640_h22",
            "label" : "在 Manager 中管理角色",
            "url" : "/zh-cn/server/latest/administer/windows/managing-roles-in-manager.htm"
            
          },
treedata.data["1640_85"]  = {
            "parent" : "1640_h22",
            "label" : "编辑主站点管理员帐户",
            "url" : "/zh-cn/server/latest/administer/windows/editing-the-primary-site-administrator-account.htm"
            
          },
treedata.data["1640_204"]  = {
            "parent" : "1640_h22",
            "label" : "用户帐户锁定策略",
            "url" : "/zh-cn/server/latest/administer/windows/user-account-lockout-policy.htm"
            
          },
treedata.data["1640_185"]  = {
            "parent" : "1640_h22",
            "label" : "禁用主站点管理员帐户",
            "url" : "/zh-cn/server/latest/administer/windows/disabling-the-primary-site-administrator-account.htm"
            
          },
treedata.data["1640_13"]  = {
            "parent" : "1640_h22",
            "label" : "重置忘记的密码",
            "url" : "/zh-cn/server/latest/administer/windows/resetting-a-forgotten-password.htm"
            
          },
treedata.data["1640_187"]  = {
            "parent" : "1640_h22",
            "label" : "Manager 中的发布者角色支持",
            "url" : "/zh-cn/server/latest/administer/windows/publisher-role-support-in-manager.htm"
            
          },
treedata.data["1640_51"]  = {
            "parent" : "1640_h20",
            "label" : "修改服务或文件夹的权限",
            "url" : "/zh-cn/server/latest/administer/windows/editing-permissions-in-manager.htm"
            
          },
treedata.data["1640_h23"]  = { 
              "parent" : "1640_h20",
              "label" : "高级访问配置",
              "children" : ["1640_142","1640_110","1640_73","1640_231","1640_210","1640_58"]
            }
            ,
treedata.data["1640_142"]  = {
            "parent" : "1640_h23",
            "label" : "高级配置方案",
            "url" : "/zh-cn/server/latest/administer/windows/advanced-considerations-when-using-domain-accounts.htm"
            
          },
treedata.data["1640_110"]  = {
            "parent" : "1640_h23",
            "label" : "配置 ArcGIS Server 使用的域控制器",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-the-domain-controller-used-by-arcgis-server.htm"
            
          },
treedata.data["1640_73"]  = {
            "parent" : "1640_h23",
            "label" : "为 ArcGIS Server 配置高可用性 LDAP",
            "url" : "/zh-cn/server/latest/administer/windows/configuring-a-highly-available-ldap-with-arcgis-server.htm"
            
          },
treedata.data["1640_231"]  = {
            "parent" : "1640_h23",
            "label" : "禁用与 Windows Active Directory 的任何未加密通信",
            "url" : "/zh-cn/server/latest/administer/windows/disable-any-unencrypted-communication-with-active-directory.htm"
            
          },
treedata.data["1640_210"]  = {
            "parent" : "1640_h23",
            "label" : "禁用 ArcGIS Web Adaptor (IIS) 中的 Windows 活动目录组查找功能",
            "url" : "/zh-cn/server/latest/administer/windows/disable-windows-active-directory-groups-lookup-in-arcgis-web-adaptor-iis-.htm"
            
          },
treedata.data["1640_58"]  = {
            "parent" : "1640_h23",
            "label" : "在 Windows 活动目录标识存储中使用嵌套组",
            "url" : "/zh-cn/server/latest/administer/windows/using-nested-groups-in-a-windows-active-directory-identity-store.htm"
            
          }
        })()