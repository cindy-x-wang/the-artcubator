import React, { Component } from "react";
import "../../utilities.css";
import "./ArtistPage.css";

import NavBar from "../modules/NavBar.js";
import ExploreMore from "../modules/ExploreMore.js";

/**
 * Renders a single image containing art.
 *
 */
class ArtistPage extends Component {
    constructor(props) {
      super(props);
    }

    findArtistPage = () => {
        const thisArtist = this.props.allArtists.find(
            artist => artist.link == this.props.artistLink
        );
        console.log(thisArtist);
        return thisArtist;
      };
  
    render() {
      return (
        <div>
          <NavBar/>
          <div className="artist-page-container">
            <div className="artist-page-intro">
            <div className="portrait-image-container">
                image here
            </div>
            <div className="portrait-text-container">
              <div className="artistpage-artist-name">
                {this.findArtistPage().fName.toLowerCase().concat(" ", this.findArtistPage().lName.toLowerCase())}
              </div>
              <div className="artist-description-container">
                {this.findArtistPage().artistDescription}
              </div>
            </div>
            </div>
            <div className="explore-container">
              <ExploreMore artist={this.findArtistPage()} allArt={this.props.allArt} displayArt={this.props.displayArt} getArtistArt={this.props.getArtistArt}/>
            </div>
          </div>
          
          
          <div>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
  
  export default ArtistPage;  