const fs = require('fs');

function recoverFile() {
    fs.writeFileSync('C:/Users/yu_hu/Desktop/3.txt', '');

    // 异步读取
    fs.readFile('C:/Users/yu_hu/Desktop/arcgis.txt', 'utf8', (err, data) => {
        const arr = JSON.parse(`[${data}]`);

        arr.sort((a, b) => a[0]>b[0] ? 1: -1)

        fs.writeFileSync('C:/Users/yu_hu/Desktop/3.txt', JSON.stringify(arr)+',')
    })
}

recoverFile()
