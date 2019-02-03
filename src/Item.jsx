import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLine } from './actions';

export class Item extends Component {
  static defaultProps = {
    label: 'ITEM'
  };
  render() {
    this.props.addLine();
    return <div>{this.props.label} { this.props.id }</div>
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addLine: () => {
    dispatch(addLine(`render Item Component with id ${ownProps.id}`))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
