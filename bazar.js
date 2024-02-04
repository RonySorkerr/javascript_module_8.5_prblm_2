// Gone to bazar bought some azar;;;;;

function bazar(chalKg, dalKg, morichKg){
    const chalPrice = 62;
    const dalPrice = 120;
    const morichPrice = 350;


    const totalChalPrice = chalKg * chalPrice;
    const totalDalPrice = dalKg * dalPrice;
    const totalMorichPrice = morichKg * morichPrice;


    const ultimatePrice = totalChalPrice + totalDalPrice + totalMorichPrice;
    console.log(ultimatePrice);
    return ultimatePrice;
}

const chalNeeded = 10;
const dalNeeded = 10;
const morichNeeded = 10;

const totalPrice = bazar(chalNeeded , dalNeeded , morichNeeded);
console.log('bazar total is : ' + totalPrice);