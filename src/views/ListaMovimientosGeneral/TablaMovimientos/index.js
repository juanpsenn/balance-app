import React from "react";
import {
  Box,
  Card,
  IconButton,
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
import RowMovimiento from "./RowMovimientos";

export default function TablaMovimientos({ movimientos }) {
  return (
    <Box>
      <Card>
        <TableContainer>
          <Box minWidth={920}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Motivo</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell align="right">Importe</TableCell>
                  <TableCell align="right">Saldo parcial</TableCell>
                  <TableCell align="right">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movimientos.map((movimiento, index) => (
                  <RowMovimiento movimiento={movimiento} />
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>
      </Card>
    </Box>
  );
}
