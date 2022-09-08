import React, { useCallback, useEffect, useState } from 'react';
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

const SimpleValuationContainer = () => {
  const [investmentAmount, setInvestmentAmount] = useState(0.0);
  const [currentValue, setCurrentValue] = useState(0.0);
  const [possibleGrowthPercent, setPossibleGrowthPercent] = useState('');

  const csv = usePurchases();


  const getAmounts = useCallback(async () => {
    const currentValue = await getCurrentValue(csv.Rows)
    setCurrentValue(currentValue);

    const investmentAmount = getInvestmentAmount(csv.Rows);
    setInvestmentAmount(investmentAmount);

    const possibleGrowthPercent = getPossibleGrowthPercent(investmentAmount, currentValue);
    setPossibleGrowthPercent(possibleGrowthPercent);
  }, [csv.Rows]);

  useEffect(() => {
    if (!csv.Loading) {
      getAmounts();
    }
  }, [csv.Loading, getAmounts]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs>
              <LeftRightValue
                left="Investment Amount"
                right={"$" + Math.trunc(investmentAmount)}
              />
            </Grid>
            <Grid item xs>
              <LeftRightValue
                left="Current Value"
                right={"$" + Math.trunc(currentValue)}
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
