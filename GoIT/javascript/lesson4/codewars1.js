// return a function that returns n

function always (n) {
    return function () { return n };
}
console.log(always(true))