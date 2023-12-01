var obj = {name : "hilal", age : 21, hasPets : false};
function printAllValues(obj) {
 return Object.values(obj);
}
function printAllKeys(obj) {
 return Object.keys(obj);
}

console.log(printAllValues(obj));
console.log(printAllKeys(obj));