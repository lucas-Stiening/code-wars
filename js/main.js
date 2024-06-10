
// kata 8kyu: Given a non-empty array of integers, return the result of multiplying the values together in order.
// my proposed solution :
function grow(x){
    return x.reduce((acc,c) => acc * c, 1)
    }
/* kata 8kyu: After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d). */

// my proposed solution :
function rentalCarCost(d) {
    if(d >= 7){
        return ((d * 40) - 50)
    }else if(d >= 3){
        return (d * 40) - 20 
    }else{
        return d * 40
    }
  }
/* kata 8kyu: At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them. You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]. */

// my proposed solution :
function differenceInAges(ages){
    let old = Math.max(...ages)
    let young = Math.min(...ages)
    let dif = old - young
    return [young, old, dif]
}

/* kata 8kyu: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

// my proposed solution :

function sumMix(x){
    return x.reduce((acc, c) => acc + Number(c), 0)
}
/* kata 7kyu: Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
Happy Coding! */

// my proposed solution :
function squareDigits(num){
    let arr = num.toString().split("").map(Number);
    for( let i = 0; i < arr.length; i++){
        arr[i] = (arr[i] ** 2)
    }
    let newNum = arr.reduce((acc, c) => acc + String(c))
    return Number(newNum)

}

/* kata 8kyu: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
 */

// my proposed solution :
let summation = function (num) {
    let result = num
    while (num > 0) { 
        num--; // decrementation by 1 at each iteration
        result += num;
    }
    return result
}

/* kata 8kyu: Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
Examples:
1: -1
14: -14
-34: 34
 */

// my proposed solution :
function opposite(number) {
    let opp = number * - 1
    return opp
  }

 /*  kata 8kyu:  You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */


// my proposed solution :
function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        sum += arr[i]
      }
    }
    return sum
  }

   /*  kata 8kyu: Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/


// my proposed solution :
function noSpace(x){
return x.split(' ').join('')
}

   /* kata 8kyu: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/


// my proposed solution :
function makeNegative(num) {
    if(num > 0){
      return num * -1
    }else{
      return num
    }
  }