import { Component } from "react";
import "./App.css";
import Header from "./compentents/Header";
import Home from "./compentents/Home";

class App extends Component {
  state = {
    myNAme: "Fox",
    age: 31,
    country: "Egypt",
     
  };

 
  render() {
    return (
      <>
        <Header />
        <Home
          myNAme={this.state.myNAme}
          age={this.state.age}
          country={this.state.country}
        />
      </>
    );
  }
}

export default App;
