import React, { useEffect } from 'react';
import './About.css'
import Aos from 'aos';
  import 'aos/dist/aos.css'
const About = () => {
  useEffect(() => {
    Aos.init({duration:2000})
},[])
    return (
        <div data-aos="zoom-in-down">
        {/* using bootstrap responsive */}
<div className="row owner container-fluid mt-5 p-5">
   <div className="col-lg-7 col-12 col-md-6">
   <div className="">
     <h4>Founder & Owner</h4>
      <h1 className="fw-bolder text-primary">Bill Gates 
</h1>
<hr className="horizontal-line" />
<p> How did Bill Gates make his fortune? Mr Gates' wealth comes from Microsoft, which he co-founded with school friend Paul Allen in 1975 after dropping out of Harvard University. ... In 2000 he stepped down as Microsoft CEO and later in 2020 quit as a board member to focus on his philanthropic work
</p>
 </div>
<div className="fs-5">
 {/* font awsome */}
<i className="fab fa-facebook m-2 icon"></i>
 <i className="fab fa-twitter m-2 icon"></i>
 <i className="fab fa-instagram m-2 icon"></i>
</div>
   </div>
   <div className="col-lg-5 col-12 col-md-6 ">
        <img  className="img-fluid w-100 "  src="https://storage.googleapis.com/cgiarorg/2021/02/c343f97f-1200x-1-b.jpg" alt="" />
   </div>
</div>
  </div>
    );
};

export default About;