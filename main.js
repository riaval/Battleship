var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var battleship = (function () {
    var mContext;
    var mField;

    return {
        initialize: function (ctx, size, maxShipSize) {
            mContext = ctx;
            mField = new Array(size);
            for (var i = 0; i < mField.length; i++) {
                mField[i] = new Array(size);
                for (var j = 0; j < mField[i].length; j++) {
                    mField[i][j] = 0
                }
            }

            for (var k = maxShipSize; k > 0; k--) {
                for (var l = 1; l < k + 1; l++) {
                    drawShip(l)
                }
            }
        },

        render: function () {
            drawGrid();
            mField.forEach(function (row, rowIndex) {
                row.forEach(function (item, columnIndex) {
                    if (item) {
                        drawSquare(rowIndex, columnIndex)
                    }
                })
            });

            mContext.stroke();
        }
    };

    function drawShip (items) {
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
                mField[value.y][value.x] = 1
            });
        } else {
            drawShip(items)
        }
    }

    function drawSquare(x, y) {
        mContext.fillRect(y * 54 + 2, x * 54 + 2, 50, 50);
    }

    function drawGrid() {
        for (var x = 0.5; x < 541; x += 54) {
            mContext.moveTo(x, 0);
            mContext.lineTo(x, 540);
        }

        for (var y = 0.5; y < 541; y += 54) {
            mContext.moveTo(0, y);
            mContext.lineTo(540, y);
        }
    }

    function canPlace(x, y) {
        if (typeof mField[y] === 'undefined' || typeof mField[y][x] === 'undefined') {
            return false
        }
        for(var i = x - 1; i <= x + 1; i++) {
            for (var j = y - 1; j <= y + 1; j++) {
                if (mField[j] && mField[j][i] === 1) {
                    return false;
                }
            }
        }
        return true;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}());

battleship.initialize(ctx, 10, 4);
battleship.render();