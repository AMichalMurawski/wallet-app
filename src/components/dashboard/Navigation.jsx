import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Link, Typography } from '@mui/material';
import { useMediaMui } from '../../hooks';
import { Navigate, useLocation } from 'react-router-dom';

const NavLink = ({ description = null, Icon, pathTo }) => {
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
          backgroundColor: 'background.box',
          color: 'text.alternative',
          width: '20px',
          height: '20px',
          margin: 0,
          padding: '2px',
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

export const Navigation = () => {
  const mediaMui = useMediaMui();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: mediaMui.tablet ? 'column' : 'row',
        gap: '10px',
      }}
    >
      <NavLink description="Home" Icon={HomeIcon} pathTo="home" />
      <NavLink description="Statistics" Icon={ShowChartIcon} pathTo="diagram" />
      {!mediaMui.tablet && (
        <NavLink
          description="Currency"
          Icon={AttachMoneyIcon}
          pathTo="currency"
        />
      )}
    </Box>
  );
};
