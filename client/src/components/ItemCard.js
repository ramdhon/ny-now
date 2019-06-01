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

import Loading from '../components/CircularLoading'

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

  return (
    news ?
    <Card className={ classname }>
      <CardActionArea>
        { 
          multimedia &&
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={ multimedia[3].url }
            title="Contemplative Reptile"
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { news.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { news.abstract }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={ news.url }>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
    :
    <Grid
      container
      justify="center"
    >
      <Loading />
    </Grid>
  )
}

export default ImgMediaCard;