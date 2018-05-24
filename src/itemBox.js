import React , {Component} from 'react';
import {Link} from 'react-router-dom'

class ImageThumb extends Component{

    constructor(props){
        super(props)


    }
    render(){
console.log(this.props.entry)
        return(
                <div className="col-xs-6 col-md-3 panel panel-info">
                    <Link to="product-id" className="thumbnail">
                        <img src={this.props.entry.loc} alt={'image not found'}/>
                    </Link>
                    <h3>price:   {this.props.entry.price}</h3>
                    <h3>info: some item info</h3>

                </div>


        )
    }
}

class ItemBox extends Component{
    constructor(props){
        super(props)


    }

    render(){


        return (
            <div className="item-thing">
                <ImageThumb imageSource={'/assets/images/Futurama-Crew-Leela-Fry-and-Bender.jpg'}/>
            </div>
        )
    }

}

export default ImageThumb;
