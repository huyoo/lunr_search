# lunr_chinese 索引生成步骤

##### 所有文档使用记事本打开，不要使用编辑器

1. 安装npm依赖，安装vs studio c++编译工具，cd到node_modules/nodejieba下，执行node-gyp rebuild，会在该目录下生成build/Release/nodejieba.node。
2. 从lunr_index.js中提取 PREVIEW_LOOKUP到PREVIEW_LOOKUP.txt，注意删掉开头的参数定义，方便json反序列化成对象数据。文件路径在routes/config.js中指定。
3. 在routes/userdict.utf8中准备搜索关键字。
4. 执行routes/index.js。   

##### 注意事项
1. PREVIEW_LOOKUP.txt里的数据需要满足JSON反序列化的要求，数据中不能有换行或其他非法字符。
2. PREVIEW_LOOKUP.txt的路径使用/，不能使用\，如果给出的路径不对，请replace替换
