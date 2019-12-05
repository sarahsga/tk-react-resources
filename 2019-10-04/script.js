function addArrayNumbers(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

/* Pseudocode
1. assume an array arr
2. let sum equal to first item of arr
3. let i = 1
4. if i < arr.length, go to step 5. Otherwise go to step 6
5. sum = sum + arr[i];
6. Go to step 4
7. Exit

*/


// addArrayNumbers([1,2,3])

// [1,2,3] -> 6

// [1,2,3] -> 6

// Steps:
//     1+2 = 3
//     3+3 = 6

// [5,6,7,1] -> 19

//     5 + 6 = 11
//     11 + 7 = 18
//     18 + 1 = 19

// Write a program that sorts an array of numbers

function sortArray(arr) {
  let sortedArray = [];

  for (let i = 0; i < arr.length + sortedArray.length; i++) {
    let min = getMin(arr);
    let smallestNumbIndex = arr.indexOf(min);

    arr.splice(smallestNumbIndex, 1);
    sortedArray.push(min);
  }
  console.log(sortedArray)
  return sortedArray;
}

sortArray([4, 5, 2, 3, 7]);

/*
4 < 5 ? true -> push -> [4]
5 < 3 ? false -> unshift -> [5,4]
3 < 7 ? true -> push -> [5,4,3]

7 < 3 ? false -> unshift -> [7,]

*/
// [4]

// sortArray([4,5,3,7])

function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// [4,5,3,7] -> [3,4,5,7]

// 1. identify smallest number
// 2. let indexMin be the smallest number's index
// 3. let indexSecond be indexMin + 1
// 4.


// Create a program that finds the sum of all numbers in an array

function sumArrayItems(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}


function dfsgf(arr) {
    let sum;

    return sum;
}

[4,5,6] -> 15
[11,8,4,15] -> 38

/*

1. add first two items
2. add the next item to the answer
3. if index is < array length, repeat step 2

*/

0
[1, 2, 3, 5, 19, 4] -> 6

// Write a program that finds the largest number in an array

[3,5,10,4] -> 10
[7,5, 7, 6, 3] -> 7

function findMax(arr) {
    let max = arr[0];

    for(let i=1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

/*

1. check first item. Assume it is max
2. check next item. if it is greater than previous max, then it will become my new max
3. if there is still another item in array, repeat step 2.

*/


// Write a program that finds the smallest number in an array


// Write a program that finds the largest word in a sentence

function findLargestWord(sentence) {

    let words = sentence.split(' ');
    let largestWord = words[0];

    for (let i =1; i< words.length; i++) {
        if(words[i].length > largestWord.length) {
            largestWord = words[i];
        }
    }

    return largestWord;
}

[3,5,4] -> 5
["once", "upon", "a", "time"] -> "once"

/*

1. break the sentence into words
2. assume first word to be the largest
3. go to next word. if next word is larger than previous largest, then it is the new large
4. repeat step 3 till the end of array

*/

"Once upon a time" -> "Once"
"honesty is the best policy" -> "honesty"


// Write a program that reverses an array

function reverse(arr) {
    let reversedArr;

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }

    return reversedArr;
}

[1,2,3,4] -> [4,3,2,1]
[3,2,5] -> [5,2,3]


// Write a program that checks if a word is a palindrome

function checkPalindrome(word) {
    let isPalindrome;
    let reverseWord = reverse(word);

    if(word === reverseWord) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome;
}

"maham" -> true
"sarah" -> false

/*

1. see word in original form
2. see word in reverse form
3. compare original and reverse. Return true if they are equal

*/





/*

1. start from last array item
2. push it into reversedArr array
3. repeat step 2 till array index 0

*/








// [ [4,3,6],[1,2,8,5],[11,8,5,2],[3,4,5,4] ] (Basic Algorithm - largest number of arrays)
// [ [4,3,6],[1,2,8,5],[11,8,5,2],[3,4,5,4] ] -> [6, 8, 11, 5]


