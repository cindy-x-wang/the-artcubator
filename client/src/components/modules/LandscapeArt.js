import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./LandscapeArt.css";

/**
 * Renders a single container containing one piece of portrait art.
 *
 */
class LandscapeArt extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div className="landscape-container">
            <Link to="../" className="landscape-artist-name">
                {this.props.art.artistName.toLowerCase()}
            </Link>
            <div className="landscape-image-container">
                <img src={this.props.displayArt(this.props.art.artImage)} width="100%" />
            </div>
            <div className="landscape-description-container">
                {this.props.art.artName}
            </div>
            <div className="landscape-description-container">
                {this.props.art.artMedium}
            </div>
            <div className="landscape-description-container">
                {this.props.art.artDescription}
            </div>
        </div>
      );
    }
  }
  
  export default LandscapeArt;  