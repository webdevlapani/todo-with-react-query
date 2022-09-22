import { GridCellEditCommitParams, GridCellParams } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { ResourceDataType } from "../types";
import { addUserService, getUserService, USER_LIST_GET } from "./services";

const columns = [
  {
    field: "id",
    headerName: "id",
    width: 90,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 550,
    editable: true,
  },
  {
    field: "email",
    headerName: "email",
    width: 550,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 350,
    editable: true,
  },
  {
    field: "status",
    headerName: "status",
    width: 500,
    editable: true,
  },
];

const useListOfResources = () => {
  const [open, setOpen] = useState(false);
  const [resourceData, setResourceData] = useState<ResourceDataType>({
    name: "",
    email: "",
    gender: "female",
  });

  const { data: rows } = useQuery(["list-of-resources"], getUserService);

  const addResourceClickHandler = () => {
    setOpen(true);
  };

  const cellEditHandler = (params: GridCellEditCommitParams) => {
    console.log(params);
  };

  return {
    rows,
    columns,
    open,
    setOpen,
    addResourceClickHandler,
    resourceData,
    setResourceData,
    cellEditHandler,
  };
};

export default useListOfResources;
