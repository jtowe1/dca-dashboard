export interface ISwanCsv {
  Headers: string[];
  Rows: ISwanCsvRow[];
  Loading: boolean;
}

export interface ISwanCsvRow {
  Event: string;
  Date: Date;
  USD: number;
  UnitCount: number;
  BTCPrice: number;
}