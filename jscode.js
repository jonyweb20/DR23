
let arr = [{name:'BMW', qty: 1, price: 750}, {name:'Nissan', qty: 2, price: 800}, {name:'Lada', qty: 1, price: 345}, {name:'WW',qty: 1, price: 899}];
function arrayCard(el1, el2, el3) {
if (arr.length !== 0){
    for (let i = 0; i<arr.length; i++){
        if (arr[i].name.indexOf(el1) !==-1){
    arr[i].qty += el2;
            return arr;
        }
    }}
    let cardAdd = {name: '', qty: 0, price: 0};
    cardAdd.name = el1;
    cardAdd.qty = el2;
    cardAdd.price = el3;
    arr.push(cardAdd);
    return arr;
}
function arrayCardClear() {
    document.getElementById('n22').value = '';
    document.getElementById('n23').value = '';
    document.getElementById('n24').value = '';
    document.getElementById('out1').innerHTML += '';

}

function arrayCardAdd() {
    let name = document.getElementById('n22').value;
    document.getElementById('out2').innerHTML = '';
    let sum = +document.getElementById('n23').value;
    arrayCard(name, sum);
    let price = +document.getElementById('n24').value;
    document.getElementById('out2').innerHTML = name + '  ' + sum + ' шт по цене ' + price + '$' + '<br/>' + 'всего в базе '+ arr.length + ' поз.';
    arrayCardClear();
}

function arrayAllCardList() {
for (let i =0; i < arr.length; i++){
    document.getElementById('out1').innerHTML += '<br/>' + arr[i].name + " " + arr[i].qty + ' шт';
}
}


function arrayCardBay(){
    debugger;
    let arrBay = {};
    let listBay = document.querySelector('#ol1');
let selList = document.getElementById('sel-1');
let inputQty = document.getElementById('i-1');
let inputPrice = document.getElementById('priceBay');
        arrBay.name = selList.options[selList.selectedIndex].value;
        arrBay.price = +inputPrice.value;
        arrBay.qty = +inputQty.value;
        arrBay.status = 'bay';
        arr.push(arrBay);
        console.log(arrBay);

    let li = '';
    for (let i = 0; i<arrBay.length;i++ ){
    li = document.createElement('li');
    li.innerHTML = arrBay[i].name;
        listBay.appendChild(li);

    /*arrCheck = arr[key].push('status: bay');*/
    }
}
function reload() {
    debugger;
    let selectA = document.querySelector('#sel-1');
    let price = document.querySelector('.price');
    let option = '';
    for (let i = 0; i < arr.length; i++) {
        if (selectA.length< arr.length){
        option = document.createElement('option');
        price.innerText = arr[i].price;
        option.innerHTML = arr[i].name;
        selectA.appendChild(option);
        }
    }
}
/*check(value1)
 function arrayCardBa(){
     debugger;
    let object = {};
     const checkList = document.querySelector('#ol1');
     let li = '';
     li = document.createElement('li');
     checkList.appendChild(li);
     li.innerHTML = document.getElementById('ol1').value = value1;

 }*/
/*
document.getElementById('out1').value = '';
document.getElementById('out2').value = '';*/
