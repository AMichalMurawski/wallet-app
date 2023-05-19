import { IconSVG } from '../../components/icons/IconSVG/IconSVG';
import { Logo } from '../../components/icons/IconLogo/IconLogo';
import { mediaQueries } from '../../utils/mediaQueries';
import scss from './SignLayout.module.scss';
import Media from 'react-media';

export const SignLayout = ({ svgName, Form }) => {
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
              <div className={scss['desktop-form']}>
                <div className={scss['desktop-form__box']}>
                  <div className={scss['tablet-logo']}>
                    <Logo />
                    <p>Wallet</p>
                  </div>
                  {Form}
                </div>
              </div>
            </div>
          ) : matches.tablet ? (
            <div className={scss['tablet-window']}>
              <div className={scss['tablet-icon__box']}>
                <IconSVG name={svgName} width={'265px'} height={'250px'} />
              </div>
              <div className={scss['tablet-form']}>
                <div className={scss['desktop-form__box']}>
                  <div className={scss['tablet-logo']}>
                    <Logo />
                    <p>Wallet</p>
                  </div>
                  {Form}
                </div>
              </div>
            </div>
          ) : (
            <div className={scss['mobile-window']}>
              <div className={scss['mobile-form']}>
                <div className={scss['mobile-form__box']}>
                  <div className={scss['mobile-logo']}>
                    <Logo />
                    <p>Wallet</p>
                  </div>
                  {Form}
                </div>
              </div>
            </div>
          )
        }
      </Media>
    </>
  );
};
