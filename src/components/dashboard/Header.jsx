import {
  Avatar,
  Box,
  Container,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { IconLogo } from '../icons';
import { useGlobal } from '../../hooks';
import { useDispatch } from 'react-redux';
import { setModalProfileOpen } from '../../redux/global/globalThunk';
import { useState } from 'react';
import { toDoAlert } from '../../devUtils/toDoAlert';

export const Header = () => {
  const { isModalProfileOpen } = useGlobal();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleOpen = async e => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
    dispatch(setModalProfileOpen(true));
  };

  const handleClose = async () => {
    dispatch(setModalProfileOpen(false));
  };

  const handleLogout = () => {
    toDoAlert(['Log out user', 'Use ModalYesNo to check if user want log out']);
  };

  const handleProfileRoute = () => {
    toDoAlert([
      'Navigate to /settings/profile',
      'where settings is layout and profile is tab',
    ]);
  };

  const handleWalletsRoute = () => {
    toDoAlert([
      'Navigate to /settings/wallets',
      'where settings is layout and wallets is tab',
    ]);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.category',
        display: 'block',
      }}
    >
      <Container
        sx={{
          padding: '20px 16px',
          minWidth: '320px',
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconLogo />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            cursor: 'pointer',
          }}
          onClick={handleOpen}
        >
          <Typography sx={{ color: 'text.main', fontSize: '18px' }}>
            {isModalProfileOpen.toString()}
          </Typography>
          <Avatar
            sx={{
              color: 'text.main',
              width: '24px',
              height: '24px',
            }}
          >
            {isModalProfileOpen.toString().slice(0, 1)}
          </Avatar>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={isModalProfileOpen}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleProfileRoute}>Profile</MenuItem>
          <MenuItem onClick={handleWalletsRoute}>Wallets</MenuItem>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Menu>
      </Container>
    </Box>
  );
};
