import React from "react";

export default class Picture extends React.Component{
    render(){
        const myImageStyle ={width:"300px", height:""};
        return(
            <a>
            <img src={this.props.image} style={myImageStyle} alt=""></img>
            </a>
        )
    }
}