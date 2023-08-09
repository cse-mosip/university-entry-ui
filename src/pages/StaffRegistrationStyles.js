import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";

export const StyledRoot = styled("div")({
  height: "auto",
//   display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F6F9FF",
  paddingBottom: "50px",
});

export const StyledBox = styled(Box)(({ theme }) => ({
    margin: "auto",
  width: "60%",
  border: "1px solid #D9D9D9",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(2),
}));

export const StyledLabel = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontSize: 20,
  paddingTop: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInputBase-root": {
    backgroundColor: "white",
  },
  width: "100%",
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  "& .MuiSelect-select": {
    color: "black",
    backgroundColor: "white",
    paddingLeft: "10px",
  },
}));

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  "& .MuiFormControlLabel-label": {
    color: "black",
  },
  "& .Mui-checked": {
    color: "black",
  },
}));

export const StyledRadio = styled(Radio)(({ theme }) => ({
  "&.Mui-checked": {
    color: "black",
  },
}));

export const StyledButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  marginTop: "30px",
  width: "100%",
});
