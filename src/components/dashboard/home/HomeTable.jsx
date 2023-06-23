import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

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

export const HomeTable = ({ transactionsData }) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns(transactionsData).map(column => {
              console.log(column.id);
              return (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    width: column.minWidth,
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: 'calc(27 / 18)',
                    padding: '12px',
                    borderTopLeftRadius: column.id === 'date' ? '30px' : null,
                    borderBottomLeftRadius:
                      column.id === 'date' ? '30px' : null,
                    borderTopRightRadius: column.id === 'sum' ? '30px' : null,
                    borderBottomRightRadius:
                      column.id === 'sum' ? '30px' : null,
                    backgroundColor: 'background.category',
                    borderBottom: 'none',
                  }}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody sx={{ padding: '6px' }}>
          {dataPage({
            tableData: transactionsData,
            page: 1,
            perPage: 10,
          }).map((row, i) => (
            <TableRow role="checkbox" tabIndex={-1} key={i}>
              {columns(transactionsData).map(column => {
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
  );
};
