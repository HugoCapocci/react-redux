import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { clearLines } from '../actions/logs';

import './Logs.css';
import { LogsActionTypes } from '../types/logs';
import { ReduxState } from '../store';

export interface StateProps {
  lines: string[];
}

interface DispatchProps {
  ownClearLines: () => void
}

export class Logs extends Component<DispatchProps & StateProps> {
  // see https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
  private inputRef = React.createRef<HTMLDivElement>();

  componentDidUpdate() {
    // @ts-ignore
    this.inputRef.current.scrollTop = this.inputRef.current.scrollHeight;
  }

  render() {
    return (
      <div className="logs">
        <div className="logs-header">
          <span>Output logs:</span>
          <input type="button" value="clear" onClick={() => { this.props.ownClearLines() }} />
        </div>
        <div className="logs-body" ref={this.inputRef}>
          {this.props.lines && this.props.lines.map((content, index) =>
            <div key={index}>{content}</div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState): StateProps => {
  return {
    lines: state.logs.lines
  };
}

const mapDispatchToProps = (dispatch: Dispatch<LogsActionTypes>, ownProps: {}): DispatchProps => {
  return {
    ownClearLines: () => {
      dispatch(clearLines())
    }
  };
}

export default connect<StateProps, DispatchProps, {}, ReduxState>(
  mapStateToProps,
  mapDispatchToProps
)(Logs);
