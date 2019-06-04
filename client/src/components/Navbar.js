import React, { useState } from 'react';
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

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { setUrl } from '../store/action';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[50],
    },
  },
});

const useStyles = makeStyles(theme => ({
  submit: {
    display: 'none',
  },
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

function Navbar(props) {
  const classes = useStyles();
  const [searchForm, setSearchForm] = useState({
    search: ''
  });

  function goToHome(e) {
    e.preventDefault();
    props.history.push('/');
    props.search('');
  }

  function goToRead(e) {
    e.preventDefault();
    props.history.push('/news-detail');
    props.setUrl('https://www.nytimes.com');
  }

  function submitSearch(e) {
    e.preventDefault();
    props.history.push('/');
    props.search(searchForm.search);
  }

  function handleChange(e) {
    setSearchForm({
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <img height="50" src="http://24.media.tumblr.com/01e553cdd88060f6df46f6317fa9de02/tumblr_mgnju9MaKh1qdri4so1_500.gif" alt="nyt" />
            <Typography className={classes.title} variant="h6" noWrap>
              Now.
            </Typography>
            <Button onClick={goToHome} color="inherit">News</Button>
            <Button onClick={goToRead} color="inherit">Read</Button>
            {/* <Link className={classes.link} to="/">
              <Button color="inherit">News</Button>
            </Link> */}
            {/* <Link className={classes.link} to="/news-detail">
              <Button color="inherit">Read</Button>
            </Link> */}
            <form onSubmit={submitSearch}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search News"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  id="search"
                  value={searchForm.search}
                  onChange={handleChange}
                />
                <Button type="submit" variant="outlined">Go</Button>              
              </div>
            </form>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
  setUrl
}

// export default Navbar;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));