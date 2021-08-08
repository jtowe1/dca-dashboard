import Papa from 'papaparse';

const DcaCalculatorService = {
  getInvestmentAmount: async () => {
    const rows = await DcaCalculatorService.getData();
    let investmentAmount = 0;

    rows.data.forEach((item, index) => {
      if (item[0] === 'purchase') {
        investmentAmount += parseInt(item[3]);
      }
    });

    return investmentAmount;
  },

  getCurrentValue: async () => {
    return 7;
  },

  getPossibleGrowthPercent: async () => {
    return 2;
  },

  getData: async () => {
    console.log('GETTING DATA');
    const response = await fetch('/data/transfers.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);

    const data = Papa.parse(csv);
    return data;
  }
};

export default DcaCalculatorService;