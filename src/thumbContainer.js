import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import ItemBox from "./itemBox";

// import ImageThumb from "./itemBox";
class ThumbContainer extends Component {

    constructor() {
        super()

        this.state = {
            inventory: []
        }

    }

    componentDidMount() {


        axios.get('/inventory.json').then(response => {
            //  console.log(response)
            this.setState({
                inventory: response.data.inventory
            })

        })

    }

    render() {

        let thumbs = []
        //    console.log(this.state.inventory)
        let i = 0
        for (let key in this.state.inventory) {

            thumbs.push(<div className={'col-sm-3'}><ItemBox id={key} entry={this.state.inventory[key]} key={i}/></div>)
            i++

        }


        /*        const thumbs = this.state.inventory.map((item, index) => {
              //      console.log(this.state.inventory["0"])
                    console.log(item)



                })*/
        return (
            <div className={'row'}>

                    {thumbs}

            </div>

        )
    }
}

export default ThumbContainer