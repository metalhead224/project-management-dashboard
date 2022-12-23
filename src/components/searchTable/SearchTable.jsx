import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchBar from "../common/searchBar/SearchBar";

const tableSearchStyles = {
  padding: "10px",
};

const SearchTable = () => {
  

  return (
    <Box sx={{ width: "50%", m: "20px" }}>
      <Paper>
        <SearchBar
          placeholder="Search with name, email, no., etc.."
          sx={tableSearchStyles}
          searchBarWidth="500px"
        />
      </Paper>
    </Box>
  );
};

export default SearchTable;
