import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useMediaMui } from '../../hooks';
import { currencyData } from '../../devUtils';
import { IconSVG } from '../icons/IconSVG';

const columns = currencyData => {
  const data = currencyData[0];
  const col = [];
  for (const key in data) {
    const id = key;
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    const width = '33%';
    col.push({ id, label, width });
  }
  return col;
};

export const Currency = () => {
  const mediaMui = useMediaMui();
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: mediaMui.desktop
          ? '395px'
          : mediaMui.tablet
          ? '336px'
          : '280px',
        overflow: 'hidden',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#F0F8FF',
        borderRadius: '30px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: '0',
          top: '0',
          zIndex: -1,
        }}
      >
        <IconSVG
          name="diagram"
          sx={{ width: '100%', height: '100%' }}
        ></IconSVG>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: '#E1EBEE' }}>
            <TableRow>
              {columns(currencyData).map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    width: column.minWidth,
                    backgroundColor: 'transparent',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyData.map((row, i) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                {columns(currencyData).map(column => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
