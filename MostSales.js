function top3(products, amounts, prices) {

    let productsWithRevenue = {};

    let productObjects = products.map((product, index) => {
        return {
            name: product,
            amount: amounts[index],
            price: prices[index]
        }
    });

    for (let i = 0; i < productObjects.length; i++) {
        productsWithRevenue[productObjects[i].name] = productObjects[i].amount * productObjects[i].price
    }

    let sortedProducts = Object.keys(productsWithRevenue).sort((a, b) => {
        return productsWithRevenue[b] - productsWithRevenue[a];
    })

    // return sortedProducts.slice(0, 3);
    return productsWithRevenue;
}

console.log(top3([ 'Cell Phones',
'Vacuum Cleaner',
'Computer',
'Printer',
'TVs',
'Laptops',
'Tablets',
'Chargers',
'Speakers',
'Games',
'Music CDs',
'Radios',
'Drones',
'Scooter',
'Keyboards',
'Mouses' ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]))