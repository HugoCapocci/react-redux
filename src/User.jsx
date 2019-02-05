import React, { Component } from 'react';

export default class User extends Component {
  state = {
    userName: ''
  };

  componentDidMount() {
    fetch('./user-data.json')
    .then((response) => response.json())
    .then(user => {
      this.setState({
        userName: user.name
      });
    });
  }

  render() {
    return <div>Bonjour, {this.state.userName}</div>;
  }
}
