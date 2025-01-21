const products = [
	{
		name: 'apple',
		cost: 12
	},
	{
		name: 'orange',
		cost: 32
	},
	{
		name: 'pen',
		cost: 22
	},
	{
		name: 'notebook',
		cost: 89
	},
	{
		name: 'peach',
		cost: 18
	}
];

// part1

const basket1 = ['apple', 'apple', 'orange', 'apple'];

const basket1Cost = basket1.reduce((sum, basketProduct) => sum + products.find((product) => product.name === basketProduct).cost, 0);

console.log("basket1 costs", basket1Cost, "cents");

// part2
const basket2 = ['apple', 'pen', 'peach', 'apple', 'pen', 'peach', 'notebook', 'notebook', 'orange'];

const offers2 = [
	{
		name: 'apple',
		buy: 2,
		free: 1
	},
	{
		name: 'orange',
		buy: 3,
		free: 1
	}
];

let basketCounter2 = [];

const basket2Cost = basket2.reduce((sum, basketProduct) => {
    let currentCount = basketCounter2.find(basketItem => basketItem.name === basketProduct);
    if (!currentCount) {
        currentCount = {
			name: basketProduct,
			count: 1
		};
		basketCounter2.push(currentCount);
    } else {
		currentCount.count += 1;
	}

    const offer = offers2.find((offer) => offer.name === basketProduct);
	const product = products.find((product) => product.name === basketProduct);
    if (!offer) {
		sum += product.cost;
	} else {
		if (currentCount.count < offer.buy) {
			sum += product.cost;
		} else {
			sum -= product.cost * (offer.free - 1);
			currentCount.count = 0;
		}
	}
	return sum;
}, 0);

console.log("basket2 costs", basket2Cost, "cents");

// part3

const basket3 = ['apple', 'apple', 'orange', 'apple', 'orange', 'orange', 'apple', 'apple'];

const offers3 = [
	{
		name: 'apple',
		buy: 5,
		free: 2
	},
	{
		name: 'orange',
		buy: 8,
		free: 2
	}
];

let basketCounter3 = [];

const basket3Cost = basket3.reduce((sum, basketProduct) => {
    let currentCount = basketCounter3.find(basketItem => basketItem.name === basketProduct);
    if (!currentCount) {
        currentCount = {
			name: basketProduct,
			count: 1
		};
		basketCounter3.push(currentCount);
    } else {
		currentCount.count += 1;
	}

    const offer = offers3.find((offer) => offer.name === basketProduct);
	const product = products.find((product) => product.name === basketProduct);
    if (!offer) {
		sum += product.cost;
	} else {
		if (currentCount.count < offer.buy) {
			sum += product.cost;
		} else {
			sum -= product.cost * (offer.free - 1);
			currentCount.count = 0;
		}
	}
	return sum;
}, 0);

console.log("basket3 costs", basket3Cost, "cents");