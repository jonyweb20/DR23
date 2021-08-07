let arr = [{name: 'BMW', qty: 1, price: 750}, {name: 'Nissan', qty: 2, price: 800}, {
    name: 'Lada', qty: 3, price: 345
}, {name: 'WW', qty: 1, price: 899}];

function arrayCard(el1, el2, el3) {
    if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name.indexOf(el1) !== -1) {
                arr[i].qty += el2;
                arr[i].price = el3;
                return arr;
            }
        }
    }
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
    let price = +document.getElementById('n24').value;
    arrayCard(name, sum, price);
    document.getElementById('out2').innerHTML = name + '  ' + sum + ' шт по цене ' + price + '$' + '<br/>' + 'всего в базе ' + arr.length + ' поз.';
    arrayCardClear();
}


function Option(Inames) {
    let Option = '';
    Option = document.createElement('Option');
    Option.appendChild(document.createTextNode(Inames));
    Option.setAttribute("value", Inames);
    Option.innerHTML = Inames;
    return Option
}


function arrayAllCardList() {
    document.getElementById('out1').innerHTML = '';
    document.getElementById('sel-2').innerHTML = '';
    let selectNameDel = document.getElementById('sel-2');
    let opti = '';
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('out1').innerHTML += '<br/>' + arr[i].name + " " + arr[i].qty + ' шт';
        selectNameDel.appendChild(Option(arr[i].name))
    }
    /*   selectNameDel.addEventListener('change', delList() {
               let selectNameForDel = selectNameDel.options[selectNameDel.selectedIndex].value;
               for (let i = 0; i < arr.length; i++) {
                   if (arr[i].name === selectNameForDel) {
                       arr.splice(i,1)
                   }
               }
           }
       )*/
}

function delList() {
    debugger
    let delList = document.getElementById('sel-2');
    delList.addEventListener('change', function f() {
        let selectNameForDel = delList.options[delList.selectedIndex].value;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === selectNameForDel) {
                arr.splice(i, 1);
            }
        }
    })
    arrayAllCardList()
}


function func(aa, ab, ac) {
    let obj = {name: '', qty: 0, price: 0};
    obj.name = aa;
    obj.qty = ab;
    obj.price = ac;
    mas.push(obj);
    let newTextName = document.createTextNode(aa);
    let newTextQty = document.createTextNode(ab);
    let newTextPrice = document.createTextNode(ac);
    let list = document.querySelector('.checkList');
    let ROW = document.createElement('li');
    let UL = document.createElement('ul');
    let inLiName = document.createElement('li');
    inLiName.classList.add('checkName');
    let inLiQty = document.createElement('li');
    inLiQty.classList.add('checkQty');
    let inLiPrice = document.createElement('li');
    inLiPrice.classList.add('checkPrice');
    list.append(ROW);
    ROW.classList.add('checkRow')
    ROW.append(UL);
    UL.classList.add('check-title');
    inLiName.appendChild(newTextName);
    UL.appendChild(inLiName);
    inLiQty.appendChild(newTextQty);
    UL.appendChild(inLiQty);
    inLiPrice.appendChild(newTextPrice);
    UL.appendChild(inLiPrice);
}

let mas = [];

function arrayCardBay() {
    debugger
    let selList = document.getElementById('sel-1').value;
    let inputQty = +document.getElementById('i-1').value;
    for (let i = 0; i < arr.length; i++) {
        if (mas.length === 0 && arr[i].name === selList) {
            func(arr[i].name, inputQty, arr[i].price);
        } else if (arr[i].name === selList) {
            for (let j = 0; j < mas.length; j++) {
                if (mas[j].name === arr[i].name && arr[i].qty > 0) {
                    mas[j].qty += inputQty;
                    arr[i].qty -= mas[j].qty;
                    let checkName = document.querySelectorAll('.checkName');
                    let checkQty = document.querySelectorAll('.checkQty');
                    checkName.forEach(function (cn, i) {
                        if (cn.textContent === selList) {
                            checkQty[i].textContent = `${mas[j].qty}`;
                        }
                    });
                    break;
                }
            }
            if (
                mas.findIndex(el => el.name === selList) === -1) {
                func(arr[i].name, inputQty, arr[i].price);
                arr[i].qty -= inputQty;
                break;
            }

        }
    }
    let total = mas.map(per => per.qty * per.price).reduce((tot, pr) => tot + pr, 0);
    document.getElementById('p5').innerHTML = `${total} $`
}

function reload() {
    debugger
    let i = 0
    document.getElementById('sel-1').innerHTML = ''
    let selectName = document.getElementById('sel-1');
    let price = document.getElementById('priceBay');
    if (selectName.length !== arr.length) {
        for (; i < arr.length; i++) {
            selectName.appendChild(Option(arr[i].name));
        }
    }
    selectName.addEventListener('change', function f() {
            let selectNameForQty = selectName.options[selectName.selectedIndex].value;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === selectNameForQty) {
                    price.innerHTML = arr[i].price;
                }
            }
        }
    )

}

