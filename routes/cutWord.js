/**
 * @DECS: 生成自定义检索关键字
 * @AUTH: hy
 * @DATE: 2020-09-03
 */
const fs = require('fs');

function readFile() {
    // 异步读取
    const data = fs.readFileSync('C:/Users/yu_hu/Desktop/新建文件夹/corpusToken.txt', 'utf8');
    const arr = JSON.parse(data);

    console.info('[cut_word]: 读取并解析关键词 success', arr.length);

    fs.writeFileSync('C:/Users/yu_hu/Desktop/新建文件夹/userdict.utf8', '');


    arr.forEach(item => {
        fs.appendFileSync('C:/Users/yu_hu/Desktop/新建文件夹/userdict.utf8', item + ' n\n');
    })

    console.info('[cut_word]: 关键词已写入userdict.utf8 success');
}

readFile()
