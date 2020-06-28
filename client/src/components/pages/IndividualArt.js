import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./IndividualArt.css";

import NavBar from "../modules/NavBar.js";


/**
 * Renders a single page for one piece of art.
 *
 */
class IndividualArt extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div>
            <NavBar/>
            <div>
                ew art
            </div>
        </div>
      );
    }
  }
  
  export default IndividualArt;  