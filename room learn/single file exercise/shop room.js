// shop room

let shopRoom = [
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

let cartUser = [
    { id: 2, name: 'book', price: 12000 },
    { id: 2, name: 'tractor', price: 12000 }
];

console.log(cartUser);

let receiveBuy;
let nameItem = prompt('please enter name item');

receiveBuy = shopRoom.findIndex(function(user){
    return user.name === nameItem
});
let loadLoop = confirm("Click 'ok' if you want to edit your shoping cart");

console.log(shopRoom[receiveBuy]);

while(loadLoop == true)
