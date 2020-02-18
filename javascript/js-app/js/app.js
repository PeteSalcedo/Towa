import {Users} from './users';


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
	this.users.getUsers().then(data => console.log(data));
}
}
const app = new App();


