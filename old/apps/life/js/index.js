$(document).ready(function() {
  init();
});

$("#step").click(function() {
  step();
});

rows = 24;
columns = 24;

function init() {
  //clone army
  var $row = $("<div />", {
    class: 'row'
  });
  var $square = $("<div />", {
    class: 'square'
  });

  //add columns to the the temp row object
  for (var i = 0; i < columns; i++) {
    $row.append($square.clone().attr("x", i + 1));
  }
  //clone the temp row object with the columns to the wrapper
  for (var i = 0; i < rows; i++) {
    var rowtemp = $row.clone();
    $(rowtemp).find(".square").attr("y", i + 1);
    $("#wrapper").append(rowtemp);
  }

  //number the squares, add attributes
  $(".square").each(function(index) {
    var num = index;
    $(this).attr('data-prop', num);
    $(this).addClass("g" + num);
    $(this).attr('data-risk', 0);
  });

  //PLAY THE GODDAMN GAME
  $(".square").click(function() {
    //safe move
    $(this).text() !== "x" ? $(this).text("x").addClass("x") : $(this).text("").removeClass("x");

  });

};

var flag = "off";

$("#run").click(function() {
  if (flag === "off") {
    flag = "on";
    $("#run").text("stop");
    run();
  } else {
    flag = "off";
    $("#run").text("run");
  }

});

function run() {
    setTimeout(function() {
      step();
      if (flag === "on") {run();}
    }, 5);
};

function test(x, y) {
  return $(".square[x='" + x + "'][y='" + y + "']").text() == "x" ? 1 : 0;
}

function step() {
  //debugger;
  $(".square").each(function() {

    var xx = parseInt($(this).attr("x"));
    var yy = parseInt($(this).attr("y"));
    var count = 0;

    //left
    if (xx > 1) {
      count += test(xx - 1, yy);
    }
    //right
    if (xx < columns) {
      count += test(xx + 1, yy);
    }
    //top
    if (yy > 1) {
      count += test(xx, yy - 1);
    }
    //bottom
    if (yy < rows) {
      count += test(xx, yy + 1);
    }
    //topleft
    if (xx > 1 && yy > 1) {
      count += test(xx - 1, yy - 1);
    }
    //topright
    if (yy > 1 && xx < columns) {
      count += test(xx + 1, yy - 1);
    }
    //bottomleft
    if (yy < rows && xx > 1) {
      count += test(xx - 1, yy + 1);
    }
    //bottomright
    if (yy < rows && xx < columns) {
      count += test(xx + 1, yy + 1);
    }

    $(this).attr('data-risk', (parseInt(count)));

  });
  $(".square[data-risk='0']").text("").removeClass("x");
  $(".square[data-risk='1']").text("").removeClass("x");
  $(".square[data-risk='4']").text("").removeClass("x");
  $(".square[data-risk='5']").text("").removeClass("x");
  $(".square[data-risk='6']").text("").removeClass("x");
  $(".square[data-risk='7']").text("").removeClass("x");
  $(".square[data-risk='8']").text("").removeClass("x");

  $(".square[data-risk='3']").text("x").addClass("x");

}