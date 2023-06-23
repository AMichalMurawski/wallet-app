import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
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

export const HomeCard = ({ transactionsData }) => {
  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '280px', display: 'flex', flexDirection: 'row' }}>
        <Box
          sx={{
            width: '5px',
            height: '100%',
            backgroundColor: 'red',
            marginRight: '15px',
          }}
        />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          columns={{ min: 10 }}
        >
          <Grid item min={4}>
            Title adfdvzd df dfdadf f f d gdfdaf af df daf fd d fd gfd d
          </Grid>
          <Grid item min={5}>
            Value
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
