import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./IndividualArt.css";

import PortraitArt from "../modules/PortraitArt.js";
import LandscapeArt from "../modules/LandscapeArt.js";


/**
 * Renders a single page for one piece of art.
 *
 */
class IndividualArt extends Component {
    constructor(props) {
      super(props);
    }

    findArtPage = () => {
        const thisImage = this.props.allArt.find(
            art => art.link == this.props.imageLink
        );
        console.log(thisImage);
        return thisImage;
      };
  
    render() {

      return (
        <div>
            <div className="individual-art-page-container">
                <div className="individual-art-container">
                    {this.findArtPage().portrait ? (
                        <PortraitArt displayArt={this.props.displayArt} art={this.findArtPage()}/>
                    ) : (
                        <LandscapeArt displayArt={this.props.displayArt} art={this.findArtPage()}/>
                    )}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default IndividualArt;  