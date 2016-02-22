var Canvas = require('canvas');
var fs = require('fs');

function saveCanvasToFile(canvas) {

    return new Promise(function(resolve, reject) {

        var filename = __dirname + '/tmp-img' /*+ Date.now()*/ + '.jpg';
        var out = fs.createWriteStream(filename);

        // var stream = canvas.pngStream();

        var stream = canvas.jpegStream({
            bufsize: 4096,
            quality: 85,
            progressive: false
        });

        stream.on('data', function(chunk) {
            out.write(chunk);
        });

        stream.on('end', function() {
            console.log('Saved JPEG ' + filename);
            resolve(filename);
        });

        stream.on('error', function(error) {
            reject(error);
        });
    });

    // console.log('<img src="' + canvas.toDataURL() + '" />');
}

var canvas = new Canvas();
canvas.width = 512;
canvas.height = 512;

var g = canvas.getContext('2d');

g.fillStyle = 'red';
g.fillRect(10, 10, 100, 100);

saveCanvasToFile(canvas);
