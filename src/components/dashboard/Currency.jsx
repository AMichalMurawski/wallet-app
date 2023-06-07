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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          width="100%"
          height="100%"
        >
          <polyline
            points="50,250 150,150 200,200 300,100"
            fill="none"
            stroke="lightblue"
            strokeWidth="2%"
            markerEnd="url(#blue-arrow)"
          />

          <defs>
            <marker
              id="blue-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="lightblue" />
            </marker>
          </defs>
        </svg>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
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
