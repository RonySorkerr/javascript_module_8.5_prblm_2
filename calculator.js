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

function calculator(a, b, opeation) {
    if (opeation === 'add') {
        const result = add(a, b);
        return result;
    }
}

const output = calculator(4, 5, 'add');
console.log(output);