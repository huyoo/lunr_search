const fs = require('fs');

function composeFile() {
    fs.writeFileSync('C:/Users/yu_hu/Desktop/lunr_index.js', '');

    // 异步读取
    let data = '';
    // data = fs.readFileSync('C:/Users/yu_hu/Desktop/front.txt', 'utf8');
    // fs.appendFileSync('C:/Users/yu_hu/Desktop/lunr_index.js', data);
    //
    // data = fs.readFileSync('C:/Users/yu_hu/Desktop/3.txt', 'utf8');
    // fs.appendFileSync('C:/Users/yu_hu/Desktop/lunr_index.js', data);
    //
    // data = fs.readFileSync('C:/Users/yu_hu/Desktop/back.txt', 'utf8');
    // fs.appendFileSync('C:/Users/yu_hu/Desktop/lunr_index.js', data);

    data = fs.readFileSync('C:/Users/yu_hu/Desktop/新建文件夹/lunrCnIndexs.json', 'utf8');
    fs.appendFileSync('C:/Users/yu_hu/Desktop/lunr_index.js', 'const LUNR_DATA = '+data);

    data = fs.readFileSync('C:/Users/yu_hu/Desktop/新建文件夹/PREVIEW_LOOKUP.txt', 'utf8');
    fs.appendFileSync('C:/Users/yu_hu/Desktop/lunr_index.js', '\nconst PREVIEW_LOOKUP = '+data);
}

composeFile()
