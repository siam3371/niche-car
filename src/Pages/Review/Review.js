import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AddReviews = () => {
    const [reviewText, setReviewText] = useState();

    const handleTextFeild = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const update = {...reviewText};
        update[name] = value;
        setReviewText(update);
    }
    const handleSendReview = (e)=>{
        console.log(reviewText);
        fetch('https://protected-forest-98778.herokuapp.com/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewText)
            })
                .then(res => res.json())
                .then(data=>{
                  if (data.insertedId) {
                    alert('Add Reviews Successfully');
                }
                });
        e.preventDefault();
      };
    return (
        <div className="shadow-lg p-3 w-25 mb-5 bg-body rounded w-50 my-5 py-5 mx-auto">
            <Form onSubmit={handleSendReview} className="w-100">
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" onBlur={handleTextFeild} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Reviews</Form.Label>
                    <Form.Control name="reviewText" onBlur={handleTextFeild} as="textarea" rows={3} />
                </Form.Group>
                <Button className="bg-primary text-white fw-bold py-1 px-2" variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AddReviews;