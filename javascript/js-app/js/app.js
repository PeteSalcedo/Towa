import {Users} from './users';

let name = document.getElementById("name")
let username = document.getElementById("username")
let email = document.getElementById("email")

class App{
   constructor(){
	   console.log('app.constructor()')
	this.users = new Users()
	this.getUsers();

	document.querySelectorAll('li>a').forEach(
	  (item)=> {
		  console.log(item)
		item.addEventListener('click',this.menuClick);}
	)

}
	menuClick(e){
	document.querySelectorAll('li').forEach(item=>item.classList.remove('active'));
		e.target.parentNode.classList.add('active');
		var menu = e.target.getAttribute('menu');
	document.querySelectorAll('.routes>div').forEach(item =>item.classList.remove('active'))
	document.querySelector(`.routes>div.${menu}`).classList.add('active');
	}
getUsers(){
	this.users.getUsers().then(data => data.forEach(this.printToDom))
}
printToDom(data){
	let card = 
`
<div class="card">
	<dl>
	<dt>Name</dt> <dd>${data.name}</dd>
	<dt>Email</dt><dd>${data.email}</dd>
	</dl>
	<h3> Adress</h3>
	<dl>
	  <dt>Street</dt><dd>${data.street}</dd>
	 <dt>City</dt><dd>${data.city}</dd>
	</dl>
	</div>`
	let div = document.createElement('div');
	div.innerHTML=card
	document.querySelector('.users').appendChild(div);
}


}

const app = new App();

