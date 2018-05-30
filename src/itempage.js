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


        const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        let firstDate = new Date(this.refs.from.value);
        let secondDate = new Date(this.refs.to.value);

        console.log(firstDate);

        if (firstDate == 'Invalid Date' || secondDate == 'Invalid Date') {
            alert('please input a valid date')
            return
        }
        const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

        firstDate = firstDate.toLocaleDateString();
        secondDate = secondDate.toLocaleDateString();



        const total = this.state.product.price * diffDays;
        const entry = {
            'name': this.state.product.name,
            'from': firstDate,
            'to': secondDate,
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

            alert('added to cart')
            console.log(this.props)
            this.props.history.push('/')

    }


    render() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

        today = yyyy+'-'+mm+'-'+dd;
        return (<div className={'row'}>

                <div className={'col-md-6'}>

                    <img src={this.state.product.loc} alt={'notfound'} width={'300px'}/>
                    <ul className="item name">
                        <li className="list-group-item">{this.state.product.name}</li>
                        <li className="list-group-item">{this.state.product.price}</li>
                        <li className="list-group-item">{this.state.product.details}</li>
                        <br/>
                        <form>
                            <div className={'form-row'}>

                                <div className={'form-group col-md-5'}>
                                    <label htmlFor="from">From: </label>
                                    <input type={'date'} min={today} id={'from'} ref={'from'}/>

                                </div>
                                <div className={'form-group col-md-5'}>
                                    <label htmlFor="to">To: </label>
                                    <input type={'date'} min={today} id={'to'} ref={'to'}/>


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