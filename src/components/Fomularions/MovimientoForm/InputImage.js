import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputFile: {
    display: "none",
  },
}));

export default function InputImage() {
  const classes = useStyles();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        component={"label"}
        variant="outlined"
        color="primary"
        htmlFor="fileField"
      >
        Subir comprobante
        <input
          className={classes.inputFile}
          type="file"
          name="file"
          type="file"
          id="fileField"
        />
      </Button>
    </Box>
  );
}
