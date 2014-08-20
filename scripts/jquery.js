drawCubes = function(numberOfCubes,row){
  $("#" + row).empty();
  for (var i = 1; i < numberOfCubes + 1; i++) {
    $("#" + row).append("<div></div>").fadeIn(3000);
  }
  $('.blockholder div').addClass('block');
}

