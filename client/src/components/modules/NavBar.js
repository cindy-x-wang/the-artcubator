import React, { Component } from "react";
import { Link } from "@reach/router";
import "../../utilities.css";
import "./NavBar.css";


/**
 * Renders homepage of artcubator.
 *
 */
class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <div className="NavBar-container">
            <Link to="/contactus" className="NavBar-button">
                contact us
            </Link>

            <Link to="/" className="NavBar-header u-textCenter">
                the ARtcubator
            </Link>

            <Link to="/aboutus" className="NavBar-button">
                about us
            </Link>
        </div>
      );
    }
  }
  
  export default NavBar;  