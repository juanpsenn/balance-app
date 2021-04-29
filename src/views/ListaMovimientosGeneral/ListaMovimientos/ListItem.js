import React from "react";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem as ListItemMUI,
  makeStyles,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { DateTime } from "luxon";
import { parseCurrencyARS } from "src/utils/parseCurrency";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme, props) => ({
  movimientoItem: {
    "-webkit-box-shadow": (props) =>
      props.amount > 0
        ? `inset 0px 0px 65px 25px ${theme.palette.success.main}09`
        : `inset 0px 0px 65px 25px ${theme.palette.error.main}09`,
    "-moz-box-shadow": (props) =>
      props.amount > 0
        ? `inset 0px 0px 65px 25px ${theme.palette.success.main}09`
        : `inset 0px 0px 65px 25px ${theme.palette.error.main}09`,
    "box-shadow": (props) =>
      props.amount > 0
        ? `inset 0px 0px 65px 25px ${theme.palette.success.main}09`
        : `inset 0px 0px 65px 25px ${theme.palette.error.main}09`,
  },
  upArrow: { color: theme.palette.success.main },
  downArrow: { color: theme.palette.error.main },
}));

export default function ListItem({ movimiento }) {
  const classes = useStyles({ amount: Number(movimiento.amount) });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemMUI
        button
        onClick={handleClick}
        className={classes.movimientoItem}
      >
        <Box
          py={1}
          width={"100%"}
          display="flex"
          justifyContent="space-between"
        >
          <Box
            mr={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {Number(movimiento.amount) > 0 ? (
              <ArrowUpwardIcon fontSize="small" className={classes.upArrow} />
            ) : (
              <ArrowDownwardIcon
                fontSize="small"
                className={classes.downArrow}
              />
            )}
          </Box>
          <Box>
            <Typography variant="h6">{movimiento.category.name}</Typography>

            <Typography variant="body2">
              Importe: {parseCurrencyARS(movimiento.amount)}
            </Typography>
            <Typography variant="body2">
              Cuenta: {movimiento.account.display_name}
            </Typography>
          </Box>
          <Box flexGrow={1}></Box>
          {/* <Box flexGrow={1}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {Number(movimiento.amount) > 0 ? (
              <ArrowUpwardIcon className={classes.upArrow} />
            ) : (
              <ArrowDownwardIcon className={classes.downArrow} />
            )}
          </Box> */}
          <Box ml={2}>
            <Typography variant="body2">
              Saldo: {parseCurrencyARS(movimiento.balance_to_date)}
            </Typography>

            <Typography variant="h6">
              Fecha:{" "}
              {DateTime.fromISO(movimiento.date_time, {
                setZone: "utc",
              }).toISODate()}
            </Typography>
          </Box>
        </Box>
      </ListItemMUI>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemMUI className={classes.movimientoItem}>
            <Box
              p={1}
              width={"100%"}
              display="flex"
              justifyContent="space-between"
            >
              <Box mr={1}>
                <Typography variant="body2">
                  Descripcion: {movimiento.description}
                </Typography>

                <Typography variant="body2">
                  Usuario: {movimiento.registred_by}
                </Typography>
                <Typography variant="body2">
                  Fecha de carga:{" "}
                  {DateTime.fromISO(movimiento.registred, {
                    setZone: "utc",
                  }).toISODate()}
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
