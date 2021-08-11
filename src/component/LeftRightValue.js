import { Typography } from '@material-ui/core';
import React from 'react';

const LeftRightValue = ({ left, right }) => {
  return (
    <Typography>
      {left} : {right}
    </Typography>
  );
};

export default LeftRightValue;
