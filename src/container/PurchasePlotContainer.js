import { useTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  Label,
} from 'recharts';
import { usePurchases } from '../context/PurchasesContext';
import { getBitcoinPrice } from '../service/BitcoinPrice';

const PurchasePlotContainer = () => {
  const theme = useTheme();
  const [purchases, setPurchases] = useState([]);
  const [currentBtcPrice, setCurrentBtcPrice] = useState(0.0);

  const csv = usePurchases();

  const fetchData = async () => {
    const purchases = csv.Rows.filter((row) => {
      return row.Event === 'purchase';
    })
    setPurchases(purchases);
    setCurrentBtcPrice(await getBitcoinPrice());
  };

  useEffect(() => {
    if (!csv.Loading) {
      fetchData();
    }
  }, [csv.Loading]);

  const formattedCurrentBtcPrice = () => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(currentBtcPrice);
  };

  return (
    <LineChart
      width={1600}
      height={500}
      data={purchases}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis stroke={theme.axisColor} dataKey="Date" />
      <YAxis stroke={theme.axisColor} dataKey="BTCPrice" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="BTCPrice" stroke={theme.purchaseLineColor} />
      <ReferenceLine y={currentBtcPrice} stroke={theme.referenceLineColor}>
        <Label
          fill={theme.referenceLineTextColor}
          value={`Current BTC Price (${formattedCurrentBtcPrice()})`}
          position="top"
        />
      </ReferenceLine>
    </LineChart>
  );
};

export default PurchasePlotContainer;
