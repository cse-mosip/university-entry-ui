import React from "react";
import { Grid, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  StyledRoot,
  StyledBox,
  StyledLabel,
  StyledTextField,
  StyledSelect,
  StyledRadioGroup,
  StyledRadio,
  StyledButtonBox
} from "./GusetRegistrationStyles";

function GuestRegistration() {
  const [title, setTitle] = React.useState("Mr.");
  const [gender, setGender] = React.useState("male");
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <StyledRoot>
      <Typography
          variant="h5"
          sx={{ color: "#4154F1", fontWeight: 700, marginBottom: "30px",paddingTop: "30px", paddingLeft: "10%" }}
        >
          Guest Registration Form
        </Typography>
      <StyledBox>
        <Typography
          variant="h5"
          sx={{ color: "#198754", fontWeight: 700, marginBottom: "30px" }}
        >
          Guest Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <StyledLabel>Name</StyledLabel>
          </Grid>

          <Grid item xs={2}>
            <StyledSelect variant="outlined" value={title}>
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Mrs.">Mrs.</MenuItem>
              <MenuItem value="Miss.">Miss.</MenuItem>
            </StyledSelect>
          </Grid>

          <Grid item xs={6}>
            <StyledTextField variant="outlined" />
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>Phone Number</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledTextField variant="outlined" />
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>NIC</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledTextField variant="outlined" />
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>Gender</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledRadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="male"
                control={<StyledRadio />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<StyledRadio />}
                label="Female"
              />
            </StyledRadioGroup>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{ color: "#198754", fontWeight: 700, marginBottom: "30px", marginTop: "30px" }}
        >
          Inviter
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <StyledLabel>Name</StyledLabel>
          </Grid>

          <Grid item xs={2}>
            <StyledSelect variant="outlined" value={title}>
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Mrs.">Mrs.</MenuItem>
              <MenuItem value="Miss.">Miss.</MenuItem>
            </StyledSelect>
          </Grid>

          <Grid item xs={6}>
            <StyledTextField variant="outlined" />
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>Index</StyledLabel>
          </Grid>
          <Grid item xs={8}>
            <StyledTextField variant="outlined" />
          </Grid>
        </Grid>

        <StyledButtonBox>
        <Button variant="contained" sx={{ bgcolor: '#4154F1', '&:hover': { backgroundColor: '#3249C9' }, padding: '8px 25px', fontSize: '16px' }}>
            Proceed
          </Button>
          <Button variant="contained" sx={{ bgcolor: '#DC3545', '&:hover': { backgroundColor: '#C02942' }, padding: '8px 25px', fontSize: '16px' }}>
            Cancel
          </Button>
        </StyledButtonBox>

      </StyledBox>
    </StyledRoot>
  );
}

export default GuestRegistration;
