const Company = function(name,catchPhrases,bs){
	this.name=name;
	this.catchPhrases = catchPhrases;
	this.bs = bs;
}
Company.prototype.getName = function(){
	return this.name;

}
Company.prototype.setName = function(name){
	this.name = name;
}

const Address = function(street,suite,city,zipcode){
	this.street=street;

}

module.exports ={
	Company:Company,
	Address:Address
}
