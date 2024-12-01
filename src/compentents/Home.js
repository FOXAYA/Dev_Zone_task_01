import { Component } from "react";
class Home extends Component{
    render(){
        return (
            <>
         <h1>My Name Is <span style={{
            color : "#09c979"
         }}>{this.props.myNAme}</span></h1>
         <h1>My Age Is  <span  style={{
            color: "#09c979"
          }}>{this.props.age}</span></h1>
         <h1>My Country Is <span  style={{
            color: "#09c979"
          }}>{this.props.country}</span></h1>
             </>
        )
}
}
export default Home;