import React, { useState } from "react";
import BasicCard from "../../components/common/basicCard/BasicCard";
import CommonButton from "../../components/common/commonButton/CommonButton";
import GridWrapper from "../../components/gridWrapper/GridWrapper";
import AddBranch from "../../components/modals/addBranch/AddBranch";
import BranchTable from "../../components/userTable/BranchTable";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const getHeader = () => {
    return (
      <CommonButton
        variant="contained"
        sx={{ margin: "10px" }}
        onClick={addBranch}
      >
        Add Branch
      </CommonButton>
    );
  };

  const addBranch = () => {
    setOpen(true);
  };

  return (
    <GridWrapper>
      <BasicCard
        header={getHeader()}
        content={<BranchTable onError="Error fetching data" />}
      />
      <AddBranch open={open} onClose={() => setOpen(false)} />
    </GridWrapper>
  );
};

export default Storage;
