import './App.css';
import SimpleValuationContainer from './container/SimpleValuationContainer';
import PurchasePlot from './component/PurchasePlot';
import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

function App() {
  const theme = createTheme({
    palette: {
      type: 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <PurchasePlot />
        <SimpleValuationContainer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
