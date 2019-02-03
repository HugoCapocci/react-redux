import React, { Component } from 'react';

export default class Item extends Component {
  static defaultProps = {
    label: 'ITEM'
  };
  render() {
    // TODO add `render Item Component with id ${this.props.id}` to logs
    return <div>{this.props.label} { this.props.id }</div>
  }
}
