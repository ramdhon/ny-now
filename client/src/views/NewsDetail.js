import React, { Component } from 'react'

import { connect } from 'react-redux';

class NewsDetail extends Component {
  render() {
    const { url } = this.props;

    return (
      <iframe is="x-frame-bypass" title="news" style={{width:"99.7%", height:"87.7vh"}} src={url}>
        Browser is not supported the frame yet
      </iframe>
    )
  }
}

const mapStateToProps = state => {
  const { url } = state;

  return {
    url
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);