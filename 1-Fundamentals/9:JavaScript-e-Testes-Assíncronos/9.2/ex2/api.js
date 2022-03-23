const fetchCurrency = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  
  const currency = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => `Eita! Algo deu errado: ${error}`)

  return currency;
};

const setCurrency = async () => {
  const arrayCurrency = await fetchCurrency();
  const list = document.getElementById('currency-list');
  const top10 = arrayCurrency.filter((arrayCurrency) => arrayCurrency.rank <= 10);

  top10.forEach(object => {
    const newLi = document.createElement('li');
    const dollarValue = Number(object.priceUsd);
    
    newLi.innerText = `${object.name} (${object.symbol}): ${dollarValue.toFixed(2)}`;
    list.appendChild(newLi);
  });
};

window.onload = () => setCurrency();
