import React, {useState} from "react";
import { FaStar} from "react-icons/fa";
import './Review.css'


const Rating =() => {
        const [rate,setRating] = useState(null);
        return(
            <div>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1 ;
                    return ( 
                    <label key={i}>
                        <input 
                        type="radio" 
                        name="rate" 
                        value ={ratingValue} onClick={()=> setRating(ratingValue)}/>
                    <FaStar className="star" 
                    color={ratingValue <= rate ? "#ffc107" : "#e4e5e9"}
                    size={30}></FaStar>
                    </label>
                    );
                })}
            </div>
        );
    };
    export default Rating;