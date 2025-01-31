const cars = [
    {
        brand: "Audi",
        year: 1999,
        price: 12222
    },
    {
        brand: "Nissan",
        year: 2003,
        price: 24222
    }
];

//Η απάντηση σας να είναι της μορφής

const transform = (cars, idProp) => cars.reduce((acc, cur) => {
    acc[cur[idProp]] = {
        year: cur.year,
        price: cur.price
    };
    return acc;
}, {});

const transformedCars = transform(cars, "brand");

console.log("transformedCars", transformedCars);