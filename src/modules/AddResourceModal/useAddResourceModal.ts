import { useMutation } from "@tanstack/react-query";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { addUserService } from "../ListOfResourcesModule/services";
import { ResourceDataType } from "../types";

const useAddResourceModal = (
  setOpen: Dispatch<SetStateAction<boolean>>,
  resourceData: ResourceDataType,
  setResourceData: Dispatch<SetStateAction<ResourceDataType>>
) => {
  const { isError, isSuccess, mutate, error } = useMutation<any, any, any>(
    (data) => {
      return addUserService(data);
    }
  );

  useEffect(() => {
    isSuccess && setOpen(false);
  }, [isSuccess]);

  const isDisabled = !resourceData.name || !resourceData.email;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResourceData({ ...resourceData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAddUserClickHandler = () => {
    mutate({ ...resourceData, status: "active" });

    isSuccess &&
      setResourceData({
        name: "",
        email: "",
        gender: "",
      });
  };

  return {
    onChangeHandler,
    isDisabled,
    handleClose,
    onAddUserClickHandler,
    isError,
    error,
  };
};

export default useAddResourceModal;
