/**
 * @DECS: 根据PREVIEW_LOOKUP的检索数据列表提取对应html的内容，转换成对象数组文本
 * @AUTH: hy
 * @DATE: 2020-09-04
 */
const fs = require('fs');
const cheerio = require('cheerio');
const {path} = require('./config');

function readFAQHtml() {
  let PREVIEW_LOOKUP = fs.readFileSync(path + '/PREVIEW_LOOKUP.txt', 'utf8');

  // PREVIEW_LOOKUP = PREVIEW_LOOKUP.replace(/C:\\Users\\admin\\Desktop\\python\\help_search\\zh-CN_windows\\/g, '');
  // PREVIEW_LOOKUP = PREVIEW_LOOKUP.replace(/\\/g, '/');

  if (!PREVIEW_LOOKUP) {
    console.error('[read_FAQ_html]: PREVIEW_LOOKUP，无数据')
    return;
  }
  PREVIEW_LOOKUP = JSON.parse(PREVIEW_LOOKUP);

  fs.writeFileSync(path + '/PREVIEW_LOOKUP_CONTENTS.txt', '[');

  console.info('[read_FAQ_html]: PREVIEW_LOOKUP_CONTENTS初始化完成，开始提取html内容')

  // 循环读取每个链接对应的html文档的main内容
  const keys = Object.keys(PREVIEW_LOOKUP);
  keys.forEach((key, index) => {
    let link = PREVIEW_LOOKUP[key]['l'];

    if (!link) {
      console.warn(`[read_FAQ_html]: ${PREVIEW_LOOKUP[key]['t']} link为空`);
    } else {
      // link = link.replace(/geoscene/g, 'arcgis');

      const html = fs.readFileSync('../views/' + link, 'utf8');
      let $ = cheerio.load(html, {decodeEntities: false});
      link = $('main');

      link = link.text();
    }

    link = link || '';

    const value = {
      t: PREVIEW_LOOKUP[key].t,
      d: PREVIEW_LOOKUP[key].p,
      k: PREVIEW_LOOKUP[key].l,
      b: link,
      id: key
    }
    fs.appendFileSync(path + '/PREVIEW_LOOKUP_CONTENTS.txt', JSON.stringify(value) + (index < keys.length - 1 ? "," : ''));
    process.stdout.write(`[read_FAQ_html]:已提取${index + 1}/${keys.length} ${index + 1 < keys.length ? '\r' : '\n'}`);
  })

  fs.appendFileSync(path + '/PREVIEW_LOOKUP_CONTENTS.txt', ']');
  console.info('[read_FAQ_html]: 提取html内容完成')
}

module.exports = readFAQHtml
