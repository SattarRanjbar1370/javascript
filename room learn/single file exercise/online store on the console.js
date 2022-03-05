// online store on the console !!!!!

/////////////// variable ////////////////

let listShoping, products, productCounter, shopingCounter, productCondition, productName, productPrice, id, productObject;

////////////////////////////////////////
//////////// product list //////////////
////////////////////////////////////////

products = new Array(
    { id: 1, name: 'pen', price: 8000 },
    { id: 2, name: 'book', price: 12000 },
    { id: 3, name: 'body splash', price: 9000 },
    { id: 4, name: 'note book', price: 14000 }
);

//////////// product loop //////////////

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

///////////////////////////////////////////
//////////// product display //////////////
///////////////////////////////////////////

/////////////// variable //////////////////

let bodyTag, divContiner, divBox, displayUser, varDisplay;

products.forEach(function (item) {
    displayUser = 'id: ' + item.id + '\t\tproduct: ' + item.name + '\t\t\tprice: ' + item.price;
    console.log(displayUser);
    varDisplay = '<div class="box" id="box">' + displayUser + '</div>';
});
bodyTag = document.getElementById('body').innerHTML = '<div class="continer" id="continer"></div>';
divContiner = document.getElementById('continer').innerHTML = varDisplay;

///////////////////////////////////////////
////////////// user shoping ///////////////
///////////////////////////////////////////

