/**
 * @desc: 根据关键字生成搜索索引
 * @auth: HuYu
 * @time: 2020/9/3
 */
const nodejieba = require('nodejieba');
const fs = require('fs')
const {path} = require('./config');

const lunr = require('lunr-chinese')({
  dict: nodejieba.DEFAULT_DICT,
  hmmDict: nodejieba.DEFAULT_HMM_DICT,
  userDict: './userdict.utf8',
  idfDict: nodejieba.DEFAULT_IDF_DICT,
  stopWordDict: nodejieba.DEFAULT_STOP_WORD_DICT,
  method: 'cutForSearch' //optional [default is `cut`] (call the specific method for `nodejieba`)
})

function create() {

  let idx = lunr(function () {
    this.ref('id')

    this.field('t')
    this.field('d')
    this.field('k')
    this.field('b')
  })
  // let PREVIEW_LOOKUP = fs.readFileSync('C:/Users/yu_hu/Desktop/新建文件夹/PREVIEW_LOOKUP.txt');
  //
  // if (!PREVIEW_LOOKUP) {
  //   console.error('[lunr_chinese]: PREVIEW_LOOKUP，无数据')
  //   return;
  // }
  // PREVIEW_LOOKUP = JSON.parse(PREVIEW_LOOKUP);
  //
  // const postContents = Object.keys(PREVIEW_LOOKUP).map(key => {
  //
  //
  //   return {
  //     ...PREVIEW_LOOKUP[key],
  //     t: PREVIEW_LOOKUP[key].t,
  //     d: PREVIEW_LOOKUP[key].p,
  //     k: PREVIEW_LOOKUP[key].l,
  //     b: PREVIEW_LOOKUP[key].l,
  //     id: key
  //   }
  // })

  console.log('[lunr_chinese]: 开始解析 PREVIEW_LOOKUP_CONTENT 内容.')
  let PREVIEW_LOOKUP = fs.readFileSync(path + '/PREVIEW_LOOKUP_CONTENTS.txt', 'utf8');


  if (!PREVIEW_LOOKUP) {
    console.error('[lunr_chinese]: PREVIEW_LOOKUP_CONTENT，无数据')
    return;
  }
  PREVIEW_LOOKUP = PREVIEW_LOOKUP.replace(/\t|\n/g, '')

  PREVIEW_LOOKUP = JSON.parse(PREVIEW_LOOKUP);

  console.info('[lunr_chinese]: 解析完成，开始匹配关键字...')
  lunr.init(idx, PREVIEW_LOOKUP, path + '/lunrCnIndexs.json');
  console.info('[lunr_chinese]: lunrCnIndexs.json已生成')
}

module.exports = create

// create();
