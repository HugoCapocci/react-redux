import React, { Component } from 'react';
import { Dispatch} from 'redux';
import { connect } from 'react-redux';

import { clearLines } from '../actions/logs';
import { LogsActionTypes } from '../types/logs';
import { ReduxState } from '../store';
import './Logs.css';

export interface StateProps {
  lines: string[];
}

interface DispatchProps {
  clearLines: () => void;
}

type Props = DispatchProps & StateProps;

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

const mapStateToProps = (state: ReduxState) => ({
  lines: state.lines
})

const mapDispatchToProps = (dispatch: Dispatch<LogsActionTypes>, ): DispatchProps => ({
  clearLines: () => {
    dispatch(clearLines())
  }
});

export default connect<StateProps, DispatchProps, {}, ReduxState>(
  mapStateToProps,
  mapDispatchToProps
)(Logs);
