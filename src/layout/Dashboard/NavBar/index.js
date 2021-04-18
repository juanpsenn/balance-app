import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListSubheader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import userNavItem from "src/data/userNavItem";
import { useLocation, matchPath } from "react-router";
import NavItem from "./NavItem";

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: 256,
  },
}));

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

export default function NavBar({ ...rest }) {
  const classes = useStyles();
  const location = useLocation();

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box p={2}>
        <Box mt={2} textAlign="center">
          <Typography variant="h5" color="textPrimary" underline="none">
            USERNAME
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box p={2}>
        {userNavItem.map(({ subheader, info: Info, items }) => (
          <List
            key={subheader}
            subheader={
              <ListSubheader
                disableGutters
                disableSticky
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {subheader}
                {Info && <Info className={classes.info} />}
              </ListSubheader>
            }
          >
            {renderNavItems({
              items: items,
              pathname: location.pathname,
            })}
          </List>
        ))}
      </Box>
      <Divider />
    </Box>
  );

  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      open
      variant="persistent"
    >
      {content}
    </Drawer>
  );
}
