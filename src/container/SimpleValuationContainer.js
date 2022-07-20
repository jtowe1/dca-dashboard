import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
} from '@material-ui/core';
import {
  getCurrentValue,
  getInvestmentAmount,
  getPossibleGrowthPercent,
} from '../service/DcaCalculator';
import LeftRightValue from '../component/LeftRightValue';
import { usePurchases } from '../context/PurchasesContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 1600,
  },
});

const SimpleValuationContainer = (props) => {
  const [investmentAmount, setInvestmentAmount] = useState(0.0);
  const [currentValue, setCurrentValue] = useState(0.0);
  const [possibleGrowthPercent, setPossibleGrowthPercent] = useState(0);

  const csv = usePurchases();

  const fetchCurrentValue = async () => {
    setCurrentValue(await getCurrentValue(csv.Rows));
  }

  const fetchInvestmentAmount = () => {
    setInvestmentAmount(getInvestmentAmount(csv.Rows));
  }

  const fetchPossibleGrowthPercent = () => {
    setPossibleGrowthPercent(
      getPossibleGrowthPercent(
        investmentAmount,
        currentValue
      )
    )
  }

  useEffect(() => {
    fetchInvestmentAmount();
    fetchCurrentValue();
    fetchPossibleGrowthPercent();
  }, [csv.Rows]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs>
              <LeftRightValue
                left="Investment Amount"
                right={"$" + Math.trunc(investmentAmount * 100) / 100}
              />
            </Grid>
            <Grid item xs>
              <LeftRightValue
                left="Current Value"
                right={"$" + Math.trunc(currentValue * 100) / 100}
              />
            </Grid>
            <Grid item xs>
              <LeftRightValue
                left="Possible Growth"
                right={possibleGrowthPercent + "%"}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default SimpleValuationContainer;
