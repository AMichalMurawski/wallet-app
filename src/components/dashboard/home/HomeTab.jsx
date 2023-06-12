import { Box, Typography } from '@mui/material';
import { useMediaMui } from '../../../hooks';
import { Balance } from '../Balance';

const HomeTab = () => {
  const mediaMui = useMediaMui();
  return (
    <Box>
      {!mediaMui.tablet ? (
        <Box
          sx={{
            width: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: '12px',
          }}
        >
          <Balance />
        </Box>
      ) : null}
    </Box>
  );
};

export default HomeTab;
