import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AboutMeCard from "./AboutMeCard";
import SimpleCard from "./SimpleCard";
import Contacts from "./Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•NET</span>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <AboutMeCard />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <SimpleCard
              title={bull}
              level="Junior"
              skills={["C#", "Windows Forms", "Entity Framework", "WPF"]}
              projects={[
                {
                  name: "SNKRS.COM AUTOMATIZATION BOT",
                  status: "in progress",
                  link: "soon",
                },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <SimpleCard
              title="React"
              level="Junior"
              skills={["JS", "Redux", "HTML", "CSS", "Firebase"]}
              projects={[
                {
                  name: "ToDo App + FireBase",
                  status: "complete",
                  link: "https://github.com/mike56k/todoappreact",
                },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Contacts />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
