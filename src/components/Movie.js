import React from "react";
import Review from "./Review";
import Picture from "./Image";

export default class Movie extends React.Component {
    render () {
        return (
            <div className="card-deck">
            <Picture image={this.props.image}></Picture>
            <div className="card-body">
              <h2 className="card-title">{this.props.name}</h2>
              <h4>
                <span className="space1">{this.props.rated }</span>
                <span className="space">{this.props.year }</span>
                <span className="space">{this.props.genre }</span>
                <span className="space">{this.props.length }</span>
                </h4>
              <p className="card-text">{this.props.details}</p>
             <Review></Review>
            </div>
          </div>
        )
    }
}