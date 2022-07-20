import { getBitcoinPrice } from './BitcoinPrice';
import { ISwanCsvRow } from '../types/swancsv'

export const getCurrentValue = async (rows: ISwanCsvRow[]) => {
  const btcValue = await getBitcoinPrice();
  let currentValue = 0;

  rows.forEach((item) => {
    if (item.Event === 'purchase') {
      const currentValueOfPurchase = item.UnitCount * btcValue;
      currentValue += currentValueOfPurchase;
    }
  });

  return currentValue;
};

export const getInvestmentAmount = (rows: ISwanCsvRow[]) => {
  let investmentAmount = 0.0;

  rows.forEach((item) => {
    if (item.Event === 'purchase') {
      investmentAmount += item.USD;
    }
  });

  return investmentAmount;
};

export const getPossibleGrowthPercent = (investmentAmount: number, currentValue: number) => {
  const possibleGrowthPercent =
    (currentValue - investmentAmount) / investmentAmount;
  return (possibleGrowthPercent * 100).toFixed(2);
};
