drawCubes = function(numberOfCubes,row){
  $("#" + row).empty();
  for (i = 1; i < numberOfCubes + 1; i++) {
  $("#" + row).append("<div></div>");
  }
  $('.blockholder div').addClass('block');
}

