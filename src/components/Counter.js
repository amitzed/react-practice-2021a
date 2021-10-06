import { Component, Fragment } from "react";

export default class Counter extends Component {

  state = {
    countUp: 0,
    countDown: 100
  }

  increment = () => {
    this.setState({
      countUp: this.state.countUp + 1
    })
  }

  decrement = () => {
    this.setState({
      countDown: this.state.countDown - 1
    })
  }

  render() {
    const { countUp, countDown } = this.state;

    return (
      <Fragment>

        <button onClick={this.increment}>Count Up</button>
        <button onClick={this.decrement}>Count Down</button>

        <h1>Count Up: {countUp}</h1>
        <h1>Count Down: {countDown}</h1>
      </Fragment>
    )
  }
}