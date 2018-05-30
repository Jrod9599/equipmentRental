import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import 'itemBox.css'

class ItemBox extends Component{
    constructor(props){
        super(props)


    }
    render(){
        console.log(this.props.entry)
        return(
            <div className="panel panel-info">
                <Link to={`product/${this.props.id}`} >
                    <img className={'thumbnail item-box'} width={'250px'} src={this.props.entry.thumb} alt={'image not found'}/>
                </Link>
                <h3>price:   {this.props.entry.price}</h3>
                <h3>info: some item info</h3>

            </div>


        )
    }

}

export default ItemBox;
