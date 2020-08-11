import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./ExploreMore.css";
import HomepageImage from "./HomepageImage.js";


/**
 * Renders a single row containing art from one artist.
 *
 */
class ExploreMore extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div className="explore-grid-container">
            <div className="top-border">              
                <div className="explore-more-header">
                  explore more
                </div>
            </div>
            <div className="art-row">
              {this.props.getArtistArt(this.props.artist.fName.concat(" ", this.props.artist.lName)).map((a,index) => (
                <Link to={`${a.link}`}>
                  <HomepageImage art={a.artImage} displayArt={this.props.displayArt} key={index} ind={index}/>
                </Link>
                   ))
              }
            </div>
        </div>
      );
    }
  }
  
  export default ExploreMore;  