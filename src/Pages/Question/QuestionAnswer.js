import Aos from 'aos';
import React, { useEffect } from 'react';
 import 'aos/dist/aos.css'
const QuestionAnswer = () => {
    useEffect(() => {
        Aos.init({duration:2000})
   },[])
    return (
        <div class="container my-5" data-aos="flip-left">
        <h1 class="text-success text-center fst-italic mb-3">
        Car Customer Love From Around The World
        </h1>
        <div class="container overflow-hidden">
          <div class="row gy-5 gx-5">
            <div class="col-12 col-lg-4">
              <div class="p-3 border bg-light">
                <img
                  width="360px"
                  class="img-fluid d-block mx-auto"
                  src="https://media.istockphoto.com/photos/on-a-road-trip-with-our-dog-picture-id1324381802?b=1&k=20&m=1324381802&s=170667a&w=0&h=x2JxCpUvXgcY0jcz06QFIXVm1uTFugV4iEjJXbIb4rI="
                  alt=""
                />
                <p class="love-tittle">
                  Couples Who ride togather stays togather
                </p>
                <div class="d-flex justify-content-between">
                  <p class="fst-italic">#The world fevorite bangladesh</p>
                  <div className="fs-5">
 {/* font awsome */}
  <i className="fab fa-twitter m-2 icon"></i>
 </div>                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="p-3 border bg-light">
                <img
                  width="360px"
                  class="img-fluid d-block mx-auto"
                  src="https://media.istockphoto.com/photos/happy-black-couple-in-sunglasses-enjoying-music-driving-luxury-car-picture-id1336475641?b=1&k=20&m=1336475641&s=170667a&w=0&h=TuRTPw8C4tpOum62x2uMrKKmMtsquc0nSbx_IrCzhoM="
                  alt=""
                />
                <p class="love-tittle">love Who ride race stays togather</p>
                <div class="d-flex justify-content-between">
                  <p class="fst-italic">@minnosiruder</p>
                  <div className="fs-5">
 {/* font awsome */}
<i className="fab fa-facebook m-2 icon"></i>
 </div>
                 </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="p-3 border bg-light">
                <img
                  width="360px"
                  class="d-block img-fluid mx-auto"
                  src="https://media.istockphoto.com/photos/theres-just-something-so-pleasurable-about-a-road-trip-picture-id1253916026?b=1&k=20&m=1253916026&s=170667a&w=0&h=v3_x1fNUo3z23LqJTjxM_TWxp0ErILh4uJQlkFHi77A="
                  alt=""
                />
                <p class="love-tittle">
                  bike Who ride togather stays expensive
                </p>
                <div class="d-flex justify-content-between">
                  <p class="fst-italic">@Gandidalis</p>
                  <div className="fs-5">
 {/* font awsome */}
  <i className="fab fa-instagram m-2 icon"></i>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuestionAnswer;