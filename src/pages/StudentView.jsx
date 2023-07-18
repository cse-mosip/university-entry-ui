import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import StudentDateFilter from "../components/studentDateFilter";
import SideNavBar from "../components/SideNavBar/SideNavBar";

const columns = [
  {
    field: "gateNo",
    headerName: "Gate No.",
    flex: 90,
  },
  {
    field: "in",
    headerName: "IN",
    flex: 140,
  },
  {
    field: "out",
    headerName: "OUT",
    flex: 140,
  },
];

const rows = [
  {
    id: 1,
    gateNo: "1",
    in: "09:20  12/07/2023",
    out: "09:20  12/07/2023",
  },
  {
    id: 2,
    gateNo: 2,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
  {
    id: 3,
    gateNo: 1,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
  {
    id: 4,
    gateNo: 3,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
  {
    id: 5,
    gateNo: 2,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
  {
    id: 6,
    gateNo: 1,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
  {
    id: 7,
    gateNo: 3,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
  {
    id: 8,
    gateNo: 2,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
  {
    id: 9,
    gateNo: 1,
    in: "10:20  10/07/2023",
    out: "10:20  10/07/2023",
  },
];

const StudentView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
      }}
    >
      <SideNavBar />
      <Box>
        <StudentDateFilter />
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
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StudentView;
