// online store on the console !!!!!

let listShoping, products, productCounter, shopingCounter, productCondition, productName, id, productObject;

products = new Array(
    { id: 1, name: 'pen' },
    { id: 2, name: 'book' },
    { id: 3, name: 'body splash' },
    { id: 4, name: 'note book' }
);
productCondition = confirm('Do you have products to introduce?');
productCounter = 3;
while (productCondition == true) {
    productName = prompt('enter the product name:');
    id = productCounter + 1;
    productObject = {
        id: id,
        name: productName
    }
    products.push(productObject);
}