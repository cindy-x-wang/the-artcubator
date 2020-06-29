import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./ArtistRow.css";
import HomepageImage from "./HomepageImage.js";


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
            <div className="top-border">              
                <div className="artist-row-name-container">
                  <Link to={this.props.artist.link} className="artist-name-link">
                    {this.props.artist.fName.concat(" ", this.props.artist.lName)}
                  </Link>
                </div>
            </div>
            <div className="art-row">
              {this.props.getArtistArt(this.props.artist.fName.concat(" ", this.props.artist.lName)).map((a,index) => (
                <Link to={`${this.props.artist.link}/${a.link}`}>
                  <HomepageImage art={a.artImage} displayArt={this.props.displayArt} key={index} ind={index}/>
                </Link>
                   ))
              }
            </div>
        </div>
      );
    }
  }
  
  export default ArtistRow;  