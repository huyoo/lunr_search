;(function (){
          treedata = (window.treedata || {});
          window.treedata.mode = 0;
          window.treedata.mapping = {'2378' : 'excalibur/latest/reference' };
          treedata.data = {};
          treedata.data["root"]  = {  
              "parent" : "",
              "children" : ["2378_h0"]
            },treedata.data["root_2378"] = treedata.data["root"],
treedata.data["2378_h0"]  = { 
              "parent" : "root",
              "label" : "其他帮助",
              "children" : ["2378_6","2378_3"]
            }
            ,
treedata.data["2378_6"]  = {
            "parent" : "2378_h0",
            "label" : "常见问题解答",
            "url" : "/zh-cn/excalibur/latest/reference/faqs.htm"
            
          },
treedata.data["2378_3"]  = {
            "parent" : "2378_h0",
            "label" : "新特性",
            "url" : "/zh-cn/excalibur/latest/reference/what-s-new.htm"
            
          }
        })()