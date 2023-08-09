import React from 'react';
import {useFormik} from "formik"
import * as Yup from 'yup';
import { 
  StyledRoot, 
  StyledBox, 
  StyledInputField, 
  StyledLabel, 
  StyledTextField, 
  StyledButtonBox, 
  StyledButton, 
  StyledTypography 
} from './LoginStyles';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required').matches(/^[A-Za-z\s]+$/, 'Invalid username'),
  password: Yup.string().required('Password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Invalid password (Minimum eight characters, at least one letter and one number)'),
});

const Login = () => {

  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      // call api
      resetForm();
    }
  });

  return (
    <StyledRoot>
      <StyledBox>
        <StyledTypography variant="h5">
          Login to Your Account
        </StyledTypography>
        <StyledInputField>
          <StyledLabel variant="body1">
            Username
          </StyledLabel>
          <StyledTextField 
            variant="outlined" 
            name = "username" 
            id="username" 
            type="text" 
            value={loginFormik.username} 
            onChange={loginFormik.handleChange} 
            onBlur={loginFormik.handleBlur} 
            error={Boolean(loginFormik.touched.username && loginFormik.errors.username)} 
            helperText={loginFormik.touched.username && loginFormik.errors.username}
          />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">
            Password
          </StyledLabel>
          <StyledTextField 
            variant="outlined" 
            name = "password" 
            id="password" 
            type="password" 
            value={loginFormik.password} 
            onChange={loginFormik.handleChange} 
            onBlur={loginFormik.handleBlur} 
            error={Boolean(loginFormik.touched.password && loginFormik.errors.password)} 
            helperText={loginFormik.touched.password && loginFormik.errors.password}
          />
        </StyledInputField>
        <StyledButtonBox>
          <StyledButton 
            variant="contained" 
            sx={{ bgcolor: '#012970', '&:hover': { bgcolor: '#011538' }}}
            onClick={loginFormik.handleSubmit}
          >
            Login
          </StyledButton>
        </StyledButtonBox>
      </StyledBox>
    </StyledRoot>
  );
};

export default Login;
