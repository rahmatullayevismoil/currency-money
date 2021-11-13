var elForm = document.querySelector("#idForm");
var elInput = document.querySelector("#formInput");
var elSelect = document.querySelector("#formSelect");
var elResult = document.querySelector("#textMoney");
console.log( elForm,  elInput,  elSelect)

var UZS_TO_USD = 10750;
var UZS_TO_EUR = 11800;
var UZS_TO_RUB = 145;

var result = 0;

console.log(result);
elForm.addEventListener("submit", (dd) =>{
    dd.preventDefault();

    var input = elInput.value;
    var select = elSelect.value;

    if (select == "UZD") {
        result = input / UZS_TO_USD
        console.log(elResult);
        elResult.textContent = Math.floor(result).toFixed(1)
    }

    if (select == "EUR") {
        result = input / UZS_TO_EUR
        elResult.textContent = Math.floor(result).toFixed(1)
    }

    if (select == "RUB") {
        result = input / UZS_TO_RUB
        elResult.textContent = Math.floor(result).toFixed(1)
    }
})
