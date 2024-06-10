
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
