sorting
=======

For the sorting project Jeff Thompson and I teamed up. There was a rough division of labor with Jeff handling the HTML, CSS, and jQuery and I came up with the
Javascript file.

1. Approach - The HTML, CSS, and jQuery were geared towards producing a four-row display that would be used to show an array of integers in range 1..10, with each integer being represented by a number of squares in the row corresponding to an element in the array. We limited ourselves to an array holding four integers for the assignment, but the code is written to allow any number of elements with simple modification. We came up with a sortArray object whose constructor would receive the number of elements in the array and then produce an array of random integers between 1 and ten. It is possible for the array to contain non-unique integers. The object would then sort the array using bubblesort, but any algorithm could have been used. Our intention was to display a new copy of the array for each iteration of the sort function's main loop, but even with a bubblesort, a 4-integer array takes just a few milliseconds, so all we see is the final results. Running the code in a debugger shows that the iterations do happen, we just can't see them. It might be sacrilege, but Javascript could use a good sleep() function. Once we got the original code written and more-or-less running Jeff and I went into pair programming mode to try an dget the timing right.

2. References - We used the normal references; Brooke, Ryan, and Dexter along with the textbooks and the web. Especially www.w3schools.com, api.jquery.com, and stackoverflow.com. We also discussed approaches with other students.
