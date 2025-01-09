//1 reversing a string
/*
    function reverse_string(str) {
        let result = "";
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
    const originalString = "Hello, World!";
const reversedString = reverse_string(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

*/

// 2counting the number of words in a string
/*
let countCharaters = function (str) {
    let count = 0;
    for ( let i = 0; i < str.length; i++) {
    count +=1;
        
    }
    return count;
}

const originalString = "Hello, World!";
const count = countCharaters(originalString);
console.log(count);
*/


//3 capitalizing each word
/*
function capitaliseFirstWord (sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) 
    {
        if(words[i].length>0){
            words[i]=words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    } 
    return words.join(' ');
    }
    const sentence = "hello world! this is a test.";
    const capitalizedSentence = capitaliseFirstWord(sentence);
    console.log(capitalizedSentence);

*/


// 4 finding the highest and lowest value in an array
/*
function findMax(arr){
    let max = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0]
    for(let i = 1; i <arr.length;i++){
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}

const numbers = [34, 78, 12, 5, 89, 23, 67];
const max = findMax(numbers)
const min = findMin(numbers)
    console.log(max);
    console.log(min);
    */
   
// sum of numbers in an array
    /*function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i]
}
return sum
}

const numbers = [34, 78, 12, 5, 89, 23, 67];
const max = sumArray(numbers);
console.log(max);
*/

// a function that filters out elements from an array based on a given condition
    /*function filterArray(arr, condition) {
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}
const numbers = [1, NaN, true, 4, "steven","joseph"];
const isString = (value) => typeof value !== "string";
console.log(filterArray(numbers, isString));
*/


// Factorial: Write a function to calculate the factorial of a given number.
/*function factorial(n) {
    if (n < 0){
        return 
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
       result *= i 
        
    }
    return result;
}

let num = 5;
console.log(factorial(num));
*/

// Prime Number Check: Create a function to check if a number is prime or not.
/*function isPrime(n){
    if (n<=1 || typeof n !== "number" || Number.isNaN(n))
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0){
            return false
        }
}return true;
}


console.log(isPrime(NaN));
*/

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
/*
function Fibonacci(n){
    if (n <=0){
        return []
    }
    if (n == 1){
        return [0]
    }
    if (n === 2){
        return [0,1]
    }

let sequence = [0,1];
for (let i = 2; i < n; i++) {
    let nextTerm = sequence[i-1]+ sequence[i-2];
    sequence.push(nextTerm);
}
return sequence;
}
*/