import React from 'react';

const ReviewDetail = ({review}) => {
     return (
        <div>
 <div className="card" style={{}}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HDGpR4ylYg0Mwrg2NHEnwMUwwkYVD494bC3kCwhXAxaR88nvMo_QQqfeahVZ4xnXUJw&usqp=CAU" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{review.name}</h5>
    <p className="card-text">{review.reviewText}</p>
   </div>
</div>
        </div>
    );
};

export default ReviewDetail;