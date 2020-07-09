// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Solution 3

function findLongestWordLength(str) {   //1
  return Math.max(...str.split(" ")     //2
  .map(word => word.length));           //3
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


/*/

/ Notes

    //1 Initializes function that takes in a string as an argument

    //2
        The return ends function execution and specifies a value to be returned to the function caller.
        Source - [https://devdocs.io/javascript/statements/return]

        The Math.max() function returns the largest of zero or more numbers.
        Source - [https://devdocs.io/javascript/global_objects/math/max]

        The Math.max functions is possible because the words are converted to numbers with the . length method

        The str.split(" ") method will convert the string to an array and the space between then quotes will split the string by word. If there were no space it would split the string by character/letter

        The spread operator or (...) plays a big part in making this code work. If it were not used it would count the array ,created by the str.split(" ") method, as one single argument and return that argument as NaN (Not a number). The spread operator makes it possible to view all contents within the array as individual arguments.

        The map() method creates a new array with the results of calling a provided function on every element in the calling array.
        Source - [https://devdocs.io/javascript/global_objects/array/map]

        In this case the map method (a higher order function) is calling the word function on each item/word/index in the array and returns a new array of all the lengths of each word in the array. 

        It is good practice to use code that does not mutate the original array but makes a copy and returns the mutated copy instead. This forms part of functional programming

        Finally, once all the words in the array has been converted to their respective length values the Math.max funtion will select the highest number which in thi case is 6 and the word "jumped".




        What is a higher order function?
        A higher-order function is a function that can take another function as an argument, or that returns a function as a result

    
                                */