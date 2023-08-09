import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const StudentDateFilter = () => {
  return (
    <>
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
          <Grid item xs={10}>
            <Box sx={{ fontWeight: "bolder", fontSize: "22px" }}>Date</Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Button 
                size="small"
                variant="contained"
                sx={{ backgroundColor: "#4154F1", padding:"2px 10px" }}
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
                  <DatePicker slotProps={{ textField: { size: "small" } }} />
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <div>To</div>
                  <DatePicker slotProps={{ textField: { size: "small" } }} />
                </Box>
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StudentDateFilter;
