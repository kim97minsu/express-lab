const cars = [
	{make:'Nissan', model:'Leaf', year:'2018', color:'White', isHybrid: true},
	{make:'Toyota', model:'Prius', year:'2019', color:'Black', isHybrid: true},
	{make:'Honda', model:'S2000', year:'2000', color:'Yellow', isHybrid: false},
	{make:'Subaru', model:'WRX', year:'2005', color:'Blue', isHybrid: false}
]

module.exports = { 
	getAll: function() {
		return cars;
	}
};