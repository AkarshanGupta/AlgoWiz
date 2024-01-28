import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import { AiFillGithub } from "react-icons/ai";
import logo from "../logo.svg";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export function NavBar() {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          height: "500px",
          width: "500px",
          paddingLeft: "300px",
        }}
      >
        <div className="containee">
          <h3>AlgoWiz</h3>
          {/* Content goes here */}
        </div>
        {/* GitHub icon */}
      </div>

      <AppBar position="static" color="default">
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm, index) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(index)}
              key={algorithm.title}
            />
          ))}
          <Tab label="All" {...a11yProps(sortingAlgorithms.length)} />
        </Tabs>
      </AppBar>
    </div>
  );
}

