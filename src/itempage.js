//className="thumbnail"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios/index";
import Location from "./GoogleMap";
import GoogleMap from './GoogleMap';


class ItemPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []

        }

    }


    componentDidMount() {
        const productid = this.props.match.params.productid;

        console.log(productid)

        axios.get('/inventory.json').then(response => {
            // console.log(response)
            this.setState({
                product: response.data.inventory[productid]
            })
            console.log(this.state.product)

        })

    }

    render() {


        return (<div className={'row'}>

                <div className={'col-md-6'}>

                    <img src={this.state.product.loc} alt={'notfound'} width={'600px'}/>
                    <ul className="item name">
                        <li className="list-group-item">this is the name</li>
                        <li className="list-group-item">this is the price</li>
                        <li className="list-group-item">this is some other info</li>
                        <button type="button" className="btn btn-primary navbar-btn">rent it!</button>
                    </ul>
                </div>
                <div className={'col-md-6'}>
                    <GoogleMap/>
                </div>

            </div>
        )
    }
}

export default ItemPage