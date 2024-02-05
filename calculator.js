// function add(a, b) {
//     const sum = a + b;
//     return sum;
// }

// function subs(a, b) {
//     const subs = a - b;
//     return subs;
// }

// function myl(a, b) {
//     const mul = a * b;
//     return mul;
// }

// function div(a, b) {
//     const div = a / b;
//     return div;
// }

// function calculator(a, b, opeation) {
//     if (opeation === 'add') {
//         const result = add(a, b);
//         return result;
//     }
//     else if(opeation === 'subs'){
//         const result = subs(a, b);
//         return result;
//     }
//     else if(opeation === 'myl'){
//         const result = myl(a, b);
//         return result;
//     }
//     else if(opeation=== 'div'){
//         const result = div(a, b);
//         return result;
//     }
//     else{
//         return "you can only use 'add', 'subs', 'mul', 'div' operations only";
//     }
// }

// const output = calculator(4, 5, 'myl');
// console.log(output);

//calculator with switch statement

function add(a, b) {
    const sum = a + b;
    return sum;
}

function subs(a, b) {
    const subs = a - b;
    return subs;
}

function myl(a, b) {
    const mul = a * b;
    return mul;
}

function div(a, b) {
    const div = a / b;
    return div;
}

function calculator(a,b, operation){
    switch(operation){
        case 'add':
            return add(a, b);
        case 'subs':
            return subs(a,b);
        case 'myl':
            return myl(a,b);
        case 'div':
            return div(a,b);
        default:
            return "invalid operation provided";
    }
}

const output = calculator(1, 2, 'add')
console.log(output);