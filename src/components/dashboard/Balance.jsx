import { Box, Typography } from '@mui/material';
import { useMediaMui } from '../../hooks';

export const Balance = () => {
  const mediaMui = useMediaMui();

  return (
    <Box
      sx={{
        maxWidth: mediaMui.desktop
          ? '395px'
          : mediaMui.tablet
          ? '336px'
          : '280px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '8px 40px 11px',
        backgroundColor: 'background.category',
        borderRadius: '30px',
      }}
    >
      <Typography
        sx={{
          textTransform: 'uppercase',
          color: 'text.light',
          fontSize: '12px',
          lineHeight: '1.5',
        }}
      >
        Your balance
      </Typography>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '30px',
          lineHeight: '1.5',
        }}
      >
        24 548,24 zł
      </Typography>
    </Box>
  );
};
