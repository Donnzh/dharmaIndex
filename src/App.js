import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TopBar from "./topBar";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import * as data from "./data.json";
import TermList from "./term";
// import { jsonFormater } from "./utils";

const totalTermNum = data.terminology.length + 1;
const terms = data.terminology;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",

    // color: theme.palette.text.secondary,
  },
  topSummary: {
    padding: "0 0 15px",
    textAlign: "left",
  },
  divider: {
    width: "100%",
    margin: "0 0 15px 0",
  },
  termList: {
    order: 1,
    [theme.breakpoints.down("xs")]: {
      order: 2,
      marginTop: "40vh",
      height: "40vh",
      overflow: "auto",
    },
  },
  termDescription: {
    order: 2,
    [theme.breakpoints.down("xs")]: {
      order: 1,
      height: "40vh",
      overflow: "auto",
      width: "90%",
      position: "fixed",
    },
  },
  box: {
    maxHeight: "calc(100vh - 140px)",
    overflow: "auto",
  },
  descriptionBox: {
    position: "absolute",
    marginRight: "40px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0px",
    },
  },
}));
function App() {
  const classes = useStyles();

  const [dataIndex, setDataIndex] = useState(1);
  const termClick = (index) => {
    setDataIndex(index);
  };
  const onTagsChange = (e, values) => {
    const valueIndex = values.index;
    setDataIndex(valueIndex - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar onTagsChange={onTagsChange} />
      <Container maxWidth="md" justify="flex-start">
        <Typography
          component="div"
          style={{
            backgroundColor: "none",
            margin: "5px",
          }}
        >
          <Grid container justify="flex-start" alignItems="stretch">
            <Grid item xs={12}>
              <Typography
                component="div"
                style={{ backgroundColor: "none", margin: "15px 0 15px 0" }}
              >
                总目录 1- {totalTermNum} 词条
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Box className={classes.box}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} className={classes.termList}>
                <Paper className={classes.paper}>
                  <TermList onTermClick={termClick} />
                </Paper>
              </Grid>

              <Grid
                item
                spacing={1}
                xs={12}
                sm={8}
                className={classes.termDescription}
              >
                <Box className={classes.descriptionBox}>
                  {terms[dataIndex] &&
                    terms[dataIndex].description.map((d, index) => {
                      return (
                        <List>
                          <ListItem>
                            {index === 0 && (
                              <ListItemText
                                primary={`${dataIndex + 1}.${
                                  terms[dataIndex].term
                                }`}
                              />
                            )}
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              primary={d.subDescription}
                              secondary={d.source}
                            />
                          </ListItem>
                        </List>
                      );
                    })}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
