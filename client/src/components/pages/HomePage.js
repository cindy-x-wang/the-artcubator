import React, { Component } from "react";
import { Link } from "@reach/router";
import "../../utilities.css";
import "./HomePage.css";

import ArtistRow from "../modules/ArtistRow.js";

/**
 * Renders homepage of artcubator.
 *
 */
class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <div className="homepage-container">
            <div className="homepage-header u-textCenter">
            the ARtcubator
            </div>
            <div className="homepage-navbar">
                <div className="homepage-navbar-button">
                    artwork
                </div>

                <div className="homepage-navbar-button">
                    about us
                </div>
            </div>
            <div className="mission-container u-textCenter">
                mission statement here
            </div>
            <div className="homepage-art-container">
                {this.props.allArtists.map((a) => (
                    <div>
                        <ArtistRow artist={a} allArt={this.props.allArt} displayArt={this.props.displayArt} getArtistArt={this.props.getArtistArt}/>
                    </div>
                ))
                }
            </div>
        </div>
      );
    }
  }
  
  export default HomePage;  