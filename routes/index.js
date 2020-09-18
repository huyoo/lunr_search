/**
 * 生成中文检索索引
 */
const readFAQHtml = require('./readFAQHtml');
const createChinese = require('./lunrChinese');
const composeFile = require('./composeFile');

function createChineseRef() {
  readFAQHtml();
  createChinese();

  setTimeout(() => {
    composeFile();
    console.log('[createChineseRef]: 生成中文检索索引success')
  }, 2000);

  console.log('[createChineseRef]: 静默2秒，等待磁盘文件完全写入...')
}


createChineseRef()
