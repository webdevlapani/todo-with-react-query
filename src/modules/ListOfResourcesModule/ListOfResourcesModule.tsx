import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import AddResourceModal from "../AddResourceModal";
import useListOfResources from "./useListOfResources";

const ListOfResourcesModule = () => {
  const {
    rows,
    columns,
    open,
    setOpen,
    addResourceClickHandler,
    resourceData,
    setResourceData,
    cellEditHandler,
  } = useListOfResources();

  return (
    <Box sx={{ m: "40px" }}>
      <AddResourceModal
        open={open}
        setOpen={setOpen}
        resourceData={resourceData}
        setResourceData={setResourceData}
      />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <h1>List of resources</h1>
        <Button variant="contained" onClick={addResourceClickHandler}>
          Add new Resource
        </Button>
      </Stack>
      <Box sx={{ height: "800px" }}>
        {rows && (
          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnFilter
            disableColumnMenu
            onCellEditCommit={cellEditHandler}
          />
        )}
      </Box>
    </Box>
  );
};

export default ListOfResourcesModule;
