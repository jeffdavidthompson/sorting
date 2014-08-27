
//Fill an array with random numbers between 1 and 'range'
randomizeArray = function(array,range){
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor((Math.random() * range) + 1)
  };
}

//draws out all cubes in the current array
drawAllCubes = function(array){
  console.log(array)
  //go through each row
  for (var j = 0; j < array.length; j++) {
    $("#" + j).empty();
    console.log("empty row " + j)
    //when in each row, fill with cubes
    for (var k = 1; k <= array[j]; k++) {
      $("#" + j).append("<div></div>");
      console.log("adding a div to row " + k)
      $('.blockholder div').addClass('block');
      $('.block').fadeIn();
    }
  }
}

//swap an array element with the next element in the index
swap = function(swapArray,index) {
  var temp = swapArray[index];
  swapArray[index] = swapArray[index + 1];
  swapArray[index + 1] = temp;
}

//bubblesort an array
bubbleSort = function(array){
  sorted = false
  while (sorted == false) {
    sorted = true
    for (i = 0; i < array.length - 1; i++) {
      
      if (array[i] > array[i+1]) {
        swap(array,i);
      }
    }
    sorted = true
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
      sorted = false;
      break;
      }
    }
  }
 }

a = [0,0,0,0]

randomizeArray(a,10)

 bubbleSort(a)



$( "#startbutton" ).click(function(){

  drawAllCubes(a);;
  }
);