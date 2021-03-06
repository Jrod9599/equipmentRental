import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Cart extends Component {

    constructor() {
        super();
        this.state = {
            total: 0,
            names: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

/*    componentDidMount() {

        const tempcart = JSON.parse(localStorage.getItem('myCart'));

        var cartTotal = 0;
        for (let key in tempcart) {
            // console.log(tempcart[key])
            cartTotal += tempcart[key].total;
        }

        this.setState({
            total: cartTotal
        })
    }*/

    handleSubmit(event) {
        event.preventDefault();

        if (!localStorage.getItem('logged')) {
            alert('You must be logged in to checkout')
            return
        }

        this.props.history.push("/checkout");
    }

    handleRemove(event) {
         console.log(event.target.getAttribute('keynum'))
        const deleteKey = event.target.getAttribute('keynum')

        const tempcart = JSON.parse(localStorage.getItem('myCart'));

        delete tempcart[deleteKey]
        localStorage.setItem('myCart', JSON.stringify(tempcart))
        this.props.history.push("/cart");

    }

    render() {

        let total =0
        const tempcart = JSON.parse(localStorage.getItem('myCart'));

        // let keys = [];
        // for(let key in tempcart){
        // 	keys.push(<h1>{tempcart[key].total}</h1>);
        // }

        let keys = [];
        for (let key in tempcart) {
            keys.push(key);
        }

        const items = keys.map((x) => {
            total+= tempcart[x].total
            return (

                <div className="item col-md-4">
                    <div className="picture">
                        <img width="200px" src={tempcart[x].icon}/>
                    </div>
                    <div className="itemInfo">
                        Item: {tempcart[x].name}
                        <br/>
                        Price: {tempcart[x].total}
                        <br/>
                        From: {tempcart[x].from}
                        <br/>
                        To: {tempcart[x].to}
                    </div>
                    <div>
                        <button keynum={x} onClick={this.handleRemove}>remove item</button>
                    </div>

                </div>

            )
        })

        //	console.log(items)
        return (
            <div>
                <h2>Items</h2>
                <div>
                    {items}
                </div>
                <div className="col-md-12">
                    <hr/>
                    <h2>Total: {total}</h2>
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">CheckOut</button>
                </div>
            </div>
        )
    }
}

export default Cart;

