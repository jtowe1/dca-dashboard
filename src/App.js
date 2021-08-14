import './App.css';
import SimpleValuationContainer from './container/SimpleValuationContainer';
import PurchasePlotContainer from './container/PurchasePlotContainer';
import { ThemeProvider, CssBaseline, Switch, FormControlLabel, createTheme, Grid } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
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
        <Grid container spacing={3}>
          <Grid item xs={10} />
          <Grid item xs={2} style={{textAlign: 'right'}}>
            <FormControlLabel
              control={
                <Switch
                  onChange={handleToggleTheme}
                  checked={darkTheme}
                  color="primary" />
              }
              label="Dark Mode"/>
          </Grid>
          <Grid item xs={12}>
            <PurchasePlotContainer />
          </Grid>
          <Grid item xs={12}>
            <SimpleValuationContainer />
          </Grid>
        </Grid>

      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
