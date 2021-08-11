import Papa from 'papaparse';
import { getBitcoinPrice } from './BitcoinPrice';

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

export const getCurrentValue = async (rows) => {
  const btcValue = await getBitcoinPrice();
  let currentValue = 0;

  rows.data.forEach((item) => {
    if (item[0] === 'purchase') {
      const amountPurchasedInBtc = parseFloat(item[4]);
      const currentValueOfPurchase = amountPurchasedInBtc * btcValue;
      currentValue += parseFloat(currentValueOfPurchase);
    }
  });

  return currentValue;
};

export const getInvestmentAmount = (rows) => {
  let investmentAmount = 0.0;

  rows.data.forEach((item) => {
    if (item[0] === 'purchase') {
      investmentAmount += parseFloat(item[3]);
    }
  });

  return investmentAmount;
};

export const getPossibleGrowthPercent = (investmentAmount, currentValue) => {
  const possibleGrowthPercent =
    (currentValue - investmentAmount) / investmentAmount;
  return (possibleGrowthPercent * 100).toFixed(2);
};
