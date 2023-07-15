import React from "react";
import { Grid, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useFormik} from "formik"
import * as Yup from 'yup';

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


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').matches(/^[A-Za-z\s]+$/, 'Invalid Name'),
  mobile: Yup.string().required('Phone Number is required').matches(/^(\+94|0)\d{9}$/, 'Invalid phone number'),
  nic: Yup.string().required('NIC is required').matches(/^(\d{9}V|\d{12})$/, 'Invalid NIC'),
  iName: Yup.string().required('Inviter Name is required').matches(/^[A-Za-z\s]+$/, 'Invalid Name'),
  indexNo: Yup.string().required('Index is required').matches(/^\d{6}[a-zA-Z]$/, 'Invalid index number'),
});

function GuestRegistration() {

  const guestFormik = useFormik({
    initialValues: {
      title: 'Mr.',
      name: '',
      mobile: '',
      nic: '',
      gender: 'male',
      invitorTitle: 'Mr.',
      iName: '',
      indexNo: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      // call api
      resetForm();
    }
  });

  const handleTitleChange = (event) => {
    guestFormik.setFieldValue('title', event.target.value);
  };

  const handleInvitorTitleChange = (event) => {
    guestFormik.setFieldValue('invitorTitle', event.target.value);
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
            <StyledSelect variant="outlined" value={guestFormik.values.title} onChange={handleTitleChange}>
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Mrs.">Mrs.</MenuItem>
              <MenuItem value="Miss.">Miss.</MenuItem>
            </StyledSelect>
          </Grid>

          <Grid item xs={6}>
            <StyledTextField variant="outlined" name = "name" id="name" type="text" value={guestFormik.values.name} onChange={guestFormik.handleChange} onBlur={guestFormik.handleBlur} error={Boolean(guestFormik.touched.name && guestFormik.errors.name)} helperText={guestFormik.touched.name && guestFormik.errors.name}/>
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>Phone Number</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledTextField variant="outlined" name = "mobile" id="mobile" type="tel" value={guestFormik.mobile} onChange={guestFormik.handleChange} onBlur={guestFormik.handleBlur} error={Boolean(guestFormik.touched.mobile && guestFormik.errors.mobile)} helperText={guestFormik.touched.mobile && guestFormik.errors.mobile}/>
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>NIC</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledTextField variant="outlined" name = "nic" id="nic" type="text" value={guestFormik.nic} onChange={guestFormik.handleChange} onBlur={guestFormik.handleBlur} error={Boolean(guestFormik.touched.nic && guestFormik.errors.nic)} helperText={guestFormik.touched.nic && guestFormik.errors.nic}/>
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>Gender</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledRadioGroup
              aria-label="gender"
              name="gender"
              value={guestFormik.values.gender}
              onChange={guestFormik.handleChange}
              onBlur={guestFormik.handleBlur}
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
            <StyledSelect variant="outlined" value={guestFormik.values.invitorTitle} onChange={handleInvitorTitleChange}>
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Mrs.">Mrs.</MenuItem>
              <MenuItem value="Miss.">Miss.</MenuItem>
            </StyledSelect>
          </Grid>

          <Grid item xs={6}>
            <StyledTextField variant="outlined" name = "iName" id="iName" type="text" value={guestFormik.values.iName} onChange={guestFormik.handleChange} onBlur={guestFormik.handleBlur} error={Boolean(guestFormik.touched.iName && guestFormik.errors.iName)} helperText={guestFormik.touched.iName && guestFormik.errors.iName}/>
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>Index</StyledLabel>
          </Grid>
          <Grid item xs={8}>
            <StyledTextField variant="outlined" name = "indexNo" id="indexNo" type="text" value={guestFormik.values.indexNo} onChange={guestFormik.handleChange} onBlur={guestFormik.handleBlur} error={Boolean(guestFormik.touched.indexNo && guestFormik.errors.indexNo)} helperText={guestFormik.touched.indexNo && guestFormik.errors.indexNo}/>
          </Grid>
        </Grid>

        <StyledButtonBox>
        <Button onClick={guestFormik.handleSubmit} variant="contained" sx={{ bgcolor: '#4154F1', '&:hover': { backgroundColor: '#3249C9' }, padding: '8px 25px', fontSize: '16px' }}>
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
