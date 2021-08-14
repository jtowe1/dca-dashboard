import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';
import { getBitcoinPrice } from '../service/BitcoinPrice';
import { getPurchases } from '../service/DcaPurchases';

const PurchasePlot = () => {
  const [purchases, setPurchases] = useState([]);
  const [currentBtcPrice, setCurrentBtcPrice] = useState(0.0);

  useEffect(() => {
    const fetchData = async () => {
      setPurchases(await getPurchases());
      setCurrentBtcPrice(await getBitcoinPrice());
    };
    fetchData();
  }, []);

  const renderLineChart = (
    <LineChart width={1000} height={500} data={purchases}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid />
      <XAxis dataKey="date" />
      <YAxis dataKey="btcPrice"/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="btcPrice" stroke="#8884d8" />
      <ReferenceLine y={currentBtcPrice} label="Current BTC Price" stroke="blue" />
    </LineChart>
  );
  return renderLineChart;
};

export default PurchasePlot;