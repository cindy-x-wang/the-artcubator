import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./IndividualArt.css";

import NavBar from "../modules/NavBar.js";


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
                <div>
                    ew art
                </div>
                <div>
                    {this.findArtPage().artName}
                    <br/>
                    {this.findArtPage().artistName}
                    <br/>
                    {this.findArtPage().artImage}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default IndividualArt;  