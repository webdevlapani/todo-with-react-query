import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { ResourceDataType, User } from "../types";
import useAddResourceModal from "./useAddResourceModal";
import useStyle from "./useStyle";

interface AddResourceModalType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  resourceData: ResourceDataType;
  setResourceData: Dispatch<SetStateAction<ResourceDataType>>;
}

const AddResourceModal: React.FC<AddResourceModalType> = ({
  open,
  setOpen,
  resourceData,
  setResourceData,
}) => {
  const {
    onChangeHandler,
    isDisabled,
    handleClose,
    onAddUserClickHandler,
    isError,
    error,
  } = useAddResourceModal(setOpen, resourceData, setResourceData);

  const { inputFieldStyle, dialogContent, dialogContainer, dialogActions } =
    useStyle();

  return (
    <Dialog onClose={handleClose} open={open} sx={dialogContainer}>
      {isError && (
        <Alert severity="error">
          {error.response.data.map((item: any) => item.message).join(", ")}
        </Alert>
      )}
      <DialogTitle>Add resource</DialogTitle>
      <DialogContent sx={dialogContent}>
        <Stack>
          <TextField
            id="outlined-basic"
            label="name"
            name="name"
            variant="outlined"
            sx={inputFieldStyle}
            value={resourceData.name}
            onChange={onChangeHandler}
          />
          <TextField
            id="outlined-basic"
            label="email"
            name="email"
            variant="outlined"
            type="email"
            sx={inputFieldStyle}
            value={resourceData.email}
            onChange={onChangeHandler}
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={resourceData.gender}
              row
              name="gender"
              onChange={onChangeHandler}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </DialogContent>

      <DialogActions sx={dialogActions}>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onAddUserClickHandler}
          disabled={isDisabled}
        >
          Add Resource
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddResourceModal;
