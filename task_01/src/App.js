import { Component } from 'react';
import './App.css';
import Buttons from './compentents/Buttons';
import Content  from './compentents/Content';


class App extends Component{
  
  render(){
    return (
      <>
      <Buttons />
      <Content />
      </>
    )
  }
}

export default App;