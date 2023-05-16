import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

export default function Sidebar(props) {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant="span"
        noWrap
        component="div"
        className="title"
        sx={{
          display: {
            xs: "none",
            sm: "block",
            marginLeft: "18px",
            marginTop: "18px",
          },
        }}
      >
        STUDENT MANAGER
      </Typography>
      <List>
        {Object.entries(props.dataSidebar).map((item, index) => (
          <ListItem key={item[1]} disablePadding>
            <ListItemButton
              onClick={() => {
                window.location.href =
                  window.location.origin + "/" + `${item[0]}`;
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item[1]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box
            sx={{
              display: {
                md: "flex",
                alignItems: "center",
                justifyItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <MenuIcon onClick={toggleDrawer(anchor, true)} />
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list("left")}
            </Drawer>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
}
