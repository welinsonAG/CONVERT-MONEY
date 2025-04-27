const convertButton = document.querySelector(".converter-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const CurrencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.3;
    const bitcoinToday = 85.175;
    
    

    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("GBP-US", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday);
    }
    if (currencySelect.value == "bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("BTC-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday);
    }
    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);

        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue);
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/dolar.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
