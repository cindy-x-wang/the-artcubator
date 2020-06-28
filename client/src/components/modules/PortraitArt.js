import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./PortraitArt.css";

/**
 * Renders a single container containing one piece of portrait art.
 *
 */
class PortraitArt extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div className="portrait-container">
            <div>
                art
            </div>
        </div>
      );
    }
  }
  
  export default PortraitArt;  