import React, { Component } from 'react';
import { Dispatch} from 'redux';
import { connect } from 'react-redux';

import { addLine } from '../actions/logs';
import { LogsActionTypes } from '../types/logs';

export interface ItemProps {
    label: string,
    id: number
}

interface DispatchProps {
  addLine: () => void;
}

type Props = ItemProps & DispatchProps;

export class Item extends Component<Props> {
  static defaultProps = {
    label: 'ITEM'
  };
  render() {
    this.props.addLine();
    return <div>{this.props.label} { this.props.id }</div>
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LogsActionTypes>, ownProps: ItemProps): DispatchProps => ({
  addLine: () => {
    dispatch(addLine(`render Item Component with id ${ownProps.id}`))
  }
});

export default connect<{}, DispatchProps, ItemProps>(
  null,
  mapDispatchToProps
)(Item);
