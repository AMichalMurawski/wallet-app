import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useMediaMui } from '../../hooks';

const columns = [
  { id: 'date', label: 'Date', minWidth: 45 },
  { id: 'type', label: 'Type', minWidth: 20, align: 'center' },
  { id: 'category', label: 'Category', minWidth: 90 },
  { id: 'comment', label: 'Comment', minWidth: 120 },
  { id: 'sum', label: 'Sum', minWidth: 70, align: 'right' },
  { id: 'edit', label: '', minWidth: 20, align: 'center' },
  { id: 'delete', label: '', minWidth: 60, align: 'center' },
];

const rows = [
  {
    Date: '27.05.2023',
    Type: 'Leisure',
    Category: 'Expense',
    Comment: 'Noffkdgd',
    Sum: 631.51,
  },
  {
    Date: '22.05.2023',
    Type: 'Child care',
    Category: 'Expense',
    Comment: 'Bidsofkodgd',
    Sum: 720.28,
  },
  {
    Date: '15.05.2023',
    Type: 'Main incomes',
    Category: 'Income',
    Comment: 'Pnjdnfdfd',
    Sum: 664.9,
  },
  {
    Date: '22.05.2023',
    Type: 'Main incomes',
    Category: 'Income',
    Comment: 'Bidsofkodgd',
    Sum: 323.64,
  },
  {
    Date: '23.05.2023',
    Type: 'Paycheck',
    Category: 'Income',
    Comment: 'Xmdkfnflg',
    Sum: 966.64,
  },
  {
    Date: '23.05.2023',
    Type: 'Other incomes',
    Category: 'Income',
    Comment: 'Ekfdndondf',
    Sum: 909.1,
  },
  {
    Date: '15.05.2023',
    Type: 'Household products',
    Category: 'Expense',
    Comment: 'Bidsofkodgd',
    Sum: 685.74,
  },
  {
    Date: '20.05.2023',
    Type: 'Products',
    Category: 'Expense',
    Comment: 'Bidsofkodgd',
    Sum: 516.97,
  },
  {
    Date: '21.05.2023',
    Type: 'Self care',
    Category: 'Expense',
    Comment: 'Ekfdndondf',
    Sum: 655.7,
  },
  {
    Date: '04.06.2023',
    Type: 'Products',
    Category: 'Expense',
    Comment: 'Ekfdndondf',
    Sum: 26390,
  },
  {
    Date: '24.05.2023',
    Type: 'Education',
    Category: 'Expense',
    Comment: 'Pnjdnfdfd',
    Sum: 659.85,
  },
  {
    Date: '30.05.2023',
    Type: 'Paycheck',
    Category: 'Income',
    Comment: 'Gnivmdkf',
    Sum: 659.83,
  },
  {
    Date: '27.05.2023',
    Type: 'Other incomes',
    Category: 'Income',
    Comment: 'Noffkdgd',
    Sum: 964.6,
  },
  {
    Date: '19.05.2023',
    Type: 'Products',
    Category: 'Expense',
    Comment: 'Noffkdgd',
    Sum: 53.68,
  },
  {
    Date: '23.05.2023',
    Type: 'Child care',
    Category: 'Expense',
    Comment: 'Nosfdgfd',
    Sum: 189.21,
  },
  {
    Date: '28.05.2023',
    Type: 'Other incomes',
    Category: 'Income',
    Comment: 'Anjjnlk',
    Sum: 183.95,
  },
  {
    Date: '21.05.2023',
    Type: 'Main expenses',
    Category: 'Expense',
    Comment: 'Nosfdgfd',
    Sum: 192.59,
  },
  {
    Date: '05.06.2023',
    Type: 'Education',
    Category: 'Expense',
    Comment: 'Fdfofdfd',
    Sum: 455.63,
  },
  {
    Date: '24.05.2023',
    Type: 'Main incomes',
    Category: 'Income',
    Comment: 'Anjjnlk',
    Sum: 113.4,
  },
  {
    Date: '01.06.2023',
    Type: 'Car',
    Category: 'Expense',
    Comment: 'Anjjnlk',
    Sum: 950.15,
  },
  {
    Date: '17.05.2023',
    Type: 'Products',
    Category: 'Expense',
    Comment: 'Ekfdndondf',
    Sum: 198.84,
  },
  {
    Date: '09.05.2023',
    Type: 'Self care',
    Category: 'Expense',
    Comment: 'Nosfdgfd',
    Sum: 780.76,
  },
  {
    Date: '27.05.2023',
    Type: 'Car',
    Category: 'Expense',
    Comment: 'Fdfofdfd',
    Sum: 335.52,
  },
];

export const Currency = () => {
  const mediaMui = useMediaMui();
  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: mediaMui.desktop
          ? '395px'
          : mediaMui.tablet
          ? '336px'
          : '280px',
        overflow: 'hidden',
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                {columns.map(column => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
