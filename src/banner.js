import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Banner extends Component{
 render(){
 	return(
 		<div id="myCarousel" className="carousel slide row" data-ride="carousel">



  <div className="carousel-inner">
    <div className="item active">
        <div>
        <Link to={'/product/1001'}>
        <img className="bannerImages" src="/assets/images/carpetcleaning.jpg" alt="carpet cleaner" />
        <div className="carousel-caption">
          <h3>Carpet Cleaner Rental</h3>
          <p>for home cleaning</p>
        </div></Link>
        </div>
    </div>

    <div className="item">
        <Link to={'/product/1002'}>
            <div>
        <img className="bannerImages" src="/assets/images/steamer.jpg" alt="garden tiller" />

        <div className="carousel-caption">
          <h3>Floor Polisher</h3>
          <p>shining floors</p>
        </div>
    </div></Link>
    </div>

    <div className="item">
        <Link to={'/product/1003'}>
            <div>
      <img className="bannerImages" src="/assets/images/sawthing.jpg" alt="cultivators" />

        <div className="carousel-caption">
          <h3>Electric Reciprocating Saw</h3>
          <p>portable saws</p>
        </div>
    </div>
  </Link>
    </div>
  </div>


  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
 	)
 }
}

export default Banner;

