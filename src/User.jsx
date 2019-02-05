import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from './actions';

export class User extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <div>Bonjour, {this.props.userName}</div>;
  }
}

const mapStateToProps = (state) => ({
  userName: state.user ? state.user.name : ''
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => {
    dispatch(fetchUser())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

