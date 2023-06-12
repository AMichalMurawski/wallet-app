import { Link, Typography } from '@mui/material';
import { useMediaMui } from '../../hooks';
import { useLocation } from 'react-router-dom';

export const NavLink = ({ description = null, Icon, pathTo }) => {
  const mediaMui = useMediaMui();
  const location = useLocation();

  return (
    <Link
      underline="none"
      sx={{
        color: 'text.main',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
      }}
      href={pathTo}
    >
      <Icon
        sx={{
          backgroundColor: location.pathname.includes(pathTo)
            ? 'background.box'
            : 'background.box_nonactive',
          color: 'text.alternative',
          borderRadius: '6px',
          width: mediaMui.tablet ? '20px' : '40px',
          height: mediaMui.tablet ? '20px' : '40px',
          margin: 0,
          padding: '2px',
          filter: location.pathname.includes(pathTo)
            ? 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))'
            : null,
        }}
      />
      {mediaMui.tablet && (
        <Typography
          sx={{
            color: 'text.main',
            fontWeight: location.pathname.includes(pathTo) ? 700 : 400,
          }}
        >
          {description}
        </Typography>
      )}
    </Link>
  );
};
