import React from "react";
import { Box, Card, Divider, List, Typography } from "@material-ui/core";
import ListItem from "./ListItem";

export default function ListaMovimientos(params) {
  return (
    <Card style={{ borderRadius: 15 }}>
      <List>
        {[0, 0, 0, 0, 0, 0, 1].map((x) => (
          <ListItem />
        ))}
      </List>
    </Card>
  );
}
