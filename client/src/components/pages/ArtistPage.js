import React, { Component } from "react";
import "../../utilities.css";
import "./ArtistPage.css";

import NavBar from "../modules/NavBar.js";

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
            {this.findArtistPage().fName} 's crap
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
  
  export default ArtistPage;  