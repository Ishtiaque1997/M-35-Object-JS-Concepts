//object property has key and value
const bottle={
 color:'yellow',
 hold:'water',
 price:70,
 isCleaned:true
};

//getting the property keys
const keys=Object.keys(bottle);
// console.log(keys);

//getting the property values
const values=Object.values(bottle);
// console.log(values);

//getting keys and values together , returns in an array inside another array
const pairs=Object.entries(bottle);
// console.log(pairs)

// console.log(bottle)
//seal the object
Object.seal(bottle);

//freeze the object
Object.freeze(bottle);
bottle.price=100;//can update after seal but not after freeze
bottle.height=16;//cannot update after seal
delete bottle.isCleaned;//cannot delete after seal
// console.log(bottle);

