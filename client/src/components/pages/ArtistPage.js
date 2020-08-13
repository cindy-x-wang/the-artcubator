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
      this.state = {
        exploreShown: true,
      };
    }

    findArtistPage = () => {
        const thisArtist = this.props.allArtists.find(
            artist => artist.link == this.props.artistLink
        );
        console.log(thisArtist);
        return thisArtist;
      };

    showExplore = () => {
      this.setState({
        exploreShown: true,
      })
    };

    hideExplore = () => {
      this.setState({
        exploreShown: false,
      })
    };
  
    render() {
      return (
        <div>
          <NavBar/>
          <div className="artist-page-container">
            <div className="artist-page-intro">
            <div className="portrait-image-container">
              <img src={this.props.displayArtist(this.props.artistLink)} height="100%"/>
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
            {this.state.exploreShown ? (
              <div className="explore-container">
                <ExploreMore artist={this.findArtistPage()} allArt={this.props.allArt} displayArt={this.props.displayArt} getArtistArt={this.props.getArtistArt}/>
              </div>
            ) : (
              <div/>
            )}
          </div>
          
          
          <div>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
  
  export default ArtistPage;  