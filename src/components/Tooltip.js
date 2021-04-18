import React from "react";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";
import { Typography } from "@material-ui/core";

export default function CustomTooltip({ title, children, ...rest }) {
  return (
    <Tooltip
      title={<Typography variant="subtitle1">{title}</Typography>}
      TransitionComponent={Zoom}
      {...rest}
    >
      <span>{children}</span>
    </Tooltip>
  );
}
