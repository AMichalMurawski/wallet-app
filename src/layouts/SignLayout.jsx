import { IconSVG, IconLogo } from '../components/icons';
import { useMediaMui } from '../hooks';
import { Box } from '@mui/material';

const cssWindow = mediaMui => {
  const css = mediaMui.desktop
    ? {
        display: 'flex',
        flexDirection: 'row',
      }
    : mediaMui.tablet
    ? {
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
        padding: '60px 118px 48px',
      }
    : null;
  return {
    ...css,
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
  };
};

const cssLeftBox = mediaMui => {
  const css = mediaMui.desktop
    ? {
        flexBasis: 'calc(42.9%)',
        height: 'auto',
        paddingRight: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }
    : null;
  return {
    ...css,
  };
};

const cssIconBox = mediaMui => {
  const css = mediaMui.desktop
    ? {
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        alignItems: 'center',
      }
    : mediaMui.tablet
    ? {
        width: '534px',
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }
    : null;
  return {
    ...css,
    '&::after': {
      content: "'Finance App'",
      fontSize: '30px',
      lineHeight: '1.5',
    },
  };
};

const cssFormBox = mediaMui => {
  const css = mediaMui.desktop
    ? {
        flexBasis: 'calc(57.1%)',
        height: 'auto',
        paddingLeft: '107px',
        backgroundColor: 'background.blur',
        backdropFilter: 'blur(25px)',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }
    : mediaMui.tablet
    ? {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }
    : {
        height: '100%',
        minHeight: '100vh',
        backgroundColor: 'background.blur',
        backdropFilter: 'blur(25px)',
        alignItems: 'center',
      };
  return {
    ...css,
    display: 'flex',
    flexDirection: 'column',
  };
};

const cssFormContainer = mediaMui => {
  const css = mediaMui.tablet
    ? {
        width: '533px',
        padding: '40px 60px 60px',
        backgroundColor: 'background.elements',
        borderRadius: '20px',
      }
    : {
        width: '100vw',
        padding: '32px 20px 36px',
      };
  return {
    ...css,
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    alignItems: 'center',
  };
};

export const SignLayout = ({ svgName, Form }) => {
  const mediaMui = useMediaMui();

  return (
    <Box sx={{ ...cssWindow(mediaMui) }}>
      {mediaMui.tablet ? (
        <Box sx={{ ...cssLeftBox(mediaMui) }}>
          <Box sx={{ ...cssIconBox(mediaMui) }}>
            {mediaMui.desktop ? (
              <IconSVG
                name={svgName}
                sx={{ width: '435px', height: '420px' }}
              />
            ) : (
              <IconSVG
                name={svgName}
                sx={{ width: '265px', height: '250px' }}
              />
            )}
          </Box>
        </Box>
      ) : null}
      <Box sx={{ ...cssFormBox(mediaMui) }}>
        <Box sx={{ ...cssFormContainer(mediaMui) }}>
          <IconLogo />
          {Form}
        </Box>
      </Box>
    </Box>
  );
};
