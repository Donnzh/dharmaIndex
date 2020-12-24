import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TopBar from "./topBar";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import * as data from "./data.json";
// import { jsonFormater } from "./utils";
const terms = data.terminology;

function TermList(props) {
  return (
    <React.Fragment>
      {terms.map((t, index) => {
        const dharmaTerm = `${index + 1}.${t.term}`;
        return (
          <List dense>
            <ListItem onClick={() => props.onTermClick(index)}>
              <ListItemText primary={dharmaTerm} />
            </ListItem>
          </List>
        );
      })}
    </React.Fragment>
  );
}

export default TermList;
