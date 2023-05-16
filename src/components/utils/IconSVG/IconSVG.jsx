// import { ReactSVG } from 'react-svg';
import icons from '../../../images/icons.svg';
import scss from './IconSVG.module.css';

export const IconSVG = ({ name, width, height, fill }) => {
  return (
    <svg
      className={scss.icons}
      viewBox="0 0 30 30"
      style={{ width, height, fill }}
    >
      <use xlinkHref={icons + '#icon-' + name} width="30" height="30"></use>
    </svg>
  );
};
