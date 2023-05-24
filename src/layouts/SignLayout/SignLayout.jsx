import { IconSVG } from '../../components/IconSVG/IconSVG';
import { mediaQueries } from '../../utils/mediaQueries';
import scss from './SignLayout.module.scss';
import Media from 'react-media';
import { useMediaMui } from '../../hooks';

export const SignLayout = ({ svgName, Form }) => {
  const mediaMui = useMediaMui();

  return (
    <>
      {mediaMui.desktop ? (
        <div className={scss['desktop-window']}>
          <div className={scss['desktop-icon']}>
            <div className={scss['desktop-icon__box']}>
              <IconSVG
                name={svgName}
                sx={{ width: '435px', height: '420px' }}
              />
            </div>
          </div>
          <div className={scss['desktop-form']}>
            <div className={scss['desktop-form__box']}>
              <div className={scss['tablet-logo']}>
                <IconSVG
                  name="logo"
                  sx={{ color: 'icon.logo', width: '40px', height: '40px' }}
                />
                <p>Wallet</p>
              </div>
              {Form}
            </div>
          </div>
        </div>
      ) : mediaMui.tablet ? (
        <div className={scss['tablet-window']}>
          <div className={scss['tablet-icon__box']}>
            <IconSVG name={svgName} sx={{ width: '265px', height: '250px' }} />
          </div>
          <div className={scss['tablet-form']}>
            <div className={scss['desktop-form__box']}>
              <div className={scss['tablet-logo']}>
                <IconSVG
                  name="logo"
                  sx={{ color: 'icon.logo', width: '40px', height: '40px' }}
                />
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
                <IconSVG
                  name="logo"
                  sx={{ color: 'icon.logo', width: '40px', height: '40px' }}
                />
                <p>Wallet</p>
              </div>
              {Form}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
