import React, { useEffect } from 'react';
import { useFormik } from "formik";

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
import { useNavigate } from "react-router-dom";
import authService from "../services/authServices";
import { ToastContainer, toast } from 'react-toastify';


const validationSchema = Yup.object({
  username: Yup.string().required('Username is required').matches(/^[A-Za-z\s]+$/, 'Invalid username'),
  password: Yup.string().required('Password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Invalid password (Minimum eight characters, at least one letter and one number)'),
});

const Login = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, []);


  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      // call api

      try {
        const response = await authService.login(values.username, values.password);
        console.log(response);
        if (response.status === 200) {
          console.log("Login success");
          authService.loginWithJwt(response.data.access_token, response.data.refresh_token);
          resetForm();
          toast.success('Successfully Logged', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          })
          
          handleRoleBaseRedirect();

        }
        else {
          toast.error('Invalid Credintials', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
        }

      } catch (error) {
        console.log(error);
        toast.error('Invalid Credintials', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });

      }
    }
  });

  const handleRoleBaseRedirect = () => {
    if (authService.getUserRole() === 'SECURITY') {
      navigate('/device-setup');
    } else {
      navigate('/home');
    }
  }


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
            name="username"
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
            name="password"
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
            sx={{ bgcolor: '#012970', '&:hover': { bgcolor: '#011538' } }}
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
