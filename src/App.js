import './App.css';
import SimpleValuationContainer from './container/SimpleValuationContainer';
import PurchasePlotContainer from './container/PurchasePlotContainer';
import { ThemeProvider, CssBaseline, Switch, FormControlLabel, createTheme } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const purchaseLineColor = darkTheme ? '#8884d8' : 'blue';
  const axisColor = darkTheme ? 'white' : 'black';
  const palletType = darkTheme ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      type: palletType,
    },
    purchaseLineColor: purchaseLineColor,
    referenceLineColor: 'green',
    referenceLineTextColor: 'green',
    axisColor: axisColor
  });

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <FormControlLabel
          control={
            <Switch
              onChange={handleToggleTheme}
              checked={darkTheme}
              color="primary" />
          }
          label="Dark Mode"/>
        <PurchasePlotContainer />
        <SimpleValuationContainer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
