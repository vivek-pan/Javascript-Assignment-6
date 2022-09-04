function compare(a, b){

    if(Math.floor(a%2) == 0 && Math.floor(b%2) ==0){
        //console.log(a+'-'+b);
        return a+'-';
    }
    else{
        return a;
    }
}

function putDashes(number){

    let result = "";
    for(i=0; i<number.length-1; i++){
        result += compare(number.charAt(i),number.charAt(i+1));
    }

    //console.log(number.charAt(number.length-1));

    return result+number.charAt(number.length-1);
}

const prompt = require('prompt-sync')();

let number = prompt("Enter number ");

result = putDashes(number);
console.log(result);