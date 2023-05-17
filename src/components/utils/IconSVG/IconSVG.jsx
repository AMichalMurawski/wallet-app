import icons from '../../../images/icons.svg';
import scss from './IconSVG.module.scss';

export const IconSVG = ({ name, width, height, fill, transform }) => {
  return (
    <svg
      className={scss.icons}
      viewBox={'0 0 ' + width + ' ' + height}
      style={{ width, height, fill: `var(${fill})` }}
    >
      <use
        xlinkHref={icons + '#icon-' + name}
        width={width}
        height={height}
      ></use>
    </svg>
  );
};
