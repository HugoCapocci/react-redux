import React, { Component } from 'react';
import { Dispatch} from 'redux';
import { connect } from 'react-redux';

import { clearLines } from '../actions/logs';
import { LogsActionTypes } from '../types/logs';

import './Logs.css';

export interface LogsProps {
  lines: string[];
}

interface DispatchProps {
  clearLines: () => void;
}

type Props = LogsProps & DispatchProps;

export class Logs extends Component<Props> {
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
          <input type="button" value="clear" onClick={() => { this.props.clearLines() }} />
        </div>
        <div className="logs-body" ref={this.inputRef}>
          {this.props.lines && this.props.lines.map((content, index) =>
            <div key={index}>{content}</div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LogsActionTypes>, ownProps: LogsProps): DispatchProps => ({
  clearLines: () => {
    dispatch(clearLines())
  }
});

export default connect<{}, DispatchProps, LogsProps>(
  null,
  mapDispatchToProps
)(Logs);
