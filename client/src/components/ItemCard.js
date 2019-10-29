import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import LazyLoad from 'react-lazyload';
import { CircularLoading } from '../components'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { setUrl } from '../store/action';

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
  },
  my: {
    marginBottom: "30px"
  }
});

// function urlEditing(url) {
//   return url.split('').filter(item => item !== '\\').join('')
// }

function ImgMediaCard(props) {
  const classes = useStyles();
  const { news } = props;
  const { multimedia } = news;
  const classname = classNames(classes.card, classes.my);
  console.log({multimedia})

  function goToDetail() {
    props.history.push('/news-detail');
    props.setUrl(news.url);
  }

  return (
    <Card className={ classname }>
      <LazyLoad
        placeholder={
          <Grid
            container
            justify="center"
          >
            <CircularLoading />
          </Grid>
        }
      >
        <CardActionArea onClick={goToDetail}>
          { 
            ((multimedia && typeof multimedia === 'string') || (multimedia && multimedia.length > 0 && typeof multimedia === 'object')) &&
            <CardMedia
              component="img"
              alt={news.title}
              height="300"
              image={multimedia[3] ? multimedia[3].url : multimedia[0].url}
              title="news media"
            />
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {news.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {(new Date(news.published_date)).toString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {news.abstract}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <a href={news.url}> */}
            <Button onClick={goToDetail} size="small" color="primary">
              Learn More
            </Button>
          {/* </a> */}
        </CardActions> 
      </LazyLoad>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = {
  setUrl
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImgMediaCard));