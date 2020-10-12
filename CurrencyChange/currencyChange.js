let inputAmount;
let fromCurrency;
let toCurrency;
let btConvert;
let currencyType;
let evMouse;

inputAmount = +document.getElementById("inputAmount");
fromCurrency = document.getElementById("selectFromMoney");
toCurrency = document.getElementById("selectToMoney");
btConvert = document.getElementById("btConvert");

function selectTypeCurrency(id) {
    let idSelect = document.getElementById(id);

    switch (idSelect){
        case  fromCurrency:
            currencyType = fromCurrency.value;
            break;
        case toCurrency:
            currencyType = toCurrency.value;
            break;
    }
    // return currencyType;
    alert("id selection:"+idSelect.id);
}
