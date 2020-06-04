import React, { Component } from 'react';

class Teste extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      summary: []
    }
  }

  componentDidMount() {
    this.getData()
    this.getSummary()
  };

  componentDidUpdate() {
    console.log(this.state.data)
  }

  getData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://api.covid19api.com/dayone/country/south-africa/status/confirmed", requestOptions)
      .then(response => response.text())
      .then(result => this.setState({ data: result }))
      .catch(error => console.log('error', error));
  }

  getSummary = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://api.covid19api.com/summary", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({ summary: result }))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <span>Casos: {this.state.data}</span>
      </div>
    )
  }
}
export default Teste;