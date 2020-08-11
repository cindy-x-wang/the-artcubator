import React, { Component } from "react";
import "../../utilities.css";
import "./AboutUs.css";

import NavBar from "../modules/NavBar.js";

/**
 * Renders a single page to talk about ourselves, because we are vain.
 *
 */
class AboutUs extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <NavBar/>
            <div className="aboutus-page-container">
              <div className="mission-container">
                We provide young artists with an incubator-like platform to connect with each other, sell their artwork, and grow their brands. We focus on personalized fine art by growing artists and seek to provide consumers with high-quality work while also supporting our creators in doing what they love. 
              </div>
              <div className="founders-grid">
                <div className="idiot-container">
                  <div className="idiot-image-container-cindy"/>
                  <div className="idiot-description">
                  Raymond Banke is an artist and photographer from California’s Silicon Valley currently studying at Columbia University in the City of New York. Passionate about aquatic biology and design, Raymond creates living, functioning aquarium installations that reflect not only pressing ecological issues but also the modern social problems constituting political environments. Additionally, he is an Illustrations Editor at Spec and a 2019 YoungArts Winner in Design Arts. Raymond loves frogs, cars, and aquariums. When not in the studio, he can be found searching for The ARTcubator’s next young artists or blowing his money at Philz. Find him on Instagram @raymondbanke.
                  </div>
                </div>
                <div className="idiot-container">
                  <div className="idiot-image-container-cindy"/>
                  <div className="idiot-description">
                    cindy is meme hallo
                  </div>
                </div>
                <div className="idiot-container">
                  <div className="idiot-image-container-cindy"/>
                  <div className="idiot-description">
                    Leon Lu is a sophomore majoring in Math-Stats and concentrating in econ at Columbia University in the City of New York. He is interested in exploring the various applications of statistical techniques to real-world scenarios, and he hopes his friends will someday stop roasting him for saying “statistically speaking”. In addition, Leon is an avid musician, playing piano for Columbia Pops and transcribing music for a variety of occasions. He’s always up for a conversation about the Golden State Warriors or the many reasons why In-N-Out is better than Shake Shack. Contact him at leon.lu@columbia.edu!
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default AboutUs;  