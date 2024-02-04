function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const arrayNumbers = [54,58,5,8,5,96,4,9,5,785,59,4,5];
const min = getMin(arrayNumbers);
console.log('the min number is : ' , min);