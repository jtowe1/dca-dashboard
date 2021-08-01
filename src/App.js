import './App.css';
import SimpleValuation from './SimpleValuation';
import DcaCalculator from './service/DcaCalculator';

function App() {
  return (
    <div>
      <SimpleValuation
        investmentAmount={DcaCalculator.getInvestmentAmount()}
        currentValue={DcaCalculator.getCurrentValue()}
        possibleGrowthPercent={DcaCalculator.getPossibleGrowthPercent()} />
    </div>
  );
}

export default App;
