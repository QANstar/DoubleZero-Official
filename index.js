const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');

function start() {
    request(config.url, function (err, res, body) {
        console.log("start!!!");
        if (!err && res) {
            console.log("go!!!");
            analyze.findImg(body, downLoad)
        }

    })
}

function downLoad(imgUrl, i) {
    if (imgUrl) {
        let ext = imgUrl.split(".").pop();
        request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
            'encoding': 'utf8'
        }))
        console.log(i);
    }

}
start();