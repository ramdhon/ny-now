import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import axios from 'axios'

import ItemCard from '../components/ItemCard'

export default class Home extends Component {
  state = {
    listNews: [],
  }

  componentDidMount() {
    axios
      .get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=eRiNPGnY8KTzXeroVLfZAt8FMEjcWxJH')
      .then(({ data }) => {
        const { results } = data;
        this.setState({
          listNews: results
        })
      })
  }

  render() {
    return (
      <Container maxWidth="sm" style={{ paddingTop: '30px' }}>
        {
          this.state.listNews.map((news, index) => {
            return (
              <ItemCard key={ index } news={ news }/>
            )
          })
        }
      </Container>
    )
  }
}
