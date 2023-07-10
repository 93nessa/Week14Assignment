import React from "react";                              
import Rating from "./Rating";
import { event } from "jquery";


export default class Review extends React.Component {
    state = {
        reviews : [],
    };


    handleFormSubmit = (event) => {
        event.preventDefault();
        const review =event.target.elements.reviewform.value;
        this.setState((prevState) => ({
            reviews: [...prevState.reviews, review],
        }));
        event.target.reset();
    };

    render() {
        const {reviews} = this.state;
        return (
          <div>
          <form onSubmit ={this.handleFormSubmit}>
             <div> 
                <Rating></Rating>
            </div>
            <div className="form-group">
                <label htmlFor='reviewform'>Leave A Review</label>
            </div>  
            <div>
                <textarea className="form-control" id="reviewform" rows={5}></textarea>
                <br></br>
                <button className="button-85" role="button" type="submit" >Submit</button>
            </div>
          </form>
          {reviews.length > 0 && (
            <div>
                <h3>Submitted Reviews:</h3>
                {reviews.map((review, index) => (
                    <p key={index}>{review}</p>
                ))}
            </div>
          )}
        </div>
        );
    }
}