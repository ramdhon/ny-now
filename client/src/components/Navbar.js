import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import indigo from '@material-ui/core/colors/indigo';

import { Link } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[50],
    },
  },
});

const useStyles = makeStyles(theme => ({
  link: {
    color: 'black',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              What's??Now.
            </Typography>
            <Link className={classes.link} to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link className={classes.link} to="/about">
              <Button color="inherit">About</Button>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default SearchAppBar;