import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
// import ItemBox from "./itemBox";
import ImageThumb from "./itemBox";
class ThumbContainer extends Component {

    constructor() {
        super()

        this.state = {
            inven: []
        }

    }

    componentDidMount() {


        axios.get('/inventory.json').then(response => {
            console.log(response)
            this.setState({
                inven: response.data["0"]
            })

        })

    }

    render() {

        let thumbs = []
              console.log(this.state.inven)
        let i=0
        for (let key in this.state.inven){

            thumbs.push(<ImageThumb entry={this.state.inven[key]} key={i}/>)
            i++

        }



/*        const thumbs = this.state.inven.map((item, index) => {
      //      console.log(this.state.inven["0"])
            console.log(item)



        })*/
        return (
            <div className={'row'}>{thumbs} </div>

        )
    }
}

export default ThumbContainer