import React from "react";


class ClassStateExample extends React.Component{

    constructor() {
        super();
        this.state = {color:'Red', model: 'ford'}
    }
    render(){
        return <>
         <h1>My color is { this.state.color } and {this.state.model}</h1>
         {/* <button onClick={()=>{this.setState({color:'pink'})}}>change color</button> */}

         {/* updating object */}
         <button onClick={()=>{this.setState(previousValue =>{ return {...previousValue, color:"pink"}})}}>change color</button>
        </>
    }
}

export default ClassStateExample;