'use strict';

var drawTree = function(data){
  var canvas = document.querySelector('.navtree');
  var c = canvas.getContext('2d');

  canvas.width = 400;
  canvas.height = $(window).get(0).innerHeight;
  canvas.style.background = '#333F50';

  var radius = 8, startX = 50, startY = 50, endX = startX + 25, endY;
  var rootColor = '#5B9BD5', branchColor = '#FF3399', circleColor = 'black';
  var positionX = [[], [], [], []], positionY = [[], [], [], []];
  var oldI = 0, oldJ = 0;

  var i, j, navLength = 0;
  for (i = 0; i < data.length; i++) {
    navLength += data[i].length;
  }
  endY = startY + 50 + navLength * 50;

  c.beginPath();
  c.lineWidth = 3;
  c.strokeStyle = rootColor;
  c.fillStyle = rootColor;
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
        c.closePath();

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

        positionX[i][j] = X1;
        positionY[i][j] = Y1;

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
        if (data[i][j].substring(0, 5) === 'Intro') {
          c.fillText(data[i][j].substring(0, data[i][j].length - 1), X1 + 20, Y1 + 5);
        }
        else {
          c.fillText(data[i][j], X1 + 20, Y1 + 5);
        }

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

        positionX[i][j] = X1;
        positionY[i][j] = Y1;
      }
    }
    X1 -= 25;
  }

  if (data[data.length - 1].length !== 1) {
    c.beginPath();
    c.lineWidth = 3;
    c.strokeStyle = rootColor;
    c.fillStyle = rootColor;
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

  c.beginPath();
  c.strokeStyle = '#666666';
  c.fillStyle = '#666666';
  c.arc(positionX[0][0], positionY[0][0], radius + 2, 0, Math.PI * 2, true);
  c.stroke();
  c.fill();
  c.closePath();

  c.beginPath();
  c.strokeStyle = 'white';
  c.fillStyle = 'white';
  c.arc(positionX[0][0], positionY[0][0], radius - 3, 0, Math.PI * 2, true);
  c.stroke();
  c.fill();
  c.closePath();

  c.beginPath();
  c.strokeStyle = circleColor;
  c.lineWidth = 1;
  c.arc(positionX[0][0], positionY[0][0], radius + 2, 0, Math.PI * 2, true);
  c.stroke();
  c.closePath();

  var isDragging = false, oldY = 0, dy = 0;
  $('.navtree').on({
    mousedown: function(e) {
      isDragging = true;
      oldY = e.pageY - $(this).offset().top;
    },
    mousemove: function(e) {
      if (isDragging) {
        $(this).css({cursor: 'move'});
        dy = e.pageY - $(this).offset().top - oldY;
        oldY = e.pageY - $(this).offset().top;

        c.clearRect(0, 0, canvas.width, canvas.height);
        startY = startY + dy;
        endY = startY + 50 + navLength * 50;

        if (endY <= 100) {
          startY = startY - dy;
        }
        else if (startY >= canvas.height - 150) {
          startY = canvas.height - 150;
        }

        c.beginPath();
        c.lineWidth = 3;
        c.strokeStyle = rootColor;
        c.fillStyle = rootColor;
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
              c.closePath();

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

              positionX[i][j] = X1;
              positionY[i][j] = Y1;

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
              if (data[i][j].substring(0, 5) === 'Intro') {
                c.fillText(data[i][j].substring(0, data[i][j].length - 1), X1 + 20, Y1 + 5);
              }
              else {
                c.fillText(data[i][j], X1 + 20, Y1 + 5);
              }

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

              positionX[i][j] = X1;
              positionY[i][j] = Y1;
            }
          }
          X1 -= 25;
        }

        if (data[data.length - 1].length !== 1) {
          c.beginPath();
          c.lineWidth = 3;
          c.strokeStyle = rootColor;
          c.fillStyle = rootColor;
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

        c.beginPath();
        c.strokeStyle = '#666666';
        c.fillStyle = '#666666';
        c.arc(positionX[oldI][oldJ], positionY[oldI][oldJ], radius + 2, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();
        c.closePath();

        c.beginPath();
        c.strokeStyle = 'white';
        c.fillStyle = 'white';
        c.arc(positionX[oldI][oldJ], positionY[oldI][oldJ], radius - 3, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();
        c.closePath();

        c.beginPath();
        c.strokeStyle = circleColor;
        c.lineWidth = 1;
        c.arc(positionX[oldI][oldJ], positionY[oldI][oldJ], radius + 2, 0, Math.PI * 2, true);
        c.stroke();
        c.closePath();
      }
      else {
        var xx = e.pageX - $(this).offset().left;
        var yy = e.pageY - $(this).offset().top;
        var i1, j1;
        $(this).css({cursor: 'default'});
        for (i1 = 0; i1 < data.length; i1++) {
          for (j1 = 0; j1 < data[i1].length; j1++) {
            if (Math.abs(xx - positionX[i1][j1]) <= 8 && Math.abs(yy - positionY[i1][j1]) <= 8) {
              $(this).css({cursor: 'pointer'});
            }
          }
        }
      }
    },
    mouseup: function(e) {
      isDragging = false;
    },
    click: function (e) {
      var xx = e.pageX - $(this).offset().left;
      var yy = e.pageY - $(this).offset().top;
      var i2, j2;
      $(this).css({cursor: 'default'});
      for (i2 = 0; i2 < data.length; i2++) {
        for (j2 = 0; j2 < data[i2].length; j2++) {
          if (Math.abs(xx - positionX[i2][j2]) <= 8 && Math.abs(yy - positionY[i2][j2]) <= 8) {
            window.location.href = '#' + data[i2][j2];
          }
        }
      }
    }
  });

  window.onhashchange = function() {
    var ThisID = window.location.hash;
    var i3, j3;
    for (i3 = 0; i3 < data.length; i3++) {
      for (j3 = 0; j3 < data[i3].length; j3++) {
        if ('#' + data[i3][j3] === ThisID) {
          oldI = i3;
          oldJ = j3;
          c.beginPath();
          c.strokeStyle = '#666666';
          c.fillStyle = '#666666';
          c.arc(positionX[i3][j3], positionY[i3][j3], radius + 2, 0, Math.PI * 2, true);
          c.stroke();
          c.fill();
          c.closePath();

          c.beginPath();
          c.strokeStyle = 'white';
          c.fillStyle = 'white';
          c.arc(positionX[i3][j3], positionY[i3][j3], radius - 3, 0, Math.PI * 2, true);
          c.stroke();
          c.fill();
          c.closePath();

          c.beginPath();
          c.strokeStyle = circleColor;
          c.lineWidth = 1;
          c.arc(positionX[i3][j3], positionY[i3][j3], radius + 2, 0, Math.PI * 2, true);
          c.stroke();
          c.closePath();
        }
        else if (j3 === 0) {
          c.beginPath();
          c.strokeStyle = rootColor;
          c.fillStyle = rootColor;
          c.arc(positionX[i3][j3], positionY[i3][j3], radius, 0, Math.PI * 2, true);
          c.stroke();
          c.fill();
          c.closePath();

          c.beginPath();
          c.strokeStyle = circleColor;
          c.lineWidth = 1;
          c.arc(positionX[i3][j3], positionY[i3][j3], radius + 2, 0, Math.PI * 2, true);
          c.stroke();
          c.closePath();
        }
        else {
          c.beginPath();
          c.strokeStyle = branchColor;
          c.fillStyle = branchColor;
          c.arc(positionX[i3][j3], positionY[i3][j3], radius, 0, Math.PI * 2, true);
          c.stroke();
          c.fill();
          c.closePath();

          c.beginPath();
          c.strokeStyle = circleColor;
          c.lineWidth = 1;
          c.arc(positionX[i3][j3], positionY[i3][j3], radius + 2, 0, Math.PI * 2, true);
          c.stroke();
          c.closePath();
        }
      }
    }
  };
};

drawTree([[]]);
