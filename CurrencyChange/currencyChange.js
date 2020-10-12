let inputAmount;
let fromCurrency;
let toCurrency;
let btConvert;
inputAmount = document.getElementById("inputAmount").value;
fromCurrency = document.getElementById("selectFromMoney").value;
toCurrency = document.getElementById("selectToMoney").value;
btConvert = document.getElementById("btConvert");

let value = Number(inputAmount);

function convert(a, b) {
    let result;
    if (a == "USD" && b == "VND") {
        result = (value * 23000) + " VND";
    } else if (a == "VND" && b == "USD") {
        result = (value / 23000) + " USD";
    } else {
        result = value +" "+ a;
    }
    return result;
}

function displayResult() {
    return alert(convert(fromCurrency, toCurrency) + " ");
}