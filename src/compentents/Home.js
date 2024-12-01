import { Component } from "react";

class Home extends Component{
    render(){
        return (
            <>
         <h1> My Name Is {this.props.test}</h1>
         </>
        )
}
}
export default Home;