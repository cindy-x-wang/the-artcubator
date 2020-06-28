import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./ArtistRow.css";
import HomepageImage from "./HomepageImage.js";

import Shift from "../pages/ray_art/shift.jpg"
import Deconstructed from "../pages/ray_art/deconstructed.jpg"


/**
 * Renders a single row containing art from one artist.
 *
 */
class ArtistRow extends Component {
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
                  <HomepageImage art={a.artImage} displayArt={this.props.displayArt}/>
                   ))
              }
            </div>
        </div>
      );
    }
  }
  
  export default ArtistRow;  