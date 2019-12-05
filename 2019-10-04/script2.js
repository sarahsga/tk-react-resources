/*

[5,3,1,7,9] -> 16 24


1 + 3 + 5 + 7 = 16
1 + 3 + 5 + 9 = 18
1 + 3 + 7 + 9 = 20
1 + 5 + 7 + 9 = 22
3 + 5 + 7 + 9 = 24

1,3,5,7
3,5,7,9

1. make a copy of the array
2. find the smallest number from the array copy
3. remove the smallest number from array copy.
4. sum the remaining items of the array. That is the max
5. make a copy of the array
6. find the largest number from the array copy
7. remove the largest number from array copy.
8. sum the remaining items of the array. That is the max

// how to create copy of an array - Spread Operator






*/













function makeStaircase(noOfStairs) {

    // i=0 ... noOfSpaces -> 3 ... noOfHashes -> 1

    for (let i = 0 ; i < noOfStairs ; i++) {
        let str = "";
        const noOfSpaces = noOfStairs - 1 - i;
        const noOfHash = i + 1;

        for (let j = 0; j < noOfSpaces ; j++) {
            str += " ";
        }

        for (let j = 0; j < noOfHash ; j++) {
            str += "#";
        }
        console.log(str);

    }
    // console.log("####")
    // console.log("####")
    // console.log("####")
    // console.log("####")

    // console.log("   #")
    // console.log("  ##")
    // console.log(" ###")
    // console.log("####")
}

// i -> spaces -> 3-i
// 0 -> 3 
// 1 -> 2
// 2 -> 1
// 3 -> 0

// i -> hash -> i + 1
// 0 -> 1
// 1 -> 2
// 2 -> 3
// 3 -> 4


makeStaircase(5);