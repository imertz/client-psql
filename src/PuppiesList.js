import React from 'react';

import axios from 'axios';

export default class PuppiesList extends React.Component {
  state = {
    puppies: []
  }

  componentDidMount() {
    axios.get(`/api/puppies`)
      .then(res => {
        const puppies = res.data.data;
        this.setState({ puppies });
      })
  }

  render() {
    return (
      <ul>
        { this.state.puppies.map(puppy => <li key={puppy.id}>{puppy.name}</li>)}
      </ul>
    )
  }
}
