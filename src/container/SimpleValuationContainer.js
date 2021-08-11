import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
} from '@material-ui/core';
import {
  getCurrentValue,
  getData,
  getInvestmentAmount,
  getPossibleGrowthPercent,
} from '../service/DcaCalculator';
import LeftRightValue from '../component/LeftRightValue';

const useStyles = makeStyles({
  root: {
    maxWidth: 1600,
  },
});

const SimpleValuationContainer = (props) => {
  const [investmentAmount, setInvestmentAmount] = useState(0.0);
  const [currentValue, setCurrentValue] = useState(0.0);
  const [possibleGrowthPercent, setPossibleGrowthPercent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();

      const investmentAmount = getInvestmentAmount(data);
      setInvestmentAmount(investmentAmount);

      const currentValue = await getCurrentValue(data);
      setCurrentValue(currentValue);

      const possibleGrowthPercent = getPossibleGrowthPercent(
        investmentAmount,
        currentValue
      );
      setPossibleGrowthPercent(possibleGrowthPercent);
    };
    fetchData();
  }, []);

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
