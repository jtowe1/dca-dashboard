import Papa from 'papaparse';

export const getCsvData = async () => {
  console.log('Loading csv...');
  const response = await fetch('/data/transfers.csv');
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result.value);
  console.log('csv loaded');

  const { data, meta: { fields } } = Papa.parse(csv, {
    header: true
  });

  return { data, fields }
};