import React from "react";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem as ListItemMUI,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

export default function ListItem() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemMUI button onClick={handleClick}>
        <Box p={1} width={"100%"} display="flex" justifyContent="space-between">
          <Box mr={2}>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
          </Box>
          <Box mr={1}>
            <Typography variant="h6">VENTA - DUCK |</Typography>

            <Typography variant="body1">
              Importe: $999 - Cuenta: Santander Diego
            </Typography>
          </Box>
          <Box flexGrow={1}></Box>
          <Box>
            <Typography variant="body1">Saldo: 999,00</Typography>

            <Typography variant="h6">Fecha:21/04/2021</Typography>
          </Box>
        </Box>
      </ListItemMUI>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemMUI>
            <Box
              p={1}
              width={"100%"}
              display="flex"
              justifyContent="space-between"
            >
              <Box mr={1}>
                <Typography variant="body2">
                  Descripcion: Fresh dr. quiros duck basic mensualidad
                </Typography>

                <Typography variant="body2">Usuario: Enzo</Typography>
                <Typography variant="body2">
                  Fecha de carga: 21/04/20202
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <SvgIcon fontSize="small">
                    <VisibilityIcon />
                  </SvgIcon>
                </IconButton>
              </Box>
            </Box>
          </ListItemMUI>
        </List>
      </Collapse>
      <Divider />
    </>
  );
}
