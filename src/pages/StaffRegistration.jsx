import React from "react";
import { Grid, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {useFormik} from "formik"
import * as Yup from 'yup';

import {
  StyledRoot,
  StyledBox,
  StyledLabel,
  StyledTextField,
  StyledSelect,
  StyledButtonBox
} from "./StaffRegistrationStyles";


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').matches(/^[A-Za-z\s]+$/, 'Invalid Name'),
  email: Yup.string().required('Email is required').email('Invalid Email').matches(/^[A-Za-z0-9._%+-]+@uom.lk$/, 'Invalid Email Format'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]+$/,'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
});

function StaffRegistration() {

  const guestFormik = useFormik({
    initialValues: {
      title: 'Mr.',
      name: '',
      email: '',
      password: '',
      role:'Security Officer'
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

  return (
    <StyledRoot>
      <Typography
          variant="h5"
          sx={{ color: "#4154F1", fontWeight: 700, marginBottom: "30px",paddingTop: "30px", paddingLeft: "10%" }}
        >
          Staff Registration Form
        </Typography>
      <StyledBox>
        <Typography
          variant="h5"
          sx={{ color: "#198754", fontWeight: 700, marginBottom: "30px" }}
        >
          Staff Member Details
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
            <StyledLabel>Email</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledTextField variant="outlined" name = "email" id="email" type="text" value={guestFormik.email} onChange={guestFormik.handleChange} onBlur={guestFormik.handleBlur} error={Boolean(guestFormik.touched.mobile && guestFormik.errors.email)} helperText={guestFormik.touched.email && guestFormik.errors.email}/>
          </Grid>

          <Grid item xs={4}>
            <StyledLabel>Password</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledTextField variant="outlined" name = "pwd" id="pwd" type="text" value={guestFormik.password} onChange={guestFormik.handleChange} onBlur={guestFormik.handleBlur} error={Boolean(guestFormik.touched.password && guestFormik.errors.password)} helperText={guestFormik.touched.password && guestFormik.errors.password}/>
          </Grid>
        </Grid>

        <Grid item xs={4}>
            <StyledLabel>Role</StyledLabel>
          </Grid>

          <Grid item xs={8}>
            <StyledRadioGroup
              aria-label="role"
              name="role"
              value={guestFormik.values.role}
              onChange={guestFormik.handleChange}
              onBlur={guestFormik.handleBlur}
            >
              <FormControlLabel
                value="Security Officer"
                control={<StyledRadio />}
                label="Security Officer"
              />
              <FormControlLabel
                value="Lecturer"
                control={<StyledRadio />}
                label="Lecturer"
              />
            </StyledRadioGroup>
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

export default StaffRegistration;
