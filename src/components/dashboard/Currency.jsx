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

const columns = tableData => {
  const data = tableData[0];
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
        width: mediaMui.desktop ? '395px' : mediaMui.tablet ? '336px' : '280px',
        position: 'relative',
        margin: !mediaMui.tablet ? '0 auto' : null,
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
          <TableHead>
            <TableRow>
              {columns(currencyData).map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    width: column.minWidth,
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: 'calc(27 / 18)',
                    padding: '12px',
                    borderTopLeftRadius:
                      column.id === 'currency' ? '30px' : null,
                    borderBottomLeftRadius:
                      column.id === 'currency' ? '30px' : null,
                    borderTopRightRadius: column.id === 'sale' ? '30px' : null,
                    borderBottomRightRadius:
                      column.id === 'sale' ? '30px' : null,
                    backgroundColor: 'background.category',
                    borderBottom: 'none',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ padding: '6px' }}>
            {currencyData.map((row, i) => (
              <TableRow role="checkbox" tabIndex={-1} key={i}>
                {columns(currencyData).map(column => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        borderBottom: 'none',
                        boxShadow: '0 1px 0 0 #FFF9',
                      }}
                    >
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
