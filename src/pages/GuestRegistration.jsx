import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Modal from '@mui/material/Modal';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircularProgress from '@mui/material/CircularProgress';


import {
  StyledRoot,
  StyledBox,
  StyledLabel,
  StyledTextField,
  StyledSelect,
  StyledRadioGroup,
  StyledRadio,
  StyledButtonBox,
} from "./GusetRegistrationStyles";
import guestRegistrationService from "../services/guestRegistrationService";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Invalid Name"),
  phone_number: Yup.string()
    .required("Phone Number is required")
    .matches(/^(\+94|0)\d{9}$/, "Invalid phone number"),
  nic: Yup.string()
    .required("NIC is required")
    .matches(/^(\d{9}V|\d{12})$/, "Invalid NIC"),
  iName: Yup.string()
    .required("Inviter Name is required")
    .matches(/^[A-Za-z\s]+$/, "Invalid Name"),
  inviter_index: Yup.string()
    .required("Index is required")
    .matches(/^\d{6}[a-zA-Z]$/, "Invalid index number"),
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #808080',
  borderRadius: 5,
  boxShadow: 24,
  p: 8,
  color: '#0170D6'
};

function GuestRegistration(props) {

  const navigate = useNavigate();
  const [modalView, setModalView] = useState(false);
  const [fingerPrintData, setFingerPrintData] = useState(null);
  const [isSumbitLoading, setSubmitLoading] = useState(false);
  const [isInviteeUpdate, setIsInviteeUpdate] = useState(false);

  const { inviteeData, setInviteeActive, requestFingerprint } = props;

  // to get invitee fingerprint data
  useEffect(() => {
    setIsInviteeUpdate(true);
    setFingerPrintData(inviteeData);
  }, [inviteeData])

  const guestFormik = useFormik({
    initialValues: {
      title: "MR",
      name: "",
      phone_number: "",
      nic: "",
      gender: "MALE",
      invitorTitle: "MR",
      iName: "",
      inviter_index: "",
      bio_sign: "",
      approver_id: "1",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {  // TODO: include fingerprint data to the endpoint data
      setSubmitLoading(true);
      values.bio_sign = fingerPrintData;
      try {
        const response = await guestRegistrationService.registerGuest(values);

        if (response.status == 200) {
          console.log("SUCCESSFULLY REGISTERED  ");
          resetForm();
          toast.success("Successfully Registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
          // navigate("/home");
        } else {
          console.log(response.status);
          toast.error("Error Occured", {
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
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
      }
      // call api
      // resetForm();
      setModalView(false);
      setInviteeActive(false);
      setIsInviteeUpdate(false);
    }
  });

  const handleTitleChange = (event) => {
    guestFormik.setFieldValue("title", event.target.value);
  };

  const handleInvitorTitleChange = (event) => {
    guestFormik.setFieldValue("invitorTitle", event.target.value);
  };

  const handleSubmit = () => {
    setIsInviteeUpdate(false);
    setInviteeActive(true);
    setModalView(!modalView);
    requestFingerprint();
  }

  const handleModalCancel = () => {
    setModalView(false);
    setInviteeActive(false);
    setIsInviteeUpdate(false);
  }

  return (
    <>

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
            // margin: '0 0 0 250px'
          }}
        >
          <StyledRoot>
            <Typography
              variant="h5"
              sx={{
                color: "#4154F1",
                fontWeight: 700,
                marginBottom: "30px",
                paddingTop: "30px",
                paddingLeft: "10%",
              }}
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
                  <StyledSelect
                    variant="outlined"
                    value={guestFormik.values.title}
                    onChange={handleTitleChange}
                  >
                    <MenuItem value="MR">Mr.</MenuItem>
                    <MenuItem value="MRS">Mrs.</MenuItem>
                    <MenuItem value="MISS">Miss.</MenuItem>
                  </StyledSelect>
                </Grid>

                <Grid item xs={6}>
                  <StyledTextField
                    variant="outlined"
                    name="name"
                    id="name"
                    type="text"
                    value={guestFormik.values.name}
                    onChange={guestFormik.handleChange}
                    onBlur={guestFormik.handleBlur}
                    error={Boolean(
                      guestFormik.touched.name && guestFormik.errors.name
                    )}
                    helperText={
                      guestFormik.touched.name && guestFormik.errors.name
                    }
                  />
                </Grid>

                <Grid item xs={4}>
                  <StyledLabel>Phone Number</StyledLabel>
                </Grid>

                <Grid item xs={8}>
                  <StyledTextField
                    variant="outlined"
                    name="phone_number"
                    id="phone_number"
                    type="tel"
                    value={guestFormik.phone_number}
                    onChange={guestFormik.handleChange}
                    onBlur={guestFormik.handleBlur}
                    error={Boolean(
                      guestFormik.touched.phone_number &&
                      guestFormik.errors.phone_number
                    )}
                    helperText={
                      guestFormik.touched.phone_number &&
                      guestFormik.errors.phone_number
                    }
                  />
                </Grid>

                <Grid item xs={4}>
                  <StyledLabel>NIC</StyledLabel>
                </Grid>

                <Grid item xs={8}>
                  <StyledTextField
                    variant="outlined"
                    name="nic"
                    id="nic"
                    type="text"
                    value={guestFormik.nic}
                    onChange={guestFormik.handleChange}
                    onBlur={guestFormik.handleBlur}
                    error={Boolean(
                      guestFormik.touched.nic && guestFormik.errors.nic
                    )}
                    helperText={guestFormik.touched.nic && guestFormik.errors.nic}
                  />
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
                      value="MALE"
                      control={<StyledRadio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="FEMALE"
                      control={<StyledRadio />}
                      label="Female"
                    />
                  </StyledRadioGroup>
                </Grid>
              </Grid>
              <StyledButtonBox>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    bgcolor: "#4154F1",
                    "&:hover": { backgroundColor: "#3249C9" },
                    padding: "8px 25px",
                    fontSize: "16px",
                  }}
                >
                  Proceed
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#DC3545",
                    "&:hover": { backgroundColor: "#C02942" },
                    padding: "8px 25px",
                    fontSize: "16px",
                  }}
                >
                  Cancel
                </Button>
              </StyledButtonBox>
            </StyledBox>
          </StyledRoot>
        </Box>
      </div>
      <Modal
        open={modalView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "rgba(128, 128, 128, 0.8)" }}
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Please take the Invitee's fingerprint
            </Typography>
            <img
              src={'/images/fp_3.png'}
              alt="fingerprint image"
              style={{ margin: "10%", alignItems: "center" }}
            />
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>
          {!isInviteeUpdate && <CircularProgress/>}
          {isInviteeUpdate && inviteeData !== null &&
            <Typography variant="h5" component="h2" sx={{ color: 'green', gap: 1 }}>
              <CheckCircleOutlineIcon color="success" fontSize="large" />
              Successfull
          </Typography>
          }
          { isInviteeUpdate && inviteeData === null &&
            <Typography variant="h5" component="h2" sx={{ color: 'red', gap: 1 }}>
              <CheckCircleOutlineIcon color="error" fontSize="large" />
              Failed
            </Typography>
          }
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button
              variant="contained"
              onClick={handleModalCancel}
              sx={{
                bgcolor: "#DC3545",
                "&:hover": { backgroundColor: "#C02942" },
                padding: "8px 25px",
                fontSize: "16px",
              }}
            >
              Cancel
            </Button>
            <LoadingButton
              loading={isSumbitLoading}
              loadingPosition="start"
              startIcon={isSumbitLoading ? <SaveIcon /> : null}
              disabled={fingerPrintData === null}
              onClick={guestFormik.onSubmit}
              variant="contained"
              sx={{
                bgcolor: "#4154F1",
                "&:hover": { backgroundColor: "#3249C9" },
                padding: "8px 25px",
                fontSize: "16px",
              }}
            >
              Submit
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default GuestRegistration;
