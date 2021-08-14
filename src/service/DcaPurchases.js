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
        Date: new Intl.DateTimeFormat('en').format( new Date(item[1])),
        USDCost: item[3],
        AmountOfBtc: item[4],
        BtcPurchasePrice: item[5]
      };
      purchases.push(newPurchase);
    }
  });

  return purchases;
};