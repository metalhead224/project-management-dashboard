import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import React, { useState } from "react";

const DataTable = ({ rows, columns, loading, sx, componentsProps }) => {
  const [pageSize, setPageSize] = useState(5);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "space-between", mb: "10px" }}
      >
        <GridToolbarExport />
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  };

  const headerTitle = {
    ".css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
      fontSize: "16px",
      fontWeight: "bolder",
    },
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      sx={[sx, headerTitle]}
      pageSize={pageSize}
      rowsPerPageOptions={[2, 5, 10]}
      pagination
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      components={{
        Toolbar: CustomToolbar,
      }}
      componentsProps={componentsProps}
      
    />
  );
};

export default DataTable;
