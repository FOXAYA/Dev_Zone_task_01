import { Component } from "react";
import "./App.css";
import Header from "./compentents/Header";
import Home from "./compentents/Home";

class App extends Component {
  state = {
    myNAme: "Fox",
    agr: 31,
  };

  render() {
    return (
      <>
        <Header />
        <Home test={this.state.myNAme} />
      </>
    );
  }
}

export default App;
