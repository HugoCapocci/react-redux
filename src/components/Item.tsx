import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addLine } from '../actions/logs';
import { LogsActionTypes } from '../types/logs';

export interface ItemProps {
    label: string,
    id: number
}

interface DispatchProps {
  ownAddLine: (line: string) => void
}

export class Item extends Component<ItemProps & DispatchProps> {
  static defaultProps = {
    label: 'ITEM'
  };
  render() {
    this.props.ownAddLine(`render Item Component with id ${this.props.id}`);
    return <div>{this.props.label} { this.props.id }</div>
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LogsActionTypes>, ownProps: ItemProps): DispatchProps => {
  return {
    ownAddLine: (line) => {
      dispatch(addLine(line))
    }
  }
}

export default connect<{}, DispatchProps, ItemProps>(
  null,
  mapDispatchToProps
)(Item);
