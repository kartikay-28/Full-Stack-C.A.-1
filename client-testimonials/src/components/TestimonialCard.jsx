import React from 'react' ;

const TestimonialCard = ({name,review}) => {

    return (
        <div>
            <h3>User name : {name}</h3>
            <h4>review by the user : {review}</h4>
        </div>
    )
}

export default TestimonialCard