import React from "react";
import BasicCard from "../../components/common/basicCard/BasicCard";
import GridWrapper from "../../components/gridWrapper/GridWrapper";
import UserTable from "../../components/userTable/UserTable";

const Storage = () => {
  return (
    <GridWrapper>
      <BasicCard content={<UserTable onError="Error fetching data"/>} />
    </GridWrapper>
  );
};

export default Storage;
