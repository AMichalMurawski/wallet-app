import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useMediaMui } from '../../../hooks';
import { Balance } from '../Balance';
import { transactionsData } from '../../../devUtils/transactionsData';

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

const dataPage = ({ tableData, page, perPage }) => {
  const from = (page - 1) * perPage;
  const to = page * perPage;
  const data = tableData.slice(from, to);
  return data;
};

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
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns(transactionsData).map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      width: column.minWidth,
                      backgroundColor: 'transparent',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: 'calc(27 / 18)',
                      padding: '12px',
                      backgroundColor: 'white',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ padding: '6px' }}>
              {dataPage({
                tableData: transactionsData,
                page: 1,
                perPage: 8,
              }).map((row, i) => (
                <TableRow role="checkbox" tabIndex={-1} key={i}>
                  {columns(transactionsData).map(column => {
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
    </Box>
  );
};

export default HomeTab;
