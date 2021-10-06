import React from "react";

class InputPage extends React.Component {

  state = {
    myInput: 'Enter Text Here',
    changeNames: 'My Family'
  }

  changeTheText = (e) => {
    this.setState({
      myInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.changeTheText} />
        <h1>{this.state.myInput}</h1>
        <hr />
        <br />
        <br />
        <button
          onClick={(() => this.setState({changeNames: 'Phelan'}))}
        >Phelan</button>
        <button
          onClick={(() => this.setState({changeNames: 'Christina'}))}
        >Christina</button>
        <button
          onClick={(() => this.setState({changeNames: 'Amit'}))}
        >Amit</button>
        <h1>{this.state.changeNames}</h1>
      </div>
    )
  }
}


export default InputPage;