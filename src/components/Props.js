import React, { Fragment } from "react";


class Heading extends React.Component {

  sayHello() {
    alert(`Hello`);
  }

  render() {
    return (
      <div>
          {
            this.props.isAdmin === 'yes'
            ?
            <h1 onClick={this.sayHello}>Hello, {this.props.name} -- ADMIN</h1>
            :
            <h1 onClick={this.sayHello}>Hello, {this.props.name}</h1>
          }
      </div>
    )
  }
}

export default class Props extends React.Component {

  render() {
    return (
      <Fragment>
        <Heading name="Amit" />
        <Heading name="Christina" isAdmin="yes" />
        <Heading name="Phelan" isAdmin="yes" />
      </Fragment>
    )
  }
}