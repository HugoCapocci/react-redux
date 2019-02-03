import React, { Component } from 'react';

import './Logs.css';

export default class Logs extends Component<Props> {
  inputRef = React.createRef();

  componentDidUpdate() {
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
          {this.props.lines && this.props.lines.map(({ content, type }, index) =>
            <div key={index} className={type}>{content}</div> 
          )}
        </div>
      </div>
    )
  }
}
