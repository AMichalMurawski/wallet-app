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
import { diagramData } from '../../devUtils';

const columns = [
  { id: 'date', label: 'Date', minWidth: 45 },
  { id: 'type', label: 'Type', minWidth: 20, align: 'center' },
  { id: 'category', label: 'Category', minWidth: 90 },
  { id: 'comment', label: 'Comment', minWidth: 120 },
  { id: 'sum', label: 'Sum', minWidth: 70, align: 'right' },
  { id: 'edit', label: '', minWidth: 20, align: 'center' },
  { id: 'delete', label: '', minWidth: 60, align: 'center' },
];

export const Diagram = () => {
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
            {diagramData.map((data, i) => {
              <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                {columns.map(column => {
                  const value = data[column.id];
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
