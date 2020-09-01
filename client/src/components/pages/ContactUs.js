import React, { Component } from "react";
import "../../utilities.css";
import "./ContactUs.css";

import NavBar from "../modules/NavBar.js";

/**
 * Contact page.
 *
 */
class ContactUs extends Component {
    constructor(props) {
      super(props);
      this.state = {name: '', email: '', inquiry: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
      fetch('https://us-central1-the-artcubator.cloudfunctions.net/email', {
        mode: 'cors',
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          message: `${this.state.name} (${this.state.email}) says: \n\n ${this.state.inquiry}`
        })
      }).then(data => {
        data.json().then(jsondata => {
          if (!jsondata.meow) {
            alert('Something went wrong. Try again or email theartcubator@gmail.com. ')
          } else {
            alert('Thank you! A member of our team will get back to you soon. ')
          }
        })
      })
    }
  
    render() {
      return (
        <div>
            <NavBar/>
            <div className="contactus-page-container">
                <div className="contact-form">
                    <h1>purchase inquiries</h1>
                    <span>customer name</span>
                    <div>
                        <input onChange={this.handleChange} type="text" id="name" name="name" placeholder="Your name..."></input>
                    </div>
                    <br/>
                    <span>email</span>
                    <div>
                        <input onChange={this.handleChange} type="text" id="email" name="email" placeholder="Your email..."></input>
                    </div>
                    <br/>
                    <span>inquiry</span>
                    <div>
                        <textarea onChange={this.handleChange} type="text" id="inquiry" name="inquiry" placeholder="Your inquiry..."></textarea>
                    </div>
                    <button onClick={this.handleSubmit}> submit </button>
                </div>

            </div>
        </div>
      );
    }
  }
  
  export default ContactUs;  