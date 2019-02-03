import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clearLines } from './actions';

import './Logs.css';

export class Logs extends Component<Props> {
  inputRef = React.createRef();

  componentDidUpdate() {
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
          {this.props.lines && this.props.lines.map(({ content }, index) =>
            <div key={index}>{content}</div> 
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lines: state.lines
});

const mapDispatchToProps = (dispatch) => ({
  clearLines: () => {
    dispatch(clearLines())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs);
