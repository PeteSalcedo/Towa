console.log('arrays')
/*
let numbers = [1,2,3,4,5,12,45,67]

let filteredNums = numbers.filter((item,idex,arr)=>{
	let multiplosdedos = [];
	if(item % 2 == 0){
	multiplosdedos.push

	}
	
	return multiplosdedos;

})

console.log(filteredNums)


const x = (item) => item%2 === 0;

let result = numbers.filter (x)
console.log(`numbers: ${numbers}`)

console.log(`result: ${result}`)

-------------Map-----------------*/
/*
const item = [1,2,3,4,5,6,6,7]

const x2 = (item) =>{
	return item * 2
}


console.log(item.map(x2))
*/

const nuevoarray = [1,2,3,4,5,6,7,8,9,10,12,14,15,67,98]
/*
function numerosparesx10(array){
	return array.filter(i => i % 2 === 0).map(i * 2) 
}
numerosparesx10(nuevoarray)
*/

//solo la suma de numeros inpares

let numerosInpares = nuevoarray.filter(x => x % 2 !== 0)
let sumadenumerosinpares = numerosInpares.reduce()

