import { Typography } from '@material-ui/core';
import React from 'react';

interface ILeftRightValueProps {
  left: string;
  right: string;
}

const LeftRightValue: React.FC<ILeftRightValueProps> = ({ left, right }) => {
  return (
    <Typography>
      {left} : {right}
    </Typography>
  );
};

export default LeftRightValue;
