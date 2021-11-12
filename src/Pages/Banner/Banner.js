import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
               <div className="container">
            <>
{/* our Food  bannar  */}
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src='https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E='
            alt="First slide"
        />
        <Carousel.Caption>
            <h3 className="text-danger">First slide label</h3>
            <p  className="text-danger"> A Car Salesperson, or Auto Sales Representative, is responsible for selling cars, trucks and vans for personal and commercial use.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src= 'https://media.istockphoto.com/photos/road-trip-with-my-best-friend-picture-id1324380685?b=1&k=20&m=1324380685&s=170667a&w=0&h=T7fFkZmHzvye117esYVj5aRmZ5po_67XbDxIELFkBDg='
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3  className="text-danger">Second slide label</h3>
            <p  className="text-danger"> Their duties include meeting with customers to discuss their needs, promoting sales offers at their dealership and participating in test drives with interested customers.
</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src='https://media.istockphoto.com/photos/generic-suv-car-picture-id1255869108?b=1&k=20&m=1255869108&s=170667a&w=0&h=njY-FCB4IfCWpL4tRMIhVzdC4WEhzCD72TkHgr3PoR8='
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3  className="text-danger">Third slide label</h3>
            <p  className="text-danger"> Researching new car products and trends through automotive releases to stay up to date and make best recommendations to potential customers.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</>
         </div>
     );
};

export default Banner;