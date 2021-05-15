const API_KEY = '4179c8cced77ddf25afd5754';
const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
const requestParams = {
    method: "GET"
};

let usdCurrenciesList = document.getElementById('usd-currencies-list');
let gbpCurrenciesList = document.getElementById('gbp-currencies-list');
const fetchPromise = fetch(url, requestParams)
    .then(res => res.json())
    .catch(error => {
        console.log(error);
    });


fetchPromise.then(data => {
    let gbpConversionRate = data['conversion_rates']['GBP'];
    for (const rate in data['conversion_rates']) {
        const usdListItem = document.createElement('li');
        usdListItem.textContent = `${rate}: ${data['conversion_rates'][rate]}`;
        usdCurrenciesList.appendChild(usdListItem);

        const gbpListItem = document.createElement('li');
        let newConversionRate = data['conversion_rates'][rate] / gbpConversionRate;
        gbpListItem.textContent = `${rate}: ${newConversionRate}`;
        gbpCurrenciesList.appendChild(gbpListItem);
    }
});

