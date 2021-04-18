import React from "react";
import { Box, Card, Divider, SvgIcon, Typography } from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";

export default function TarjetaSaldo({ ...rest }) {
  return (
    <Box m={1} {...rest}>
      <Card>
        <Box p={1} display="flex" alignItems="center">
          <Box p={1}>
            <SvgIcon fontSize="large">
              <CreditCardIcon />
            </SvgIcon>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box p={1}>
            <Typography variant="h5">Nombre Tarjeta</Typography>
            <Typography variant="body1">$10.000,00</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
