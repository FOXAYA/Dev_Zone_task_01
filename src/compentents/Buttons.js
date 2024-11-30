import { Component } from "react";

class Buttons extends Component {
  state = {
    myNum: 1,
  };

  increment = () => {
    this.setState({
      myNum: this.state.myNum + 1,
    });
  };

  decrement = () => {
    if (this.state.myNum > 1) {
      this.setState({
        myNum: this.state.myNum - 1,
      });
    }
  };

  render() {
    return (
      <>
        <h1 className="center" 
        style={{
            color: this.state.myNum > 5 ? "red" :  "green"
        }}
        >{this.state.myNum}</h1>
        
        <div className="Container flex ">
          <button className="incre-btn" onClick={this.increment}>
            Increment
          </button>
          <button className="decre-btn" onClick={this.decrement}>
            decrement
          </button>
        </div>
      </>
    );
  }
}

export default Buttons;