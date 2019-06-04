import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import axios from 'axios'
import noFound from '../assets/404.png'

import { connect } from 'react-redux';
import { setLoading } from '../store/action';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ItemCard } from '../components'

class Home extends Component {
  state = {
    listNews: [],
  }

  searchNews = (search) => {
    this.props.setLoading();

    axios
      .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=eRiNPGnY8KTzXeroVLfZAt8FMEjcWxJH`)
      .then(({ data }) => {
        this.props.setLoading(false);

        const { docs } = data.response;
        docs.map(doc => {
          const { snippet, lead_paragraph, web_url, pub_date, multimedia } = doc;

          multimedia.map(item => {
            const { url } = item;

            item.url = 'https://static01.nyt.com/' + url;
            return item;
          })
          doc.title = snippet;
          doc.abstract = lead_paragraph;
          doc.url = web_url;
          doc.published_date = pub_date;
          return doc;
        })
        this.setState({
          listNews: docs
        })
      })
      .catch((err) => {
        this.props.setLoading(false);

        console.log(err);
      })
  }

  fetchNews = () => {
    this.props.setLoading();

    axios
      .get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=eRiNPGnY8KTzXeroVLfZAt8FMEjcWxJH')
      .then(({ data }) => {
        this.props.setLoading(false);

        const { results } = data;
        this.setState({
          listNews: results
        })
      })
      .catch((err) => {
        this.props.setLoading(false);

        console.log(err);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.props;
    
    if (prevProps.search !== search) {
      if (!search) {
        this.fetchNews();
      } else {
        this.searchNews(search);
      }
    }
  }
  
  componentDidMount() {
    const { search } = this.props;
    
    if (!search) {
      this.fetchNews();
    } else {
      this.searchNews(search);
    }
  }

  render() {
    return (
      <Container maxWidth="sm" style={{ paddingTop: '30px' }}>
        {
          (this.state.listNews.length === 0 && !this.props.isLoading)
          ?
          <Grid
            container
            justify="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
            >
              <img src={noFound} width="300px" alt="noFound" />
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
            >
              <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
                Not found
              </Typography>
            </Grid>
          </Grid>
          :
          this.state.listNews.map((news, index) => {
            return (
              <ItemCard key={index} news={news}/>
            )
          })
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoading } = state;

  return {
    isLoading
  }
}

const mapDispatchToProps = {
  setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);