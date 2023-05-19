import { Suspense } from 'react';
import scss from './BackgroundLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { IconSVG } from '../../components/icons/IconSVG/IconSVG';

export const BackgroundLayout = () => {
  return (
    <div>
      <div className={scss.bg}>
        <div className={scss['bg-ellipse1']}>
          <IconSVG
            name={'ellipse'}
            width={'618px'}
            height={'547px'}
            fill={'--icon-elipse1'}
          />
        </div>
        <div className={scss['bg-ellipse2']}>
          <IconSVG
            name={'ellipse'}
            width={'618px'}
            height={'547px'}
            fill={'--icon-elipse2'}
          />
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
