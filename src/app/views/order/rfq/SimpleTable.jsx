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
import moment from 'moment';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

// const subscribarList = [
//   {
//     name: 'john doe',
//     date: '18 january, 2019',
//     amount: 1000,
//     status: 'close',
//     company: 'ABC Fintech LTD.',
//   },
//   {
//     name: 'kessy bryan',
//     date: '10 january, 2019',
//     amount: 9000,
//     status: 'open',
//     company: 'My Fintech LTD.',
//   },
//   {
//     name: 'james cassegne',
//     date: '8 january, 2019',
//     amount: 5000,
//     status: 'close',
//     company: 'Collboy Tech LTD.',
//   },
//   {
//     name: 'lucy brown',
//     date: '1 january, 2019',
//     amount: 89000,
//     status: 'open',
//     company: 'ABC Fintech LTD.',
//   },
//   {
//     name: 'lucy brown',
//     date: '1 january, 2019',
//     amount: 89000,
//     status: 'open',
//     company: 'ABC Fintech LTD.',
//   },
//   {
//     name: 'lucy brown',
//     date: '1 january, 2019',
//     amount: 89000,
//     status: 'open',
//     company: 'ABC Fintech LTD.',
//   },
// ];
const start = performance.now();

const SimpleTable = () => {
  const [rfqs, setRfqs] = React.useState([]);
  var query = `query{
      rfqs{
          id
          rfq_no
          rfq_date
          unit_code
          status
          vessel_id
          service_type
      }
  }`;
  // var query = `query{
  //     rfqs{
  //       id
  //       rfq_no
  //       rfq_date
  //       unit_code
  //       status
  //       vessel_id
  //       service_type
  //       detail {
  //           id
  //           item_service
  //           description
  //           price
  //       }
  //   }
  // }`;
  const list_rfq = async () => {
    try {
      //rest
      // let response = await fetch('http://localhost:3001/api/rfq');
      // let response_details = await fetch('http://localhost:3001/api/rfq/details');
      //graphql
      let responses = await fetch('http://127.0.0.1:8000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      });
      //rest
      // const rfq = await response.json();
      // const rfq_details = await response_details.json();
      // console.log(rfq.data);
      // console.log(rfq_details);
      // setRfqs(rfq.data);
      // //graphql
      const rfqs = await responses.json();
      console.log(rfqs.data.rfqs);
      setRfqs(rfqs.data.rfqs);
    } catch (e) {
      console.log(e.message);
    }
  };

  React.useEffect(() => {
    list_rfq();
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
  }, []);

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
          {rfqs.map((rfq, index) => (
            <TableRow key={index}>
              <TableCell align="left">{rfq.rfq_no}</TableCell>
              <TableCell align="center">{moment(rfq.rfq_date).format('DD-MM-YYYY')}</TableCell>
              <TableCell align="center">{rfq.service_group}</TableCell>
              <TableCell align="center">{rfq.unit_code}</TableCell>
              <TableCell align="center">{rfq.status}</TableCell>
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
