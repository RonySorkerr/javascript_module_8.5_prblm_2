function discountedPrice(nubmerOfTickets){
    if(nubmerOfTickets === 100){
        const price = nubmerOfTickets * 100;
        return price;
    }
    else if(nubmerOfTickets <= 200){
        const price = nubmerOfTickets * 90;
        return price;
    }
    else{
        const price = nubmerOfTickets * 70;
        return price;
    }
}

const totalPrice = discountedPrice(10);
console.log('your total discounted price is : ' , totalPrice);