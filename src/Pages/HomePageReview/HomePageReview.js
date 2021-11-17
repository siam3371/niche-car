//  import React from 'react';
 import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../Hooks/UseAuth/useAuth';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
  const HomePageReview = () => {
     
    const [reviews, setReview] = useState([]);
    const {isloading} = useAuth();

    useEffect(()=>{
        fetch('https://protected-forest-98778.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
    }, []) 
     if(isloading){
        return <Spinner animation="border" variant="primary" />
    }
     return (
        <div className="container my-5 py-5">
            <div className="mx-auto mb-4 text-center">
                <h2 className="fw-bolder">Our Products Reviews</h2>
            </div>
            <div className="w-25 mx-auto border border-2 mb-5"><hr className="m-0 text-secondary" /></div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    reviews.map(review => <ReviewDetail
                        key={review._id}
                        review={review}
                    ></ReviewDetail>)
                }
            </Row>
        </div>
    );
};
  
 
 export default HomePageReview;