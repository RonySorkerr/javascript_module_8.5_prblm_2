function layerDiscount(quantity){
    const oneToHundred = 100;
    const hundredto200 = 90;
    const restRemaining = 70;

    if(quantity <= 100){
        const total = quantity * oneToHundred;
        return total;
    }
    else if(quantity <= 200){
        const oneToHundredTotal = 100 * oneToHundred;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * hundredto200;
        const total = oneToHundredTotal * remainingTotal;
        return total;
    }
    else{
        const oneToHundredTotal= 100 * quantity;
        const hundredto200Total = 200; 
        // const restRemainingPrice = 200 * restRemaining;
        const restRemainingQuantity = quantity - 200;
        const restRemainingTotal = restRemainingQuantity * restRemaining;
        const total = oneToHundredTotal + hundredto200Total + restRemainingTotal;
        return total;
    }
}

const price = layerDiscount(90);
console.log('the price is : ' , price);