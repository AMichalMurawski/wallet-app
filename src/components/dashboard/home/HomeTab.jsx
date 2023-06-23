import { Box } from '@mui/material';
import { useMediaMui } from '../../../hooks';
import { Balance } from '../Balance';
import { transactionsData } from '../../../devUtils/transactionsData';
import { HomeTable } from './HomeTable';
import { HomeCard } from './HomeCard';

const HomeTab = () => {
  const mediaMui = useMediaMui();

  return (
    <Box sx={{ minHeight: 1 }}>
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
      <Box>
        {mediaMui.tablet ? (
          <HomeTable transactionsData={transactionsData} />
        ) : (
          <HomeCard transactionsData={transactionsData} />
        )}
      </Box>
    </Box>
  );
};

export default HomeTab;
