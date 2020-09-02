import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
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
const SharpCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes.root}
        style={{ background: "#222", color: "gainsboro" }}
      >
        <CardContent>
          <Typography>
            {" "}
            <h2>About Me</h2>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default SharpCard;
