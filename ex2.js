const cars = [
	{
		brand: 'audi',
		year: 2000
	},
	{
		brand: 'fiat',
		year:2002
	}
];  

const newCars = cars.reduce((acc, cur) => {
	acc.push({
		...cur,
		serviced: true
	});
	return acc;
}, []);

console.log("newcars", newCars);