import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';
import { getCurrentValue, getInvestmentAmount, getPossibleGrowthPercent } from './service/DcaCalculator';

const useStyles = makeStyles({
  root: {
    maxWidth: 1600,
  }
});

const SimpleValuation = (props) => {
  const [investmentAmount, setInvestmentAmount] = useState(0.0);
  const [currentValue, setCurrentValue] = useState(0.0);
  const [possibleGrowthPercent, setPossibleGrowthPercent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setInvestmentAmount(await getInvestmentAmount());
      setCurrentValue(await getCurrentValue());
      setPossibleGrowthPercent(await getPossibleGrowthPercent());
    }
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography>
                Investment Amount : ${Math.trunc(investmentAmount * 100) / 100}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>
                Current Value : ${Math.trunc(currentValue * 100) / 100}
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