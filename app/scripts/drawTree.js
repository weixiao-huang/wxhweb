'use strict';

var drawTree = function(data){
  var canvas = document.querySelector('.navtree');
  var c = canvas.getContext('2d');

  canvas.width = 300;
  canvas.height = 1000;
  canvas.style.position = 'absolute';
  canvas.style.top = document.querySelector('.header').offsetHeight + 'px';
  canvas.style.left = '0px';
  canvas.style.background = 'gray';

  var radius = 8, startX = 50, startY = 50, endX = startX + 25, endY;

  var i, j, navLength = 0;
  for (i = 0; i < data.length; i++) {
    navLength += data[i].length;
  }
  endY = startY + 50 + navLength * 50;

  // Initialize Root Branch
  c.lineWidth = 4;
  c.strokeStyle = 'blue';
  c.fillStyle = 'blue';
  c.beginPath();
  c.arc(startX, startY, radius, 0, Math.PI * 2, true);
  c.stroke();
  c.fill();

  c.moveTo(startX, startY);
  c.lineTo(startX + 25, startY + 25);
  c.lineTo(endX, endY);
  c.stroke();

  c.lineWidth = 4;
  c.strokeStyle = 'pink';
  c.fillStyle = 'pink';
  var X1 = endX, Y1 = startY;
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].length; j++) {
      if (j === 0) {
        Y1 += 50;

        c.font = '20px Courier New';
        c.fillStyle = 'white';
        c.fillText(data[i][j], X1 + 20, Y1 + 5);

        c.beginPath();
        c.strokeStyle = 'pink';
        c.fillStyle = 'pink';
        c.moveTo(X1, Y1);
        c.lineTo(X1 + 25, Y1 + 25);
        c.lineTo(X1 + 25, Y1 + 50);
        c.stroke();

        c.strokeStyle = 'blue';
        c.fillStyle = 'blue';
        c.beginPath();
        c.arc(X1, Y1, radius, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();

        X1 += 25;
      }
      else {
        Y1 += 50;
        c.strokeStyle = 'pink';
        c.fillStyle = 'pink';
        c.beginPath();
        c.arc(X1, Y1, 8, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();

        c.font = '15px Courier New';
        c.fillStyle = 'white';
        c.fillText(data[i][j], X1 + 20, Y1 + 5);

        c.beginPath();
        c.strokeStyle = 'pink';
        c.fillStyle = 'pink';
        c.moveTo(X1, Y1);
        if (j !== data[i].length - 1) {
          c.lineTo(X1, Y1 + 50);
        }
        else {
          c.lineTo(X1, Y1 + 25);
          c.lineTo(X1 - 25, Y1 + 50);
        }

        c.stroke();
      }
    }
    X1 -= 25;
  }
  if (data[data.length - 1].length !== 1) {
    c.lineWidth = 4;
    c.strokeStyle = 'blue';
    c.fillStyle = 'blue';
    c.beginPath();
    c.arc(endX, endY, radius, 0, Math.PI * 2, true);
    c.stroke();
    c.fill();
  }
};
