import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SideNavBar from "../components/SideNavBar/SideNavBar";


const columns = [
  {
    field: "id",
    headerName: "Id",
    flex: 90,
  },
  {
    field: "index",
    headerName: "Index",
    flex: 90,
  },
  {
    field: "gateNo",
    headerName: "Gate No",
    flex: 150,
  },
  {
    field: "in",
    headerName: "IN",
    flex: 150,
  },
  {
    field: "faculty",
    headerName: "Faculty",
    flex: 110,
  },
  {
    field: "batch",
    headerName: "Batch",
    flex: 110,
  },
];

const rows = [
  {
    id: 1,
    index: "190647X",
    gateNo: 1,
    in: "09:20  12/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
  {
    id: 2,
    index: "190377T",
    gateNo: 2,
    in: "10:20  10/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
  {
    id: 3,
    index: "190705B",
    gateNo: 1,
    in: "08:20  12/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
  {
    id: 4,
    index: "190064G",
    gateNo: 3,
    in: "07:20  11/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
  {
    id: 5,
    index: "190545H",
    gateNo: 2,
    in: "06:20  12/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
  {
    id: 6,
    index: "190242C",
    gateNo: 2,
    in: "10:30  02/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
  {
    id: 7,
    index: "190653L",
    gateNo: 3,
    in: "07:20  01/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
  {
    id: 8,
    index: "190649T",
    gateNo: 1,
    in: "11:20  12/07/2023",
    faculty: "Eng.",
    batch: "19 batch",
  },
];


function AdminView() {

	const [indexNo, setIndexNo] = useState(null);

	const handlePaginationChange = (model, details) => {
		console.log(model, details);
	}
	
	const handleIndexNoChange = (value) => {
		setIndexNo(value.target.value);
	}
	
	return (
		<div className='container'>
			<Box sx={{ marginX: '300px', marginY: '20px', paddingX: '20px', paddingY: '10px', background: '#D9D9D9', borderRadius: '10px' }}>
				<Grid container rowSpacing={2} columnSpacing={5} >
					<Grid item xs={8}>
						<Box sx={{ fontWeight: 'bolder', fontSize: '22px' }}>Date</Box>
					</Grid>
					<Grid item xs={2}>
						<Box sx={{ fontWeight: 'bolder', fontSize: '22px' }}>Index No</Box>
					</Grid>
					{/* <Grid item xs={2}>
						<Box sx={{ fontWeight: 'bolder', fontSize: '22px' }}>Batch</Box>
					</Grid> */}
					<Grid item xs={2}>
						<Box>
							<Button fullWidth size="small" variant="contained" sx={{ backgroundColor: '#4154F1' }}>Filter</Button>
						</Box>
					</Grid>
					<Grid item xs={8}>
						<Box sx={{ display: 'flex', gap: '30px' }}>
							<LocalizationProvider dateAdapter={AdapterMoment}>
								<Box sx={{ display: 'flex', gap: '10px' }}>
									<div>From</div>
									<DatePicker slotProps={{ textField: { size: 'small' } }} />
								</Box>
								<Box sx={{ display: 'flex', gap: '10px' }}>
									<div>To</div>
									<DatePicker slotProps={{ textField: { size: 'small' } }} />
								</Box>
							</LocalizationProvider>
						</Box>
					</Grid>
					<Grid item xs={2}>
						<Box>
							<TextField value={indexNo} onChange={handleIndexNoChange} id="index" size='small' variant="outlined" />
						</Box>
					</Grid>
					{/* <Grid item xs={2}>
						<Box>
							<FormControl fullWidth size="small">
								<Select>
									<MenuItem value={1}>19</MenuItem>
									<MenuItem value={2}>20</MenuItem>
									<MenuItem value={3}>21</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Grid> */}
					<Grid item xs={2}>
						<Box>
							<Button fullWidth size="small" variant="outlined">Clear</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: '100%' }}>
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
					disableColumnFilter={true}
					onPaginationModelChange={handlePaginationChange}
				/>
			</Box>
		</div>
	)
}

export default AdminView;
