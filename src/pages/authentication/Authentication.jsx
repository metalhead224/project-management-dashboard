import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicCard from "../../components/common/basicCard/BasicCard";
import CommonButton from "../../components/common/commonButton/CommonButton";
import SearchBar from "../../components/common/searchBar/SearchBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import GridWrapper from "../../components/gridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";
import NewUserModal from "../../components/modals/newUserModal/NewUserModal";

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchresults] = useState(users);

  const getHeader = () => {
    const handleSearch = (value) => {
      filterData(value);
    }

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setUsers(searchResults);
      else {
        const filteredData = searchResults.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setUsers(filteredData);
      }
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, mail, phone number, or user's UID"
          onChange={(event) => handleSearch(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const addNewUser = (data) => {
    users.push({ ...data });
    setOpen(false);
  };

  const getContent = () => (
    <>
      {users.length ? (
        users.map((user) => (
          <Box sx={{ marginBottom: "20px" }}>
            <Typography>User ID: {user.userId}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone Number{user.phoneNumber}</Typography>
          </Box>
        ))
      ) : (
        <Typography
          align="center"
          sx={{
            m: "40px 16px",
            color: "rgba(0, 0 , 0, 0.6)",
            fontSize: "1.3rem",
          }}
        >
          No users for this project yet!
        </Typography>
      )}
    </>
  );

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        onClose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default Authentication;
