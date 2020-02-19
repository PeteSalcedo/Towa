class Users
console.log(peteruser{
	nstructor(id,name,username,email){
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
	}

	get Username (){
		return this.username
	}
	
	get Email(){
		return this.email
	}
	get Name(){
		return this.name

	}

	set Name(newName){
		this.name = newName;
	}
	set Email(newEmail){
		this.email = newEmail;

	}
}

const peteruser = new Users(1,'peter','petesadiaz','peter.salcedo.diaz@gmail.com')

console.log(peteruser)
peteruser.Name = 'luis'
console.log(peteruser)

