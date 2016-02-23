var Canvas = require('canvas');

exports.handler = function(event, context) {

    var canvas = new Canvas();
    canvas.width = 100;
    canvas.height = 100;

    var g = canvas.getContext('2d');
    g.fillStyle = 'red';
    g.fillRect(0, 0, 50, 50);
    g.fillStyle = 'green';
    g.fillRect(50, 0, 50, 50);
    g.fillStyle = 'blue';
    g.fillRect(0, 50, 50, 50);
    g.fillStyle = 'yellow';
    g.fillRect(50, 50, 50, 50);

    console.log(canvas.toDataURL());

    context.succeed('Done!');
};
