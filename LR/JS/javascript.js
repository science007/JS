console.log("Работает)");
let title_magazine = prompt("Название Вашего магазина?");
let budjet = prompt("Ваш бюджет?");

console.log(title_magazine);
console.log(budjet);

let mainList = {
    budjet_of_shop: budjet,
    title_shop: title_magazine,
    shopGoods: arr_shopGoods = [],
    employers: obj_employers = {},
    Open: true
}

for(let i = 0; i <= 2; i++){
    let kol = prompt("Какой тип товаров будем продавать?");
    arr_shopGoods[i] = kol;
}

// console.log(mainList['shopGoods'] + ', ');

let budjet_on_day = budjet / 30;
alert("Бюджет на день = " + budjet_on_day);