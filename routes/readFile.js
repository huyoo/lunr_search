const fs = require('fs');

function readFile() {
    // 异步读取
    fs.readFile('C:/Users/yu_hu/Desktop/arr.txt', 'utf8', (err, data) => {
        const arr = JSON.parse(data);

        arr.forEach(item => {
            const str = JSON.stringify(item);
            // if (str.includes('arcgi')) {
            // if (str.includes('arcgis')) {
                fs.appendFileSync('C:/Users/yu_hu/Desktop/arcgis.txt', str + ',\n')
            // }
        })
    })
}

readFile()
