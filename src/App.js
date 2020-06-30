import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Carousel from './components/Carousel';
import Scrollable from './components/Scrollable';

class App extends Component {
  constructor(){
    super();
    this.state={
      latestDiscounts: null
    }
  }

  componentDidMount(){
    // fetch('https://us-central1-ecom-d6dfc.cloudfunctions.net/getLatest')
    //   .then(res => res.json())
    //   .then(latestDiscounts => this.setState({latestDiscounts}))
    //   .catch(err => console.log(err));
  }

  render(){
    return (
      <>
        <div className="App">
          <Nav />
          <Carousel />
          <Scrollable data={this.state.latestDiscounts}/>
        </div>
      </>
    );
  }
}

export default App;
