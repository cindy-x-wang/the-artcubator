import React, { Component } from "react";
import "../../utilities.css";
import "./ArtistPage.css";

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
            {this.findArtistPage().fName}
        </div>
      );
    }
  }
  
  export default ArtistPage;  