import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { BookForm } from './components/book/BookForm';
import './i18n';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    flexGrow: 1,
    padding: 40,
    backgroundColor: theme.palette.grey[100],
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <BookForm />
      </Paper>
    </div>
  );
}

export default App;
