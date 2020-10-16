import React from 'react';
import portfolio1 from '../../../images/carousel1.png'
import portfolio2 from '../../../images/carousel2.png'
import portfolio3 from '../../../images/carousel3.png'
import portfolio4 from '../../../images/carousel4.png'
import portfolio5 from '../../../images/carousel5.png'

const Portfolio = () => {
  return (
    <section className='portfolio-bg p-5'>
      <h3 className="text-white text-center"> Here are some of <span className="txt-color">our works</span>  </h3>
      <div className="container">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row">
                <div className="col-md-4 p-4"><img src={portfolio1} class="d-block w-100 img-fluid  " alt="..." /></div>
                <div className="col-md-4 p-4"><img src={portfolio2} class="d-block w-100 img-fluid  " alt="..." /></div>
                <div className="col-md-4 p-4"><img src={portfolio3} class="d-block w-100 img-fluid  " alt="..." /></div>
              </div>
            </div>
            <div class="carousel-item ">
              <div className="row">
                <div className="col-md-4 p-4"><img src={portfolio4} class="d-block w-100 img-fluid  " alt="..." /></div>
                <div className="col-md-4 p-4"><img src={portfolio5} class="d-block w-100 img-fluid  " alt="..." /></div>
                <div className="col-md-4 p-4"><img src={portfolio1} class="d-block w-100 img-fluid  " alt="..." /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;