import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Skills from "./Skills";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

const SimpleCard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes.root}
        style={{ background: "#222", color: "gainsboro" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.pos}>{props.level}</Typography>
          <Typography variant="body2" component="p">
            Skills
          </Typography>
          <Skills skills={props.skills} />
        </CardContent>
        <CardActions>
          <Accordion className={classes.accord}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <h3>Projects</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper} style={{ background: "#444" }}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h4>Name</h4>
                      </TableCell>
                      <TableCell align="right">
                        <h4>Status</h4>
                      </TableCell>
                      <TableCell align="right">
                        <h4>Link</h4>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.projects.map((project) => (
                      <TableRow key={project.name}>
                        <TableCell component="th" scope="row">
                          <h4>{project.name}</h4>
                        </TableCell>
                        <TableCell align="right">
                          {project.status === "complete" ? (
                            <h4 style={{ color: "green" }}>{project.status}</h4>
                          ) : (
                            <h4 className="status">{project.status}</h4>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {project.link === "soon" ? (
                            <Button disabled>
                              <h4>SOON</h4>
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                window.open(project.link);
                              }}
                            >
                              <h4>HERE</h4>
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </CardActions>
      </Card>
    </div>
  );
};
export default SimpleCard;
