import React, { Component } from "react";
import "../../utilities.css";
import "./AboutUs.css";

import NavBar from "../modules/NavBar.js";

/**
 * Renders a single page to talk about ourselves, because we are vain.
 *
 */
class AboutUs extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <NavBar/>
            <div>
                who are we
            </div>
        </div>
      );
    }
  }
  
  export default AboutUs;  