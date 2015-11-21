/* 
 Your friend is terrible at naming objects. 

Without changing the objects you want to add a description property 
to each object with a default value of "TODO: GIVE ME A DESCRIPTION" 
(the entire string), to eventually attach some explanation to these objects. 
The three objects have already been pre-loaded for you, so they will be 
available in your main code editor.
 */

var widget = {
  foo: "bar"
};

var gadget = {
  bar: "foo"
};

var thingamabob = { 
  bar: "food"
};

Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";

console.log(widget.description);
console.log(gadget.description);
console.log(thingamabob.description);


