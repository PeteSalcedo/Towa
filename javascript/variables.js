var foo = 20;
console.log(`foo: ${foo}`)

let bar=50;
foo = (function(foo){
let bar = 50;
foo = foo +10;
console.log(`inside function foo: ${foo}`)
return foo;
})(foo);

console.log(`end foo: ${foo}`)
console.log(`bar: ${bar}`)

