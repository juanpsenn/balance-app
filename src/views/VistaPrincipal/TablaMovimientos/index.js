import React from "react";
import {
  Box,
  Card,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { DateTime } from "luxon";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CustomTooltip from "src/components/Tooltip";

export default function TablaMovimientos() {
  console.log(DateTime.now().toISODate());
  return (
    <Box>
      <Box pb={2} pt={2}>
        <Typography variant="h4"> Ultimos movimientos</Typography>
      </Box>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha movimiento</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Motivo</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell align="right">Importe</TableCell>
              <TableCell align="right">Saldo parcial</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{DateTime.now().toISODate()}</TableCell>
              <TableCell>INGRESO</TableCell>
              <TableCell>VENTA - DUCK</TableCell>
              <TableCell>Mensualidad - Duck - Premium</TableCell>
              <TableCell align="right">$5.000,00</TableCell>
              <TableCell align="right">0,00</TableCell>
              <TableCell align="right">
                <CustomTooltip title="Ver movimiento">
                  <IconButton size="small">
                    <SvgIcon fontSize="small">
                      <VisibilityIcon />
                    </SvgIcon>
                  </IconButton>
                </CustomTooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{DateTime.now().toISODate()}</TableCell>
              <TableCell>EGRESO</TableCell>
              <TableCell>SUELDOS</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">$5.000,00</TableCell>
              <TableCell align="right"> - $5.000,00</TableCell>
              <TableCell align="right">
                <IconButton size="small">
                  <SvgIcon fontSize="small">
                    <VisibilityIcon />
                  </SvgIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
}
