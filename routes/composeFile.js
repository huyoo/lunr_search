/**
 * 将文档索引 PREVIEW_LOOKUP 和检索索引 lunrCnIndexs 合并进 lunr_index.js
 * @type {module:fs}
 */
const fs = require('fs');
const {path} = require('./config');


function composeFile() {
  fs.writeFileSync(path + '/lunr_index.js', '');

  // 异步读取
  let data = '';

  data = fs.readFileSync(path + '/lunrCnIndexs.json', 'utf8');
  fs.appendFileSync(path + '/lunr_index.js', 'const LUNR_DATA = ' + data);

  data = fs.readFileSync(path + '/PREVIEW_LOOKUP.txt', 'utf8');
  fs.appendFileSync(path + '/lunr_index.js', '\nconst PREVIEW_LOOKUP = ' + data);
  console.log('[composeFile]: 文件合并完成，lunr_index.js已生成')
}

module.exports = composeFile
