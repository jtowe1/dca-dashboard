import Papa from 'papaparse';

const getData = async () => {
  console.log('GETTING DATA');
  const response = await fetch('/data/transfers.csv');
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result.value);

  const data = Papa.parse(csv);
  return data;
}

export const getCurrentValue = async () => {
  const btcValue = 43728.48;
  const rows = await getData();
  let currentValue = 0;

  rows.data.forEach((item) => {
    if (item[0] === 'purchase') {
      const amountPurchasedInBtc = parseFloat(item[4]);
      const currentValueOfPurchase = amountPurchasedInBtc * btcValue;
      currentValue += parseFloat(currentValueOfPurchase);
    }
  });

  return currentValue;
}

export const getInvestmentAmount = async () => {
  const rows = await getData();
  let investmentAmount = 0.0;

  rows.data.forEach((item) => {
    if (item[0] === 'purchase') {
      investmentAmount += parseFloat(item[3]);
    }
  });

  return investmentAmount;
}

export const getPossibleGrowthPercent = async () => {
  return 2;
}