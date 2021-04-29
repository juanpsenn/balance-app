import React from "react";
import { Box, Card, Divider, List, Typography } from "@material-ui/core";
import ListItem from "./ListItem";

export default function ListaMovimientos({ movimientos }) {
  return (
    <Card>
      <List>
        {movimientos.map((movimiento, index) => (
          <ListItem key={index} movimiento={movimiento} />
        ))}
      </List>
    </Card>
  );
}
