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

const newCars4 = (cars, idProp) =>  cars.reduce((acc, cur) => {
    acc[cur[idProp]] = cur.year;
    return acc;
}, {});

const carsTransformed = newCars4(cars, "brand");

console.log('carsTransformed', carsTransformed);