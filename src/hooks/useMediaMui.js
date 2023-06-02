import { useMediaQuery } from '@mui/material';

export const useMediaMui = () => {
  const desktop = useMediaQuery(theme => theme.breakpoints.up('desktop'));
  const tablet = useMediaQuery(theme => theme.breakpoints.up('tablet'));
  const mobile = useMediaQuery(theme => theme.breakpoints.up('min'));

  return {
    desktop,
    tablet,
    mobile,
  };
};
