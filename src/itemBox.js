import React , {Component} from 'react';
import {Link} from 'react-router-dom'


class ItemBox extends Component{
    constructor(props){
        super(props)


    }
    render(){
        console.log(this.props.entry)
        return(
            <div className="col-xs-11 col-md-6 col-lg-4 panel panel-info">
                <Link to={`product/${this.props.id}`} >
                    <img src={this.props.entry.thumb} alt={'image not found'}/>
                </Link>
                <h3>price:   {this.props.entry.price}</h3>
                <h3>info: some item info stuff</h3>
            </div>


        )
    }

}

export default ItemBox;
