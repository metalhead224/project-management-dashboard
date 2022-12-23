import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BasicModal from "../../common/basicModal/BasicModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState, useEffect} from "react"

const defaultInputValues = {
  userId: '',
  email: '',
  phoneNumber: ''
}

const NewUserModal = ({ open, onClose, addNewUser }) => {
  const [values, setValues] = useState(defaultInputValues);

  const modalStyles = {
    inputFields: {
      diplay: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiFormControl-root": {
        marginBottom: "20px",
      },
    },
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required("User ID is required!")
      .min(6, "User ID must be at least 6 characters!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addUser = (data) => {
    addNewUser(data);
  };

  const handleChange = (value) => {
    setValues(value);
  }

  useEffect(() => {
    if(open) setValues(defaultInputValues);
  }, [open])

  const getContent = () => {
    return (
      <Box sx={modalStyles.inputFields}>
        <TextField
          placeholder="User ID"
          name="userId"
          label="User ID"
          required
          {...register("userId")}
          onChange={(event) => handleChange({...values, userId: event.target.value})}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
          value={values.userId}
        />
        <TextField
          placeholder="E-mail"
          name="emai;"
          label="E-mail"
          required
          {...register("email")}
          onChange={(event) => handleChange({...values, email: event.target.value})}
          error={errors.userId ? true : false}
          helperText={errors.email?.message}
          value={values.email}
        />
        <TextField
          placeholder="Phone Number"
          name="phoneNumber"
          label="Phone Number"
          required
          {...register("phoneNumber")}
          onChange={(event) => handleChange({...values, phoneNumber: event.target.value})}
          error={errors.userId ? true : false}
          helperText={errors.phoneNumber?.message}
          value={values.phoneNumber}
        />
      </Box>
    );
  };

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New User"
      subTitle="Fill out the inputs and hit submit button"
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
      firstBtn='submit'
      secondBtn='cancel'
    />
  );
};

export default NewUserModal;
