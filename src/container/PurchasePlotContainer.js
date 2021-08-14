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
import { getBitcoinPrice } from '../service/BitcoinPrice';
import { getPurchases } from '../service/DcaPurchases';

const PurchasePlotContainer = () => {
  const [purchases, setPurchases] = useState([]);
  const [currentBtcPrice, setCurrentBtcPrice] = useState(0.0);

  useEffect(() => {
    const fetchData = async () => {
      setPurchases(await getPurchases());
      setCurrentBtcPrice(await getBitcoinPrice());
    };
    fetchData();
  }, []);

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
      <XAxis stroke="white" dataKey="Date" />
      <YAxis stroke="white" dataKey="BtcPurchasePrice" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="BtcPurchasePrice" stroke="#8884d8" />
      <ReferenceLine y={currentBtcPrice} stroke="green">
        <Label
          fill="green"
          value={`Current BTC Price (${formattedCurrentBtcPrice()})`}
          position="top"
        />
      </ReferenceLine>
    </LineChart>
  );
};

export default PurchasePlotContainer;
