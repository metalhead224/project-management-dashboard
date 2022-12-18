import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import React, { useState } from "react";

const DataTable = ({ rows, columns, loading, sx }) => {

    const [pageSize, setPageSize] = useState(5);

    const CustomToolbar = () => {
      return (
        <GridToolbarContainer>
          <GridToolbarExport />
        </GridToolbarContainer>
      )
    }

    const headerTitle = {
      ".css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
        fontSize: "16px",
        fontWeight: "bolder",
      },
    }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      sx={[sx, headerTitle]}
      checkboxSelection
      pageSize={pageSize}
      rowsPerPageOptions={[2,5, 10]}
      pagination
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      components= {{
        Toolbar: CustomToolbar,
      }}
    />
  );
};

export default DataTable;
