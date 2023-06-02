import sprite from '../images/icons.svg';
import { SvgIcon } from '@mui/material';

const numberFromDim = dim => {
  const array = dim.split('');
  for (let i = array.length - 1; i >= 0; i--) {
    if (!isNaN(array[i])) {
      return dim.slice(0, i + 1);
    }
  }
};

export const IconSVG = ({ name, sx }) => {
  const { width, height } = sx;

  return (
    <SvgIcon
      sx={sx}
      viewBox={'0 0 ' + numberFromDim(width) + ' ' + numberFromDim(height)}
    >
      <use xlinkHref={sprite + '#icon-' + name}></use>
    </SvgIcon>
  );
};
