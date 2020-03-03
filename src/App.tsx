import React from 'react';
import {withStyles, WithStyles, Grid} from '@material-ui/core';
import styles from "./styles/app.styles";
import './App.css';

interface AppProps extends WithStyles<typeof styles> {

};

const App:React.FC<AppProps> = ({classes}) => {
  return (
    <div className={classes.app}>
      <Grid container>
        <Grid xs={12} item className={classes.header}>
          Header
        </Grid>
        <Grid xs={12}item className={classes.main}>
          Main Tamagochi interface current tamagochi
        </Grid>
        <Grid xs={12}item className={classes.footer}>
          Footer that displays all tamagochi you had
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);