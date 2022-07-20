import React, { useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { getCsvData } from '../service/SwanBtcCsv';
import { ISwanCsv, ISwanCsvRow } from "../types/swancsv";

const defaultState: ISwanCsv = {
  Headers: [],
  Rows: [],
  Loading: true,
};

const PurchasesContext = createContext<ISwanCsv>(defaultState);

export const PurchasesProvider: React.FC = ({ children }) => {
  const [csv, setCsv] = useState(defaultState);

  const fetchCsvData = async () => {
    const { data, fields } = await getCsvData();

    const rows = data.map((value: { [x: string]: any; }) => {
      const csvRow: ISwanCsvRow = {
        Event: value['Event'],
        Date: value['Date'],
        USD: parseFloat(value['USD']),
        UnitCount: parseFloat(value['Unit Count']),
        BTCPrice: parseFloat(value['BTC Price'])
      }
      return csvRow;
    });

    const purchases: ISwanCsv = {
      Headers: fields ?? [],
      Rows: rows,
      Loading: false
    }

    setCsv(purchases);
  }

  useEffect(() => {
    fetchCsvData();
  }, []);

  return (
    <PurchasesContext.Provider value={csv}>
      {children}
    </PurchasesContext.Provider>
  );
};

export const usePurchases = () => useContext(PurchasesContext);