'use strict';

var drawTree = function(data){
  var canvas = document.querySelector('.navtree');
  var c = canvas.getContext('2d');

  canvas.width = 300;
  canvas.height = $(window).height();
  canvas.style.background = '#333F50';

  var radius = 8, startX = 50, startY = 50, endX = startX + 25, endY;
  var rootColor = '#5B9BD5', branchColor = '#FF3399', circleColor = 'black';

  var i, j, navLength = 0;
  for (i = 0; i < data.length; i++) {
    navLength += data[i].length;
  }
  endY = startY + 50 + navLength * 50;

  c.lineWidth = 3;
  c.strokeStyle = rootColor;
  c.fillStyle = rootColor;
  c.beginPath();
  c.arc(startX, startY, radius, 0, Math.PI * 2, true);
  c.stroke();
  c.fill();
  c.closePath();

  c.beginPath();
  c.lineWidth = 3;
  c.strokeStyle = rootColor;
  c.moveTo(startX, startY);
  c.lineTo(startX + 25, startY + 25);
  c.lineTo(endX, endY);
  c.stroke();
  c.closePath();

  c.beginPath();
  c.strokeStyle = circleColor;
  c.lineWidth = 1;
  c.arc(startX, startY, radius + 2, 0, Math.PI * 2, true);
  c.stroke();
  c.closePath();

  var X1 = endX, Y1 = startY;
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].length; j++) {
      Y1 += 50;
      if (j === 0) {
        c.font = '24px Courier New';
        c.fillStyle = 'white';
        c.fillText(data[i][j], X1 + 20, Y1 + 5);

        c.beginPath();
        c.lineWidth = 3;
        c.strokeStyle = branchColor;
        c.fillStyle = branchColor;
        c.moveTo(X1, Y1);
        c.lineTo(X1 + 25, Y1 + 25);
        c.lineTo(X1 + 25, Y1 + 50);
        c.stroke();

        c.beginPath();
        c.strokeStyle = rootColor;
        c.fillStyle = rootColor;
        c.arc(X1, Y1, radius, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();
        c.closePath();

        c.beginPath();
        c.strokeStyle = circleColor;
        c.lineWidth = 1;
        c.arc(X1, Y1, radius + 2, 0, Math.PI * 2, true);
        c.stroke();
        c.closePath();

        X1 += 25;
      }
      else {
        c.beginPath();
        c.lineWidth = 3;
        c.strokeStyle = branchColor;
        c.fillStyle = branchColor;
        c.arc(X1, Y1, 8, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();
        c.closePath();

        c.font = '18px Courier New';
        c.fillStyle = 'white';
        c.fillText(data[i][j], X1 + 20, Y1 + 5);

        c.beginPath();
        c.lineWidth = 3;
        c.strokeStyle = branchColor;
        c.fillStyle = branchColor;
        c.moveTo(X1, Y1);
        if (j !== data[i].length - 1) {
          c.lineTo(X1, Y1 + 50);
        }
        else {
          c.lineTo(X1, Y1 + 25);
          c.lineTo(X1 - 25, Y1 + 50);
        }
        c.stroke();
        c.closePath();

        c.beginPath();
        c.strokeStyle = circleColor;
        c.lineWidth = 1;
        c.arc(X1, Y1, radius + 2, 0, Math.PI * 2, true);
        c.stroke();
        c.closePath();
      }
    }
    X1 -= 25;
  }
  if (data[data.length - 1].length !== 1) {
    c.lineWidth = 3;
    c.strokeStyle = rootColor;
    c.fillStyle = rootColor;
    c.beginPath();
    c.arc(endX, endY, radius, 0, Math.PI * 2, true);
    c.stroke();
    c.fill();
    c.closePath();

    c.beginPath();
    c.strokeStyle = circleColor;
    c.lineWidth = 1;
    c.arc(endX, endY, radius + 2, 0, Math.PI * 2, true);
    c.stroke();
    c.closePath();
  }
};
