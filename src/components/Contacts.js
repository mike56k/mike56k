import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TelegramIcon from "@material-ui/icons/Telegram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  accord: {
    width: "100%",
    backgroundColor: "#333",
    color: "gainsboro",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const Contacts = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const classes = useStyles();
  const telegaArea = useRef(null);
  const emailArea = useRef(null);
  const githubArea = useRef(null);

  const copyCodeToClipboard = (someArea) => {
    const text = someArea.current.textContent;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        handleClick();
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };
  return (
    <div>
      <Card
        className={classes.root}
        style={{ background: "#222", color: "gainsboro" }}
      >
        <CardActions>
          <Accordion className={classes.accord}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <h2>
                  Contacts{" "}
                  <span role="img" aria-label="sheep">
                    💬
                  </span>
                </h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List
                component="nav"
                className={classes.root}
                aria-label="contacts"
              >
                <ListItem
                  button
                  onClick={() => {
                    copyCodeToClipboard(telegaArea);
                  }}
                >
                  <ListItemIcon>
                    <TelegramIcon style={{ color: "gainsboro" }} />
                  </ListItemIcon>
                  <ListItemText ref={telegaArea} primary="@ogseee" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    copyCodeToClipboard(emailArea);
                  }}
                >
                  <ListItemIcon>
                    <AlternateEmailIcon style={{ color: "gainsboro" }} />
                  </ListItemIcon>
                  <ListItemText ref={emailArea} primary="miha.is@mail.ru" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    copyCodeToClipboard(githubArea);
                  }}
                >
                  <ListItemIcon>
                    <GitHubIcon style={{ color: "gainsboro" }} />
                  </ListItemIcon>
                  <ListItemText
                    ref={githubArea}
                    primary="https://github.com/mike56k"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copied successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Contacts;
