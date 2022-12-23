import { Box, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import BasicModal from "../../common/basicModal/BasicModal";
import CustomRadioGroup from "../../common/radioButtonGroup/CustomRadioGroup";

const AddBranch = ({ open, onClose, setOpen }) => {
  const [formData, setFormData] = useState({
    code: "",
    shortName: "",
    name: "",
    address: "",
    isHeadOffice: false,
    isRegionalHead: false,
    contactNumber1: "",
    contactNumber2: "",
    email: "",
    contactPerson: "",
    isActive: true,
    createdBy: 1,
    createdDate: new Date().toJSON(),
    updatedBy: 1,
    updatedDate: new Date().toJSON(),
  });

  const {
    code,
    shortName,
    name,
    address,
    isHeadOffice,
    isRegionalHead,
    contactNumber1,
    contactNumber2,
    email,
    contactPerson,
  } = formData;

  const getContent = () => {
    return (
      <Box component="form">
        <Grid container columnSpacing={3} rowSpacing={3} sx={{ mb: "20px" }}>
          <Grid item xs={4}>
            <TextField
              required
              label="Code"
              name="code"
              value={code}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Short Name"
              name="shortName"
              value={shortName}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Address"
              name="address"
              value={address}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={4}>
            <CustomRadioGroup
              required
              title="Is Head Office"
              name="isHeadOffice"
              value={isHeadOffice}
              onChange={onChange}
              controlLabel1="Yes"
              controlValue1="true"
              controlLabel2="No"
              controlValue2="false"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomRadioGroup
              required
              title="Is Regional Head"
              name="isRegionalHead"
              value={isRegionalHead}
              onChange={onChange}
              controlLabel1="Yes"
              controlValue1="true"
              controlLabel2="No"
              controlValue2="false"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Primary contact number"
              name="contactNumber1"
              value={contactNumber1}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Secondary contact number"
              name="contactNumber2"
              value={contactNumber2}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Contact Person"
              name="contactPerson"
              value={contactPerson}
              onChange={onChange}
            />
          </Grid>
        </Grid>
      </Box>
    );
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.isRegionalHead = JSON.parse(isRegionalHead);
    formData.isHeadOffice = JSON.parse(isHeadOffice);

    
   await axios
      .post("https://localhost:7098/api/Branch", formData)
      .then((response) => {
        toast.success(response.data)
      })
      .catch((error) => {
        toast.error(error.message);
      });

      onClose(onClose)
  };

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="Add Branch"
      content={getContent()}
      firstBtn="Add"
      secondBtn="Cancel"
      onSubmit={handleSubmit}
      sx={{ width: 700 }}
    />
  );
};

export default AddBranch;
