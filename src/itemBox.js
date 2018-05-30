import React , {Component} from 'react';
import {Link} from 'react-router-dom';
//import "./itemBox.css";

class ItemBox extends Component{
    constructor(props){
        super(props)


    }
    render(){
        console.log(this.props.entry)
        return(

            <div className=" panel panel-info">
                <Link to={`product/${this.props.id}`} >
                    <img className={'item-box'} src={this.props.entry.thumb} alt={'image not found'}/>
                </Link>
                <h3>price:   ${this.props.entry.price}<span className={'per-day'}>/day</span></h3>
                <h3>info:  information about the product</h3>
            </div>


        )
    }

}

export default ItemBox;
