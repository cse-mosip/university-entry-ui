import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'Id',
        flex: 90
    },
  { 
    field: 'index', 
    headerName: 'Index', 
    flex: 90 },
  {
    field: 'gateNo',
    headerName: 'Gate No',
    flex: 150
  },
  {
    field: 'in',
    headerName: 'IN',
    flex: 150
  },
  {
    field: 'faculty',
    headerName: 'Faculty',
    flex: 110
  },
  {
    field: 'batch',
    headerName: 'Batch',
    flex: 110
  }
];

const rows = [
  {id:1, index: '190647X', gateNo: 1, in: '09:20  12/07/2023', faculty: "Eng.", batch: '19 batch'},
  {id:2, index: '190377T', gateNo: 2, in: '10:20  10/07/2023', faculty: "Eng.", batch: '19 batch'},
  {id:3, index: '190705B', gateNo: 1, in: '08:20  12/07/2023', faculty: "Eng.", batch: '19 batch'},
  {id:4, index: '190064G', gateNo: 3, in: '07:20  11/07/2023', faculty: "Eng.", batch: '19 batch'},
  {id:5, index: '190545H', gateNo: 2, in: '06:20  12/07/2023', faculty: "Eng.", batch: '19 batch'},
  {id:6, index: '190242C', gateNo: 2, in: '10:30  02/07/2023', faculty: "Eng.", batch: '19 batch'},
  {id:7, index: '190653L', gateNo: 3, in: '07:20  01/07/2023', faculty: "Eng.", batch: '19 batch'},
  {id:8, index: '190649T', gateNo: 1, in: '11:20  12/07/2023', faculty: "Eng.", batch: '19 batch'}
];



function AdminView() {
  return (
    <div>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}

export default AdminView