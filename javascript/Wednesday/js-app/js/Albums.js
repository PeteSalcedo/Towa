export class Albums{
	constructor(){
	this.path = 'http://jsonplaceholder.typicode.com/albums'
	}
async getAlbums(){
	const data = await fetch(this.path);
	return await data.json();
}

}
