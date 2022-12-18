import React, { useEffect, useState } from "react";
import BasicSnackbar from "../../components/common/basicSnackbar/BasicSnackbar";
import CommonButton from "../../components/common/commonButton/CommonButton";
import Loading from "../../components/common/loading/Loading";
import GridWrapper from "../../components/gridWrapper/GridWrapper";

const Functions = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GridWrapper>
      {loading ? (
        <Loading>
          <CommonButton variant="contained" onClick={handleClick}>
            Open success snackbar
          </CommonButton>
        </Loading>
      ) : (
        <CommonButton variant="contained" onClick={handleClick}>
          Open success snackbar
        </CommonButton>
      )}
      <BasicSnackbar
        open={open}
        onClose={handleClose}
        severity="success"
        message="Successfully added data"
      />
    </GridWrapper>
  );
};

export default Functions;
