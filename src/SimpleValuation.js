import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';
import DcaCalculatorService from './service/DcaCalculator';

const useStyles = makeStyles({
  root: {
    maxWidth: 1600,
  }
});

const SimpleValuation = (props) => {
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [possibleGrowthPercent, setPossibleGrowthPercent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setInvestmentAmount(await DcaCalculatorService.getInvestmentAmount());
      setCurrentValue(await DcaCalculatorService.getCurrentValue());
      setPossibleGrowthPercent(await DcaCalculatorService.getPossibleGrowthPercent());
    }
    fetchData();
  }, []);

  const classes = useStyles();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography>
                Investment Amount : {formatter.format(investmentAmount)}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>
                Current Value : {formatter.format(currentValue)}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>
                Possible Growth : {possibleGrowthPercent}%
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  )
};

export default SimpleValuation;