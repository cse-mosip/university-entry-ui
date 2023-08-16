import { getDetails } from "../services/adminViewService";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SideNavBar from "../components/SideNavBar/AdminViewSideNavBar";

const columns = [
  {
    field: "index",
    headerName: "Index",
    flex: 90,
  },
  {
    field: "gate_name",
    headerName: "Gate Name",
    flex: 90,
  },
  {
    field: "timestamp",
    headerName: "IN",
    flex: 90,
  },
];

function AdminView() {
  const [indexNo, setIndexNo] = useState(null);
  const [rows, setRows] = useState([]);
  const [originalRows, setOriginalRows] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handlePaginationChange = (model, details) => {
    console.log(model, details);
  };

  const handleIndexNoChange = (value) => {
    setIndexNo(value.target.value);
    // console.log(indexNo);
  };

  const clearData = () => {
    setIndexNo(null);
    setStartDate(null);
    setEndDate(null);
    setRows(originalRows);
    window.location.reload();
  };

  const handleFilter = () => {
    if (indexNo !== null) {
      const newData = originalRows.filter((item) => item.index === indexNo);
      console.log(newData);
      setRows(newData);
    }
    if (startDate !== null && endDate !== null) {
      const filteredRows = originalRows.filter((record) => {
        const recordTimestamp = new Date(record.timestamp);
        return (
          (!startDate || recordTimestamp >= startDate) &&
          (!endDate || recordTimestamp <= endDate)
        );
      });
      setRows(filteredRows);
    }
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getDetails();
        console.log(response.data);
        const data = response.data.records;
        const rowsWithIds = data.map((row, index) => ({ ...row, id: index }));
        setRows(rowsWithIds);
        setOriginalRows(rowsWithIds);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div style={{ display: "flex", height: "100%" }}>
        <SideNavBar />
        <Box
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            height: "60%",
            width: "80%",
            // margin: '0 0 0 250px'
          }}
        >
          <Box
            sx={{
              marginX: "300px",
              marginY: "20px",
              paddingX: "20px",
              paddingY: "10px",
              background: "#D9D9D9",
              borderRadius: "10px",
            }}
          >
            <Grid container rowSpacing={2} columnSpacing={5}>
              <Grid item xs={8}>
                <Box sx={{ fontWeight: "bolder", fontSize: "22px" }}>Date</Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{ fontWeight: "bolder", fontSize: "22px" }}>
                  Index No
                </Box>
              </Grid>
              {/* <Grid item xs={2}>
						<Box sx={{ fontWeight: 'bolder', fontSize: '22px' }}>Batch</Box>
					</Grid> */}
              <Grid item xs={2}>
                <Box>
                  <Button
                    fullWidth
                    onClick={handleFilter}
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: "#4154F1" }}
                  >
                    Filter
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box sx={{ display: "flex", gap: "30px" }}>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <div>From</div>
                      <DatePicker
                        slotProps={{ textField: { size: "small" } }}
                        value={startDate}
                        onChange={(newDate) => setStartDate(newDate)}
                      />
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <div>To</div>
                      <DatePicker
                        slotProps={{ textField: { size: "small" } }}
                        value={endDate}
                        onChange={(endDate) => setEndDate(endDate)}
                      />
                    </Box>
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box>
                  <TextField
                    value={indexNo}
                    onChange={handleIndexNoChange}
                    id="index"
                    size="small"
                    variant="outlined"
                  />
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
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    onClick={clearData}
                  >
                    Clear
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
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
              disableRowSelectionOnClick
              disableColumnFilter={true}
              onPaginationModelChange={handlePaginationChange}
            />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default AdminView;
