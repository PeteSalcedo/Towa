console.log('closures')

const foo = function(a){
	return function(b){
	return a+b
	}
}
const baz = foo()
console.log(baz)
console.log(baz(4))
console.log(baz(7))

