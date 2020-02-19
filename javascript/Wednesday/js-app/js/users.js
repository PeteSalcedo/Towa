export class Users{
	constructor(){
	this.path = 'http://jsonplaceholder.typicode.com/users'
	}
  async getUsers(){
	const data = await fetch(this.path);
	  return await data.json();
  }
}
