import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { NavLink } from '../buttons';
import { useMediaMui } from '../../hooks';

export const Navigation = () => {
  const mediaMui = useMediaMui();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: mediaMui.tablet ? 'column' : 'row',
        justifyContent: 'center',
        gap: mediaMui.tablet ? '10px' : '32px',
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
