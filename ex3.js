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

//Η απάντηση σας να είναι της μορφής 

const newCars3 = cars.reduce((acc, cur) => {
    acc.push({
        [cur.brand]: cur.year
    });
    return acc;
}, []);

console.log("newCars3",  newCars3);