import Papa from 'papaparse';

export const getData = async () => {
  console.log('GETTING DATA');
  const response = await fetch('/data/transfers.csv');
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result.value);

  const data = Papa.parse(csv);
  return data;
};

export const getPurchases = async () => {
  const rows = await getData();
  let purchases = [];

  rows.data.forEach((item) => {
    if (item[0] === 'purchase') {
      const newPurchase = {
        date: item[1],
        usd: item[3],
        btc: item[4],
        btcPrice: item[5]
      };
      purchases.push(newPurchase);
    }
  });

  return purchases;
};