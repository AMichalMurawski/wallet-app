import { Box, Typography } from '@mui/material';
import { useMediaMui } from '../../hooks';
import { IconSVG } from './IconSVG';

export const IconLogo = () => {
  const mediaMui = useMediaMui();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: mediaMui.tablet ? '20px' : '15px',
        alignItems: 'center',
        fontWeight: '700',
        lineHeight: '1.5',
      }}
    >
      <IconSVG
        name="logo"
        sx={{
          color: 'icon.logo',
          width: mediaMui.tablet ? '40px' : '30px',
          height: mediaMui.tablet ? '40px' : '30px',
        }}
      />
      <Typography
        sx={{
          fontSize: mediaMui.tablet ? '30px' : '20px',
          color: 'text.main',
        }}
      >
        Wallet
      </Typography>
    </Box>
  );
};
