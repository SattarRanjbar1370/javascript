// online store on the console !!!!!

let listShoping, products, productCounter, shopingCounter, productCondition, productName, productPrice, id, productObject;

products = new Array(
    { id: 1, name: 'pen', price: 8000 },
    { id: 2, name: 'book', price: 12000 },
    { id: 3, name: 'body splash', price: 9000 },
    { id: 4, name: 'note book', price: 14000 }
);
productCondition = confirm('Do you have products to introduce?');
productCounter = 4;
while (productCondition == true) {
    productName = prompt('enter the product name:');
    id = productCounter + 1;
    productPrice = Number(prompt('enter the product price:'));
    while (isNaN(productPrice)) {
        productPrice = Number(prompt('invalid data, please try again \nEnter the price correctly:'));
    }
    productObject = {
        id: id,
        name: productName,
        price: productPrice
    }
    products.push(productObject);
    productCondition = confirm('Do you have products to introduce?');
    productCounter++;
}