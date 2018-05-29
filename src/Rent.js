import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Rent extends Component{
  
  constructor(){
  	super();
  }

  render(){
    return(
      <div className="container crent rentForm">
        <form className="rent">
          <h1>Rent Item</h1>
            <div> 
              <div className="col-lg-6"> 
                <h3>Billing Information</h3>
                <div>
                  <label for="fullname">Full Name: </label>
                  <input type="text" className="form-control" id="fullname" required/>
                </div>
                <div>
                  <label for="email"> Email  </label>
                  <input type="text" id="email" name="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label for="adr">Address </label>
                  <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                </div>
                <div>
                  <label for="city">City</label>
                  <input type="text" id="city" name="city" placeholder="New York" />
                </div>
                <div>
                  <label for="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" />
                </div>
                <div>
                  <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001" />
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Payment</h3>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                  <div>
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                  </div>
                  <div>
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352"/>
                  </div>
              </div>
            </div>
        </form>
      </div>
    ) 
  }
}

export default Rent;