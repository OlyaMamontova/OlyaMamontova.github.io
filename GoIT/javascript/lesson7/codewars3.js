/*Write a method make_lazy that takes in a function (symbol for Ruby)
and the arguments to the function and returns another function
(lambda for Ruby) which when invoked, returns the result of the
original function invoked with the supplied arguments.
 */

var add = function (a, b) {
    return a + b;
};

var double = function (n) {
    return n * 2;
};

var make_lazy = function () {
    var args = arguments;
    return function(){
        return args[0].apply(args, [].slice.call(args, 1));
    };

};
var lazy_sum = make_lazy(add, 2, 3);
console.log(lazy_sum());