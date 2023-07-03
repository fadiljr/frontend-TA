import {
  Box,
  // Icon,
  // IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Button from '@mui/material/Button';
// import OptionButton from './Option';
// import { Fab } from '@mui/material';
// import SettingsIcon from '@mui/icons-material/Settings';
import * as React from 'react';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const subscribarList = [
  {
    name: 'john doe',
    date: '18 january, 2019',
    amount: 1000,
    status: 'close',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'kessy bryan',
    date: '10 january, 2019',
    amount: 9000,
    status: 'open',
    company: 'My Fintech LTD.',
  },
  {
    name: 'james cassegne',
    date: '8 january, 2019',
    amount: 5000,
    status: 'close',
    company: 'Collboy Tech LTD.',
  },
  {
    name: 'lucy brown',
    date: '1 january, 2019',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    date: '1 january, 2019',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    date: '1 january, 2019',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
];

const SimpleTable = () => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">RFQ No</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Division</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.company}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">${subscriber.amount}</TableCell>
              <TableCell align="center">
                <Button variant="contained" size="small">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
