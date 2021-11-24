import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
<div className=" footer ">
<div className="text-white ">
                      
                      {/* website most important footer part */}
                      <div className=""> 
                      {/* responsive bootstrap */}
                      <div className="row ">
                                   <div className="col-lg-4 col-12 col-md-6  ">
                                       <h2 className="text-footer-hover">Contact Information</h2>
                                       <br /> 
                                   <p><i className="fa fa-map-marker me-2 " aria-hidden="true"></i>   
                                       Brooklyn, NY 10036
                                      United States </p>
                      <p> <i className="fas fa-envelope me-2"></i>Siamhossain@gmaill.com</p>
                      <p> <i className="fas fa-mobile me-2 "></i>Call Us: +5-355-3552-34</p> 
                                    </div>
                                   <div className="col-lg-4 col-12 col-md-6 ">
                                       <h2 className="text-white ">Our Best Cars</h2>
                                   <div className="footer-information">
                                   <p>1.Audi</p>
                                       <p>2.Aston Martin</p>
                                       <p>3. BMW
                      </p>
                                       <p>4. Cadillac</p>
                                       <p>5.Chevrolet</p>
                                       <p>6.Datsun</p>
                                   </div>
                                   </div>
                        
                                   <div className="col-lg-4 col-12 col-md-6 ">
                                       <h2 className="text-white">Opening Hours</h2>
                                      <div className="  ">
                                      <p>Mon – Thu 7.00 – 20.00</p>
                                       <p>Friday 7.00 – 19.00</p>
                                       <p>Saturday 9.00 – 16.00</p>
                                       <p>Sunday 9.00 – 13.00</p>
                                      </div>
                                   </div>
                                  
                               </div>
                                <p className="text-center "> 
                      Copyright © 2021 Siam Hossain Reserved.</p>
                           </div>
                       
                              </div>
</div>
    );
};

export default Footer;