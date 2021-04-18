import React from "react";
import { Box, Card, Divider, SvgIcon, Typography } from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";

export default function TarjetaSaldo({ ...rest }) {
  return (
    <Box m={1} {...rest}>
      <Card>
        <Box p={1} display="flex" alignItems="center">
          <Box p={1} flexGrow={1}>
            <Typography component="h3" variant="overline" color="textSecondary">
              Nombre Cuenta
            </Typography>
            <Typography variant="h3" color="textPrimary">
              $10.000,00
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box p={1}>
            <SvgIcon fontSize="large">
              <CreditCardIcon />
            </SvgIcon>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
