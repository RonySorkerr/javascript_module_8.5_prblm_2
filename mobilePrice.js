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
        if(item < cheap){
            cheap = item;
        }
    }
    return cheap;
}

const cheapest = getTheCheapest(mobiles);
console.log('the cheapest is : ',  cheapest);