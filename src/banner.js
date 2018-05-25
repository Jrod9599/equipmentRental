import React, {Component} from 'react'

class Banner extends Component{
 render(){
 	return(
 		<div id="myCarousel" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner">
    <div className="item active">
      <img className="bannerImages" src="http://ebmglasgow.org/e/2018/01/ideas-home-depot-carpet-cleaner-rental-for-home-cleaning-ideas-with-lowes-weed-wacker-and-lowes-carpet-cleaner-rental-plus-walmart-carpet-cleaner-tremendous-home-depot-carpet.jpg" alt="carpet cleaner" />
      <div className="carousel-caption">
          <h3>Carpet Cleaner Rental</h3>
          <p>for home cleaning</p>
        </div>
    </div>

    <div className="item">
      <img className="bannerImages" src="https://www.worx.com/media/wysiwyg/worx-chainsaws.1485355743.jpg" alt="garden tiller" />
        <div className="carousel-caption">
          <h3>Garden Tiller Rental</h3>
          <p>shining garden</p>
        </div>
    </div>

    <div className="item">
      <img className="bannerImages" src="https://i.ytimg.com/vi/otaMj_L946g/maxresdefault.jpg" alt="cultivators" />
        <div className="carousel-caption">
          <h3>Cultivator</h3>
          <p>outdoor power garden tiller</p>
        </div>
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

