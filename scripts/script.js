// sortArray object produces an array of integers and sorts it
// the results of each iteration of the sort are displayed.

function sortArray(numItems) {

  // make a scrambled array of numItems numbers
 function makeArray(){
    scramArray = [];

    for (i = 0; i < this.numItems; i++) {
      scramArry.push(Math.floor(Math.random() * 100));
      return scramArray;
    }
  } // makeArray()

  var numArray = makeArray();

  function bubbleSort(numArray) {
      var numLeft = length.this.numArray;
      var holdNum, newNum;

      do {
        newNum = 0;

        for (i == 1; i <= numLeft -1; i++) {

          if (numArray[i-1] > numArray[i]) {
            // swap(numArray[i-1] and numArray[i])
            holdNum = numArray[i - 1];
            numArray[i - 1] = numArray[i];
            numArray[i] = holdNum;
            newNum = i;
          } //if numArray[i - 1] greater than numArray[i]
         }//for

         numLeft = newNum; // decrement number of items left

         // display the array's contents as a number of blocks
        $.each(numArray, function(j, val){
          drawCubes(numArray[j], j);
          return val = numArray.length;
        });

       }// do
      while(numLeft > 0);

  } // bubblesort

} // sortArray

function showSort(number)
  {
    randArray = new sortArray(number);
    randArray.bubbleSort(randArray.numArray);
  }

$( "#startbutton" ).click(function(){showSort(4);});