import React, { Component } from "react";
import "../../utilities.css";
import "./HomepageImage.css";


/**
 * Renders a single image containing art.
 *
 */
class HomepageImage extends Component {
    constructor(props) {
      super(props);
    }

    getArtistArt = artist => {
      const thisArtistArt = this.props.allArt.filter(art => art.artistName == artist);
      console.log(thisArtistArt);
      return thisArtistArt;
    };
  
    render() {
      console.log(this.props.allArt);
      console.log("hi");

      return (
        <div className="homepage-picture-container">
            <img src={this.props.displayArt(this.props.art)} height="100%"/>
        </div>
      );
    }
  }
  
  export default HomepageImage;  