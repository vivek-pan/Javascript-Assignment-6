//Write a javascript function find_largest to return the nth largest number in an array
//assume elements index starts from 1 not 0

function find_Nth_Largest(arr, n){
    
    parseInt(n);
    //array.sort() is used to sort array of strings. For numbers we have to add a compare function inside sort.  
    arr.sort((a,b) => b -a );
    // console.log(arr);
    return arr[n-1];
}

const prompt = require('prompt-sync')();

let size = prompt("Enter array size ");

const arr = [];
for(i=0; i<size; i++){
    arr[i] = prompt(`Enter element ${i+1} :`);
}

let n = prompt("Enter the value of n to find nth largest number ");

let result = find_Nth_Largest(arr,n);

console.log(result);
