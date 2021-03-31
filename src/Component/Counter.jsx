import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };
  hanleIncre = () => {
    this.setState(preState => {
      return {
        value: preState.value + 1,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value onValue={value} />
        <Controls onIncrements={this.hanleIncre} />
      </div>
    );
  }
}
export default Counter;
