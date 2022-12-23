import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyles } from "./styles";
import CommonButton from "../commonButton/CommonButton";

const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit, firstBtn, secondBtn, sx }) => {
  

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={[modalStyles.wrapper, sx]}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          { subTitle}
        </Typography>
        {content}
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <CommonButton
          variant="contained"
          onClick={onSubmit}
          >
            {firstBtn}
          </CommonButton>
          <CommonButton onClick={onClose}>{secondBtn}</CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
