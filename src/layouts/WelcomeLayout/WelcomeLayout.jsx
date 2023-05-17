import { IconSVG } from '../../components/utils/IconSVG/IconSVG';
import { mediaQueries } from '../../utils/mediaQueries';
import scss from './WelcomeLayout.module.scss';
import Media from 'react-media';

const WelcomeLayout = ({ svgName, Form }) => {
  return (
    <>
      <Media queries={mediaQueries}>
        {matches =>
          matches.desktop ? (
            <div className={scss['desktop-window']}>
              <div className={scss['desktop-icon']}>
                <div className={scss['desktop-icon__box']}>
                  <IconSVG name={svgName} width={'435px'} height={'420px'} />
                </div>
              </div>
              <div className={scss['desktop-form']}>{Form}</div>
            </div>
          ) : matches.tablet ? (
            <div className={scss['tablet-window']}>
              <div className={scss['tablet-icon__box']}>
                <IconSVG name={svgName} width={'265px'} height={'250px'} />
              </div>
              <div className={scss['tablet-form']}>{Form}</div>
            </div>
          ) : (
            <div className={scss['mobile-window']}>
              <div className={scss['mobile-form']}>{Form}</div>
            </div>
          )
        }
      </Media>
    </>
  );
};

export default WelcomeLayout;
