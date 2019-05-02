import React, { Component } from 'react';

export interface ItemProps {
    label: string,
    id: number
}

export default class Item extends Component<ItemProps> {
  static defaultProps = {
    label: 'ITEM'
  };
  render() {
    // TODO add message `render Item Component with id ${this.props.id}` to logs
    return <div>{this.props.label} { this.props.id }</div>
  }
}