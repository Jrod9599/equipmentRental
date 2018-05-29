import React, {Component} from 'react'

class Banner extends Component{
 render(){
 	return(
 		<div id="myCarousel" className="carousel slide row" data-ride="carousel">

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
      <img className="bannerImages" src="http://img.directindustry.com/images_di/photo-g/121193-10234306.jpg" alt="garden tiller" />
        <div className="carousel-caption">
          <h3>Floor Polisher</h3>
          <p>shining floors</p>
        </div>
    </div>

    <div className="item">
      <img className="bannerImages" src="https://s5.sywcdn.net/getImage?url=http%3A%2F%2Fc.shld.net%2Frpx%2Fi%2Fs%2Fi%2Fspin%2Fimage%2Fspin_prod_241026301&t=Product&w=1500&h=1500&qlt=100&mrg=1&str=1&s=f04b3f85a6d2b79608985638d6a9be5c" alt="cultivators" />
        <div className="carousel-caption">
          <h3>Electric Reciprocating Saw</h3>
          <p>portable saws</p>
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

