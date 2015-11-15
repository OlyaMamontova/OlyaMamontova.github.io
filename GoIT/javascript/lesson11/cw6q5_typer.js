/*Typer.js
 Type checking in JavaScript

 */
var typer = (function(x) {

    return {
        isNumber: function(x){return (typeof x === 'number' || x instanceof Number) && (!isNaN(x));},
        isString: function(x){return typeof x === 'string' || x instanceof String;},
        isArray: function(x){return x instanceof Array;},
        isFunction: function(x){return typeof x === 'function';},
        isDate: function(x){return x instanceof Date;},
        isRegExp: function(x){return x instanceof RegExp;},
        isBoolean: function(x){return typeof x === 'boolean' || x instanceof Boolean;},
        isError: function(x){return x instanceof Error;},
        isNull: function(x){return x === null;},
        isUndefined: function(x){return typeof x === 'undefined';}
    };
}(null));