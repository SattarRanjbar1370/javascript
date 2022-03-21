// shop room

let shopRoom = [ // array back end for shoping
    { id: 1, name: 'pen', price: 8000 },
    { id: 2, name: 'book', price: 12000 },
    { id: 3, name: 'body splash', price: 9000 },
    { id: 4, name: 'note book', price: 14000 },
    { id: 1, name: 'Pencil', price: 8000 },
    { id: 2, name: 'tractor', price: 12000 },
    { id: 3, name: 'Mac Book', price: 9000 },
    { id: 4, name: 'watch', price: 14000 }
];

console.log(shopRoom);

let cartUser = [    // array frant for user cart
    { id: 2, name: 'book', price: 12000 },
    { id: 2, name: 'tractor', price: 12000 }
];

console.log(cartUser);

let receiveBuy, nameItem, selectItem, addToCartUser;


let loadLoop = confirm("Click 'ok' if you want to edit your shoping cart");


while (loadLoop == true) {
    selectItem = prompt('Enter \'1\' if you want to add and \'2\' if you want to delete');
    if (selectItem == 1) {
        nameItem = prompt('please enter name item');
        receiveBuy = shopRoom.findIndex(function (user) {
            return user.name === nameItem
        });
        addToCartUser = shopRoom[receiveBuy];
    }
    cartUser.unshift(addToCartUser);
    loadLoop = confirm("Click 'ok' if you want to edit your shoping cart");
}

console.log(cartUser);

