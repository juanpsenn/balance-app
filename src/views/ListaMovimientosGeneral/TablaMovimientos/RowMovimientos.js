import React from "react";
import {
  Box,
  Card,
  IconButton,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { DateTime } from "luxon";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CustomTooltip from "src/components/Tooltip";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { parseCurrencyARS } from "src/utils/parseCurrency";

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

export default function RowMovimiento({ movimiento }) {
  const classes = useStyles({ amount: Number(movimiento.amount) });

  const handleViewComprobante = (url) => {
    window.open(url);
  };

  return (
    <TableRow className={classes.movimientoItem}>
      <TableCell>
        {Number(movimiento.amount) > 0 ? (
          <ArrowUpwardIcon fontSize="small" className={classes.upArrow} />
        ) : (
          <ArrowDownwardIcon fontSize="small" className={classes.downArrow} />
        )}
      </TableCell>
      <TableCell>{movimiento.id.split("-")[0]}</TableCell>
      <TableCell>
        {DateTime.fromISO(movimiento.date_time, { setZone: "utc" }).toISODate()}
      </TableCell>
      <TableCell>{movimiento.account.display_name}</TableCell>
      <TableCell>{movimiento.category.name}</TableCell>
      <TableCell>{movimiento.description}</TableCell>
      <TableCell align="right">{parseCurrencyARS(movimiento.amount)}</TableCell>
      <TableCell align="right">
        {parseCurrencyARS(movimiento.balance_to_date)}
      </TableCell>
      <TableCell align="right">
        {movimiento.document && (
          <CustomTooltip title="Ver movimiento">
            <IconButton
              size="small"
              onClick={() => handleViewComprobante(movimiento.document)}
            >
              <SvgIcon fontSize="small">
                <VisibilityIcon />
              </SvgIcon>
            </IconButton>
          </CustomTooltip>
        )}
      </TableCell>
    </TableRow>
  );
}
