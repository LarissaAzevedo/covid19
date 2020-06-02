import React, { Component } from 'react';

class Teste extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }

  }
  componentDidMount(){
   this.getData()
  }
  getData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.covid19api.com/dayone/country/south-africa/status/confirmed", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <span></span>
    )
  }
}
export default Teste;