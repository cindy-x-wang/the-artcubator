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
            <div className="portrait-image-container">
                <img src={this.props.displayArt(this.props.art.artImage)} height="100%" />
            </div>
            <div className="portrait-text-container">
              <Link to="../" className="portrait-artist-name">
                  {this.props.art.artistName.toLowerCase()}
              </Link>
              <div className="portrait-description-container">
                  {this.props.art.artName}
              </div>
              <div className="portrait-description-container">
                  {this.props.art.artMedium}
              </div>
              <div className="portrait-description-container">
                  {this.props.art.artDescription}
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default PortraitArt;  