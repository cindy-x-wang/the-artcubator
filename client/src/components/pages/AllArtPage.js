import React, { Component } from "react";
import "../../utilities.css";
import "./AllArtPage.css";

import NavBar from "../modules/NavBar.js";

/**
 * Renders a single page to showcase all artists art.
 *
 */
class AllArtPage extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <NavBar/>
            <div>
                all the art is here
            </div>
        </div>
      );
    }
  }
  
  export default AllArtPage;  