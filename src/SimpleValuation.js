import React from 'react';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 1600,
  }
});

const SimpleValuation = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography>
                Investment Amount : {props.investmentAmount}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>
                Current Value : {props.currentValue}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>
                Possible Growth : {props.possibleGrowthPercent}%
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  )
};

export default SimpleValuation;