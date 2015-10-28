/*
Implement a function createSecretHolder(secret) which accepts
any value as secret and returns an object with ONLY two methods
 */
function createSecretHolder(secret) {
    var obj = {
        getSecret: function(){
            return secret;
        },
        setSecret: function(value){
            secret = value;
        }
    };
    return obj;
}
var obj = createSecretHolder(5);
console.log(obj.getSecret()); // returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // returns 2