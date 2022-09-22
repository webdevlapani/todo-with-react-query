import { SxProps } from "@mui/material";

export interface IStyle {
  [key: string]: SxProps;
}

const useStyle = (): IStyle => {
  return {
    inputFieldStyle: {
      my: "20px",
    },
    dialogContent: {
      p: 0,
      py: "10px",
      width: "500px",
    },
    dialogContainer: {
      "& .MuiDialog-paper": {
        p: "30px",
      },
      "& .MuiTypography-root": {
        p: 0,
      },
    },
    dialogActions: {
      justifyContent: "space-between",
    },
  };
};

export default useStyle;
