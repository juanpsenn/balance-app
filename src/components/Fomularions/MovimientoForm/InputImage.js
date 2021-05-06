import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputFile: {
    display: "none",
  },
  imageContainer: {
    "-webkit-box-shadow": "0px 3px 10px 2px rgba(0,0,0,0.35)",
    "-moz-box-shadow": "0px 3px 10px 2px rgba(0,0,0,0.35)",
    "box-shadow": "0px 3px 10px 2px rgba(0,0,0,0.35)",
  },
}));

export default function InputImage({ file, setFile }) {
  const classes = useStyles();
  const [previewImagen, setPreviewImage] = React.useState(null);

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setFile(file);
      setPreviewImage(null);
    } else if (file && file.type.includes("image/")) {
      const url = URL.createObjectURL(file);
      setFile(file);
      setPreviewImage(url);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewImage(null);
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {!previewImagen && !file && (
        <Button
          component={"label"}
          variant="outlined"
          color="primary"
          htmlFor="fileField"
        >
          Subir comprobante
          <input
            className={classes.inputFile}
            onChange={handleChangeFile}
            accept="image/*,.pdf"
            name="image_url"
            type="file"
            id="fileField"
          />
        </Button>
      )}
      {previewImagen && file.type.includes("image/") && (
        <Box className={classes.imageContainer}>
          <img src={previewImagen} alt={file.name} width="250px" />
        </Box>
      )}
      {!previewImagen && file && <Box>{file.name}</Box>}

      {file && (
        <Box mt={2}>
          <Button variant="outlined" color="primary" onClick={handleRemoveFile}>
            QUITAR
          </Button>
        </Box>
      )}
    </Box>
  );
}
