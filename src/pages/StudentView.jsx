import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import StudentDateFilter from "../components/studentDateFilter";
// import SideNavBar from "../components/SideNavBar/StudentViewSideNav";
import { getStudentRecords } from "../services/studentViewService";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const columns = [
  {
    field: "gate_name",
    headerName: "Gate Name",
    flex: 90,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    flex: 80,
  },
  {
    field: "state",
    headerName: "State",
    flex: 80,
  },
];

const mockRows = [
  {
    id: 1,
    gate_name: "1",
    timestamp: "09:20  12/07/2023",
    state: "IN",
  },
  {
    id: 2,
    gate_name: "1",
    timestamp: "09:20  12/07/2023",
    state: "IN",
  },
  {
    id: 3,
    gate_name: "1",
    timestamp: "09:20  12/07/2022",
    state: "IN",
  },
  {
    id: 4,
    gate_name: "1",
    timestamp: "09:20  12/07/2021",
    state: "IN",
  },
];

const StudentView = () => {
  const [records, setRecords] = useState([]);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getStudentRecords();
        setRecords(response.records);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    const rows = [];
    let id = 1;
    records.forEach((record) => {
      rows.push({
        id: id,
        gate_name: record.gate_name,
        timestamp: record.timestamp,
        state: record.state,
      });
      id++;
    });
    setRows(rows);
    setFilteredRows(rows);
  }, [records]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "60px",
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        height: "100%",
      }}
    >
      <SideNavBar role={"STUDENT"} />
      <Box>
        <Box
          sx={{
            marginX: "200px",
            marginY: "20px",
            paddingX: "20px",
            paddingY: "10px",
            background: "#D9D9D9",
            borderRadius: "10px",
            width: "60%",
          }}
        >
          <Grid container rowSpacing={2} columnSpacing={5}>
            <Grid item xs={10}>
              <Box sx={{ fontWeight: "bolder", fontSize: "22px" }}>Date</Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ backgroundColor: "#4154F1", padding: "2px 10px" }}
                  onClick={() => {
                    const filteredRows = rows.filter((record) => {
                      const recordTimestamp = new Date(record.timestamp);
                      return (
                        (!startDate || recordTimestamp >= startDate) &&
                        (!endDate || recordTimestamp <= endDate)
                      );
                    });
                    setFilteredRows(filteredRows);
                  }}
                >
                  Generate History
                </Button>
              </Box>
            </Grid>
            <Grid item xs={10}>
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
                      onChange={(newDate) => setEndDate(newDate)}
                    />
                  </Box>
                </LocalizationProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: "95%", height: "65%" }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StudentView;
