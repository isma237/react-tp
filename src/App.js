import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  /*
  constructor(props){
    super(props)
    this.state = {houses: []}
  }*/

  
  //C'est possible grace à Babel
  state = {houses: []}

  async componentDidMount(){
    let url = 'https://mamaison.arenaplaza.site/api/Room/GetRoomList'
    try {
      let response = await axios.get(url)
      this.setState({houses: response.data})
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    const houses = this.state.houses;
    return (
      <div className='row mt-5'>
        { houses.map((house) => <Home key={house.id} description={house} />) }
      </div>
    );
  }
}
