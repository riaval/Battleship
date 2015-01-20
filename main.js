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

//ctx.strokeStyle = "#ddd";
ctx.stroke();

(function () {

    var battleship = [
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1]
    ];
    //var battleship = [
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //];



    battleship.forEach(function (row, rowIndex) {
        row.forEach(function (item, columnIndex) {
            if (item) {
                drawSquare(rowIndex, columnIndex)
            }
        })
    });

    function drawSquare(rowIndex, columnIndex) {
        ctx.fillRect(columnIndex * 54 + 2, rowIndex * 54 + 2, 50, 50);
        ctx.stroke();
    }

}());