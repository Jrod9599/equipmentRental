import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Rent extends Component{
  
  constructor(){
  	super();
  	this.state = {
        usStates: <select id={'state'}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>
    }

  }

  render(){
    return(
      <div>
        <h1>Rent Item</h1>
        <form className="rent">
            <div className="rentform container">
              <div className="col-lg-6"> 
                <h3>Billing Information</h3>
                <div>
                  <label htmlFor="fullname">Full Name: </label>
                  <input type="text" className="form-control" id="fullname" required/>
                </div>
                <div>
                  <label htmlFor="email"> Email  </label>
                  <input type="text" id="email" className="form-control" name="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="adr">Address </label>
                  <input type="text" id="adr" className="form-control" name="address" placeholder="542 W. 15th Street" />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" className="form-control" name="city" placeholder="New York" />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                    {this.state.usStates}
                </div>
                <div>
                  <label htmlFor="zip">Zip</label>
                  <input type="text" id="zip" className="form-control" name="zip" placeholder="10001" />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Payment</h3>
                <label htmlFor="cname">Name on Card</label>
                <input type="text" id="cname" className="form-control" name="cardname" placeholder="John More Doe"/>
                <label htmlFor="ccnum">Credit card number</label>
                <input type="text" id="ccnum" className="form-control" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                <label htmlFor="expmonth">Exp Month</label>
                <input type="text" id="expmonth" className="form-control" name="expmonth" placeholder="September"/>
                  <div>
                    <label htmlFor="expyear">Exp Year</label>
                    <input type="text" id="expyear" className="form-control" name="expyear" placeholder="2018"/>
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" className="form-control" name="cvv" placeholder="352"/>
                  </div>
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Rent;