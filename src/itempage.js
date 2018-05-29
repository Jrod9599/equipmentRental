//className="thumbnail"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios/index";
import GoogleMap from './GoogleMap';


class ItemPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []

        }
        this.handleRentMe = this.handleRentMe.bind(this)

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

    handleRentMe() {
        console.log('sanity check')

        const total = this.state.product.price * 7;
        const entry = {
            'name': 'somename',
            'total': total,
            'icon': this.state.product.thumb
        }

        let tempcart = {}

        if (localStorage.getItem('myCart')) {
            tempcart = JSON.parse(localStorage.getItem('myCart'));


        }

        console.log(tempcart)

        tempcart[Math.random()] = entry

        localStorage.setItem('myCart', JSON.stringify(tempcart))
        console.log(JSON.parse(localStorage.getItem('myCart')))
    }


    render() {


        return (<div className={'row'}>

                <div className={'col-md-6'}>

                    <img src={this.state.product.loc} alt={'notfound'} width={'600px'}/>
                    <ul className="item name">
                        <li className="list-group-item">this is the name</li>
                        <li className="list-group-item">this is the price</li>
                        <li className="list-group-item">this is some other info</li>

                        <form>
                            <div className={'form-row'}>

                                <div className={'form-group col-md-5'}>
                                    <label htmlFor="from">From: </label>
                                    <input type={'date'} id={'from'}/>

                                </div>
                                <div className={'form-group col-md-5'}>
                                    <label htmlFor="to">To: </label>
                                    <input type={'date'} id={'to'}/>


                                </div>
                                <div className={'col-md-2'}>

                                    <button type="button" onClick={this.handleRentMe}
                                            className="btn btn-primary navbar-btn">rent me
                                    </button>

                                </div>

                            </div>

                        </form>


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