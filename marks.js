const disha = 56;
const rahim = 50;
if(rahim > disha){
    console.log('rahim is a good student');
}
else{
    console.log('disha is a good student');
}

// bigger inside a function


function maxNumb(num1, num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}

console.log(maxNumb(45, 58));