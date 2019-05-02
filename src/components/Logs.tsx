import React, { Component } from 'react';

import './Logs.css';

export interface LogsProps {
  lines: string[]
}

export default class Logs extends Component<LogsProps> {
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
          <input type="button" value="clear" onClick={() => {}} />
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
