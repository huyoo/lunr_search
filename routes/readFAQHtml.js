/**
 * @DECS: 根据PREVIEW_LOOKUP的检索数据列表提取对应html的内容，转换成对象数组文本
 * @AUTH: hy
 * @DATE: 2020-09-04
 */
const fs = require('fs');
const cheerio = require('cheerio');

function readFAQHtml() {
  let PREVIEW_LOOKUP = fs.readFileSync('C:/Users/yu_hu/Desktop/新建文件夹/PREVIEW_LOOKUP.txt');

  if (!PREVIEW_LOOKUP) {
    console.error('[read_FAQ_html]: PREVIEW_LOOKUP，无数据')
    return;
  }
  PREVIEW_LOOKUP = JSON.parse(PREVIEW_LOOKUP);

  fs.writeFileSync('C:/Users/yu_hu/Desktop/新建文件夹/PREVIEW_LOOKUP_CONTENTS.txt', '[');

  console.info('[read_FAQ_html]: PREVIEW_LOOKUP_CONTENTS初始化完成，开始提取html内容')

  const keys = Object.keys(PREVIEW_LOOKUP);
  // const a = ["0"];
  keys.forEach(key => {
    let link = PREVIEW_LOOKUP[key]['l'];

    if (!link) {
      console.warn(`[read_FAQ_html]: ${PREVIEW_LOOKUP[key]['t']} link为空`);
    } else {
      link = link.replace(/geoscene/g, 'arcgis');

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
    fs.appendFileSync('C:/Users/yu_hu/Desktop/新建文件夹/PREVIEW_LOOKUP_CONTENTS.txt', JSON.stringify(value) + ",");
    console.log(`已提取${key}/${keys.length}`)
  })

  fs.appendFileSync('C:/Users/yu_hu/Desktop/新建文件夹/PREVIEW_LOOKUP_CONTENTS.txt', ']');
  console.info('[read_FAQ_html]: 提取html内容完成')
}

readFAQHtml();
