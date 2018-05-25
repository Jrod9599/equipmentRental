//className="thumbnail"
import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios/index";


class ItemPage extends Component {
    constructor(props) {
        super(props)
        this.state= {
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




        return (<div>
            <img src={this.state.product.loc} alt={'notfound'}/>
                <h1>a series of other details</h1>

            </div>
        )
    }
}
export default ItemPage