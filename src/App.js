import './App.css';
import SimpleValuation from './SimpleValuation';
import DcaCalculator from './service/DcaCalculator';
import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

function App() {
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <SimpleValuation
          investmentAmount={DcaCalculator.getInvestmentAmount()}
          currentValue={DcaCalculator.getCurrentValue()}
          possibleGrowthPercent={DcaCalculator.getPossibleGrowthPercent()} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
