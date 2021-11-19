import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
// {orderId, order_id, setOrders, orders}
const MyOrder = ({orderId, order_id, setOrders, orders,  }) => {
      const [order, setOrder] = useState([]);
     useEffect(()=>{
        fetch("https://protected-forest-98778.herokuapp.com/products")
        .then(res => res.json())
        .then(data =>  {
          const myOrders = data.filter(order=> orderId === order?._id);
          setOrder(myOrders);
         } 
          )
    }, [])
      const handleDeleteOrder=()=>{
      const proceed = window.confirm('Are You surely remove this Purches Order');
      if(proceed){
        fetch(`https://protected-forest-98778.herokuapp.com/orders/${order_id}`, {
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            alert('deleted successfully');
            const remainigOrder = orders.filter(order => order._id !== order_id);
            setOrders(remainigOrder);
          }
        });
      }
        
    } 
    return ( 
      <>  
                    {
                      order.map(orders => <Col>
                        <Card className="card-container p-2">
                          <Card.Img variant="top" height="" src={orders.img} />
                          <Card.Body>
                            <Card.Title>{orders?.name}</Card.Title>
                            <Card.Text>
                              {orders.describe}
                            </Card.Text>
                            <Button className="py-2 px-3 bg-primary text-white fw-bolder" onClick={handleDeleteOrder}>Remove Purchase</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      )
                    }
        
      </>
   
    );
};

export default MyOrder;