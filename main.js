var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#000000";

for (var x = 0.5; x < 541; x += 54) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 540);
}

for (var y = 0.5; y < 541; y += 54) {
    ctx.moveTo(0, y);
    ctx.lineTo(540, y);
}

ctx.stroke();

var battleship = (function () {

    var field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    function canPlace(x, y) {
        for(var i = x - 1; i <= x + 1; i++) {
            for (var j = y - 1; j <= y + 1; j++) {
                if (!field[j] || typeof field[j][i] == 'undefined' || field[j][i] === 1) {
                    return false;
                }
            }
        }
        return true;
    }

    return {
        drawShip: function (items) {
            //while (true) {
                var randomX = Math.floor(Math.random() * 10);
                var randomY = Math.floor(Math.random() * 10);
                var toX = getRandomInt(0, 1);
                var toY = toX ? 0 : 1;

                var values = [];
                for(var i = 0; i < items; i++) {
                    var x = randomX + i * toX;
                    var y = randomY + i * toY;
                    if (canPlace(x, y)) {
                        values.push({
                            x: x,
                            y: y
                        })
                    }
                }

                if (values.length === items) {
                    values.forEach(function (value) {
                        field[value.y][value.x] = 1
                    });
                    return;
                    //break;
                } else {
                    this.drawShip(items)
                }
            //}
        },

        render: function () {
            console.log(canPlace(1,1))
            field.forEach(function (row, rowIndex) {
                row.forEach(function (item, columnIndex) {
                    if (item) {
                        drawSquare(rowIndex, columnIndex)
                    }
                })
            });

            ctx.stroke();
        }
    };

    function drawSquare(x, y) {
        ctx.fillRect(y * 54 + 2, x * 54 + 2, 50, 50);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}());

battleship.drawShip(4);

battleship.drawShip(3);
battleship.drawShip(3);

battleship.drawShip(2);
battleship.drawShip(2);
battleship.drawShip(2);

battleship.drawShip(1);
battleship.drawShip(1);
battleship.drawShip(1);
battleship.drawShip(1);

battleship.render();



