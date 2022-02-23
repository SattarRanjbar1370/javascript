// Website shopping cart

let shoppingCart, total;
total = 0;
shoppingCart = [25000, 32000, 10000, 140000, 3000];

for (var i = 0; i < shoppingCart.length; i++) {
    console.log('cart ' + i + ' : ' + shoppingCart[i]);
    total += shoppingCart[i];
}

console.log(total);