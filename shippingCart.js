const lists = [
    {name: 'Sunglass', price: 450, quantity: 5},
    {name: 'Shampoo', price: 250, quantity: 4},
    {name: 'Flower', price: 750, quantity: 4}
]

function cartTotal(products){
    let price = 0;
    for(const product of products){
        const itemsCost = product.price * product.quantity;
        price = price + itemsCost;
    }
    return price;
}

const shoppintCart = cartTotal(lists);
console.log(shoppintCart);