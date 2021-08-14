import './App.css';
import SimpleValuationContainer from './container/SimpleValuationContainer';
import PurchasePlotContainer from './container/PurchasePlotContainer';
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
        <PurchasePlotContainer />
        <SimpleValuationContainer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
