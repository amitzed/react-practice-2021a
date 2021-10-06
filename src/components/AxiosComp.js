import React, { Fragment } from "react";
import axios from "axios";

export default class AxiosComp extends React.Component {

  state = {
    info: []
  }

  fetchJSON = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            const info = res.data;
            this.setState({
              info
            })
            console.log(this.state.info)
          })
          .catch(err => {
            console.error(err)
            console.error('Something Went Wrong')
          })
  }

  fetchWithVanillaFetch = () => {
    fetch('https://api.openbrewerydb.org/breweries')
          .then(res => res.json())
          .then(data => {
            for(let text of data) {
              console.log('TEXT:', text.name)
            }
          })
  }

  componentDidMount() {
    this.fetchJSON();
    this.fetchWithVanillaFetch();
  }

  render() {
    return (
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Info (Axios)</h1>
        {
          this.state.info.map((data, index) => (
            <div key={index}>
              <h2>Title: {data.title}</h2>
              <p>{data.body}</p>
            </div>
          ))
        }
      </div>
    )
  }
}