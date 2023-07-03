import * as React from 'react';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
// import PaginationTable from './PaginationTable';
import SimpleTable from './SimpleTable';
import Button from '@mui/material/Button';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const AppTable = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Request for Quotation', path: '/order/rfq' }]} />
      </Box>

      <Button
        style={{
          marginBottom: '10px',
        }}
        variant="contained"
        href="rfq/addnew"
      >
        Add New
      </Button>

      <SimpleCard title="Request for Qutotation List">
        <SimpleTable />
      </SimpleCard>

      {/* <SimpleCard title="Pagination Table">
        <PaginationTable />
      </SimpleCard> */}
    </Container>
  );
};

export default AppTable;
