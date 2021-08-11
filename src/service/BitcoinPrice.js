export const getBitcoinPrice = async () => {
  const response = await fetch('https://blockchain.info/ticker');
  const data = await response.json();

  return data.USD.last;
};