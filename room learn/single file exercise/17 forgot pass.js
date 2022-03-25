
let dataBase = [
    {id: 1,userName: 'mohammad', pass: 'jd45322f'},
    {id: 2,userName: 'sattar', pass: 'hgmk5643'},
    {id: 3,userName: 'reza', pass: '0125reza'},
    {id: 4,userName: 'amin', pass: 'kamkam32'},
    {id: 5,userName: 'hassan', pass: 'a1234567'},
    {id: 6,userName: 'ali', pass: 'loadpass'},
    {id: 7,userName: 'mostafa', pass: 'thHkF123'},
];

let receiveName, receivePass, searchName;

receiveName = prompt('please enter user name:');
searchName = dataBase.some(function(item){
    return receiveName === item.userName
});
if(searchName){
    searchName = dataBase.find(function(item){
        return receiveName === item.userName
    });
    
}

// console.log(searchName);
