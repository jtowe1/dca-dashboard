import './App.css';
import SimpleValuation from './SimpleValuation';
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
        <SimpleValuation />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
