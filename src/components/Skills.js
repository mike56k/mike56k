import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));
let colorCount = 0;
function getIndex() {
  if (colorCount > 1) {
    colorCount = 0;
  } else {
    colorCount++;
  }
  console.log(colorCount);
  return colorCount;
}
const Skills = (props) => {
  const classes = useStyles();

  const [someColor] = useState(["primary", "secondary", ""]);

  return (
    <div className={classes.root}>
      {props.skills.map((skill) => (
        <Chip label={skill} color={someColor[getIndex()]} />
      ))}

      {/* <Chip
        icon={<DesktopWindowsIcon />}
        label="Windows Forms"
        onClick={handleClick}
        color="primary"
      />
      <Chip
        label="Selenium"
        avatar={<Avatar>S</Avatar>}
        onClick={handleClick}
      />
      <Chip icon={<DeveloperBoardIcon />} label="WPF" onClick={handleClick} />
      <Chip
        label="Entity Framework"
        avatar={<Avatar>E</Avatar>}
        onClick={handleClick}
        color="secondary"
      /> */}
    </div>
  );
};
export default Skills;
