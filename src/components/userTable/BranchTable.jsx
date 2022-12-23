import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "../common/dataTable/DataTable";
import ConfirmationModal from "../modals/confirmationModal/ConfirmationModal";
import { toast } from "react-toastify";

const columns = [
  { field: "code", headerName: "Code", width: 90 },
  { field: "name", headerName: "Branch Name", width: 150 },
  { field: "address", headerName: "Address", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "contactNumber1", headerName: "Contact No.", width: 150 },
  { field: "contactPerson", headerName: "Contact Person", width: 150 },
];

// const columns = [
//   { field: "id", headerName: "User ID", width: 90 },
//   { field: "name", headerName: "Name", width: 150 },
//   { field: "phone", headerName: "Phone", width: 150 },
//   { field: "email", headerName: "Email", width: 200 },
// ];

const branchTableStyles = {
  height: "450px",
};

const BranchTable = () => {
  const [branches, setBranches] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios
      .get("https://localhost:7098/api/Branch")
      .then((response) => {
        const data = response.data;
        setBranches(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [branches]);

  const handleDelete = async (e, id) => {

    e.preventDefault();

    await axios
      .delete(`https://localhost:7098/api/Branch/${id}`)
      .then((response) => {
        const data = branches.filter((branch) => branch.id !== id);
        setBranches(data);
        toast.success("Deleted successfully!")
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setOpen(false);
  };

  const confirmDelete = (id) => {
    setId(id);
    setOpen(true);
  };

  async function handleEdit(id) {
    console.log("edit");
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: ({ id }) => {
        return (
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton onClick={() => handleEdit(id)}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={(e) => confirmDelete(id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <DataTable
        rows={branches}
        columns={columns.concat(actionColumn)}
        loading={!branches.length}
        sx={branchTableStyles}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
      <ConfirmationModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(e) => handleDelete(e, id)}
      />
    </>
  );
};

export default BranchTable;
