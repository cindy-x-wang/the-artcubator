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
        <div className="artist-row">
            <div className="artist-name-homepage">
                <div>
                <Link to={this.props.artist.link} className="artist-name-link">
                  {this.props.artist.fName}
                  <br/>
                  {this.props.artist.lName}
                </Link>
                </div>
            </div>
            <div className="art-row">
              {this.props.getArtistArt(this.props.artist.fName.concat(" ", this.props.artist.lName)).map((a) => (
                <Link to={`${this.props.artist.link}/${a.link}`}>
                  <HomepageImage art={a.artImage} displayArt={this.props.displayArt}/>
                </Link>
                   ))
              }
            </div>
        </div>
      );
    }
  }
  
  export default PortraitArt;  