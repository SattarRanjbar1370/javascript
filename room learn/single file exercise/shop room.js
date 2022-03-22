// shop room

let shopRoom = [ // array back end for shoping
    { id: 1, name: 'pen', price: 8000 },
    { id: 2, name: 'book', price: 12000 },
    { id: 3, name: 'body splash', price: 9000 },
    { id: 4, name: 'note book', price: 14000 },
    { id: 5, name: 'Pencil', price: 7000 },
    { id: 6, name: 'tractor', price: 12000 },
    { id: 7, name: 'Mac Book', price: 1500000 },
    { id: 8, name: 'watch', price: 14000 }
];
console.log(shopRoom);
let cartUser = [    // array frant for user cart
    { id: 2, name: 'book', price: 12000 },
    { id: 2, name: 'tractor', price: 12000 }
];
console.log(cartUser);
let receiveBuy, nameItem, selectItem, addToCartUser, cartUserTest;
let loadLoop = confirm("Click 'ok' if you want to edit your shoping cart");


while (loadLoop == true) {
    selectItem = prompt('Enter \'1\' if you want to add and  \'2\' if you want to delete');
    if (selectItem == 1) {
        nameItem = prompt('please enter name item for add');
        cartUserTest = shopRoom.some(function (user) {
            return user.name == nameItem
        });
        if (cartUserTest == true) {
            receiveBuy = shopRoom.findIndex(function (user) {
                return user.name == nameItem
            });
            // console.log(receiveBuy);
            addToCartUser = shopRoom[receiveBuy];
            cartUser.push(addToCartUser);
        } else {
            console.log('error ...!!\n no item :(')
        }

    } else if (selectItem == 2) {
        nameItem = prompt('please enter name item for delete');
        cartUserTest = cartUser.some(function (item) {
            return item.name == nameItem
        });
        if (cartUserTest == true) {
            receiveBuy = cartUser.findIndex(function (user) {
                return user.name === nameItem
            });
            cartUser.splice(receiveBuy, 1);
        }
    } else {
        console.log('please enter a valid option')
    }


    // console.log(cartUser);

    // selectItem = prompt('Ente \'2\' if you want to delete');

    loadLoop = confirm("Click 'ok' if you want to edit your shoping cart");
}
console.log('       ****        ')
console.log(cartUser);

