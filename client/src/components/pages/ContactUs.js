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
                        <input type="text" id="name" name="name" placeholder="Your name..."></input>
                    </div>
                    <br/>
                    <span>email</span>
                    <div>
                        <input type="text" id="email" name="email" placeholder="Your email..."></input>
                    </div>
                    <br/>
                    <span>inquiry</span>
                    <div>
                        <textarea type="text" id="inquiry" name="inquiry" placeholder="Your inquiry..."></textarea>
                    </div>
                    <button> submit </button>
                </div>

            </div>
        </div>
      );
    }
  }
  
  export default ContactUs;  