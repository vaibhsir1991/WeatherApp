import React from 'react';

interface Props {
  tempreture: number;
  unit?: 'C' | 'F' | 'K';
}

const FormattedTempreture = ({
  tempreture,
  unit = 'K'
}: Props): React.ReactElement => {
  let formattedTempreture = 0;
  switch (unit) {
    case 'C':
      formattedTempreture = tempreture - 273.15;
      break;
    case 'F':
      formattedTempreture = ((tempreture - 273.15) * 9) / 5 + 32;
      break;
    case 'K':
    default:
      formattedTempreture = tempreture;
  }

  return <>{Math.round(formattedTempreture)}°</>;
};

export default FormattedTempreture;
