const mobiles = [
    {name: 'samsung', price: 240000, color: 'black', size: 6.5, camear: '10MB', earphone: 'Ulra Sound Quality'},
    {name: 'techno', price: 210000, color: 'black', size: 6.5, camear: '10MB', earphone: 'Ulra Sound Quality'},
    {name: 'xiaomi', price: 320000, color: 'black', size: 6.5, camear: '10MB', earphone: 'Ulra Sound Quality'},
    {name: 'apple', price: 120000, color: 'black', size: 6.5, camear: '10MB', earphone: 'Ulra Sound Quality'},
    {name: 'oppo', price: 150000, color: 'black', size: 6.5, camear: '10MB', earphone: 'Ulra Sound Quality'}
]

function getTheCheapest(list){
    let cheap = list[0]
    for(item of list){
        if(item.price < cheap.price){
            cheap = item;
        }
    }
    return cheap;
}

function getTheBestPhone(phones){
    let bestPrice = phones[0]
    for(const phone of phones){
        if(phone.price > bestPrice.price){
            bestPrice = phone;
        }
    }
    return bestPrice;
}

const best = getTheBestPhone(mobiles);
console.log('the best phone is : ' , best);




// const cheapest = getTheCheapest(mobiles);
// console.log('the cheapest is : ',  cheapest);