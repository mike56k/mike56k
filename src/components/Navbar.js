import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "gainsboro",
    marginBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ background: "#222" }}>
          <Typography style={{ color: "gainsboro" }} className={classes.title}>
            <h2>Mikhail Isachenko</h2>
          </Typography>
          <Button
            style={{ color: "gainsboro" }}
            color="inherit"
            onClick={() => {
              window.open("https://github.com/mike56k");
            }}
          >
            <h2>GitHub</h2>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
