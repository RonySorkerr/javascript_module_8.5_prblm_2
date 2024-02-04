const lists = [
    {name: 'Sunglass', price: 450},
    {name: 'Shampoo', price: 250},
    {name: 'Flower', price: 750}
]

function priceList(items){
    let total = 0;
    for(const item of items){
        total = total + item.price;
    }
    return total;
}

const price = priceList(lists);
console.log('the price of your items is : ' , price);