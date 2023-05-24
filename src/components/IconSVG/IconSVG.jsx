import sprite from '../../images/icons.svg';
import { SvgIcon } from '@mui/material';

export const IconSVG = ({ name, sx }) => {
  return (
    <SvgIcon sx={sx} viewBox="100%">
      <use xlinkHref={sprite + '#icon-' + name}></use>
    </SvgIcon>
  );
};
