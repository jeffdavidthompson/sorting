// sortArray object produces an array of integers and sorts it
// the results of each iteration of the sort are displayed.

function sortArray(numItems) {

  // make a scrambled array of numItems numbers
 function makeArray(){
  this.numItems = numItems;
  scramArray = [];
  orderedArray = [];

  for (var i = 0; i < this.numItems; i++) {
    scramArray.push(Math.floor(Math.random() * 10));
  }
  return scramArray;
  } // makeArray()

  var numArray = makeArray();
console.log("random array: " + numArray);

  function bubbleSort(numArray) {
    var numLeft = numArray.length;
    var holdNum, newNum;

console.log("numLeft = " + numLeft);

    do {
      newNum = 0;
      for (var i = 1; i <= numLeft - 1; i++) {
        console.log("at: " + i + ": " + numArray[i]);
        if (numArray[i-1] > numArray[i]) {
          // swap(numArray[i-1] and numArray[i])
          holdNum = numArray[i - 1];
          numArray[i - 1] = numArray[i];
          numArray[i] = holdNum;
          newNum = i;
        } // swap elements
       }//for all elements remaining
       numLeft = newNum; // decrement number of items left

console.log(numArray);
        // display the array's contents as a number of blocks
        $.each(numArray, function(j, val){
          drawCubes(numArray[j], j);
          return val = numArray.length;
        });

     }// do
      while(numLeft > 0);
  } // bubblesort

  this.orderedArray = bubbleSort(scramArray);


} // sortArray

function showSort(number)
  {
    randArray = new sortArray(number);
   // randArray.bubbleSort(randArray.numArray);
  }

$( "#startbutton" ).click(function(){showSort(4);});
