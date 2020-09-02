import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import HomePage from "./pages/HomePage.js";
import ArtistPage from "./pages/ArtistPage.js";
import AllArtPage from "./pages/AllArtPage.js";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import IndividualArt from "./pages/IndividualArt.js";


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

// Art imports
import hooklinesinker from "./pages/art/hook.png";
import banuga from "./pages/art/banuga.png";
import affinityfordreamingHQ from "./pages/art/affinityfordreamingHQ.png";
import baozijiaozi from "./pages/art/baozijiaozi.jpg";
import bigblue from "./pages/art/bigblue.jpg";
import blackhole from "./pages/art/blackhole.jpg";
import boxers from "./pages/art/boxers.png";
import catscradleHQ from "./pages/art/catscradleHQ.png";
import eden from "./pages/art/eden.png";
import falling from "./pages/art/falling.jpg";
import fishoutofwater from "./pages/art/fishoutofwater.jpg";
import fullboxer from "./pages/art/fullboxer.png";
import goldfishbowl from "./pages/art/goldfishbowl.jpg";
import hook from "./pages/art/hook.png";
import inferno from "./pages/art/inferno.jpg";
import inthejunglecp from "./pages/art/inthejunglecp.jpeg";
import inthejungledigital from "./pages/art/inthejungledigital.jpg";
import inthejungleinkpen from "./pages/art/inthejungleinkpen.jpg";
import line from "./pages/art/line.png";
import mypieta from "./pages/art/mypieta.jpg";
import passageoftime from "./pages/art/passageoftime.png";
import pinkHQ from "./pages/art/pinkHQ.png";
import pleaseremaincalm from "./pages/art/pleaseremaincalm.png";
import portraitstudy from "./pages/art/portraitstudy.jpg";
import reaching from "./pages/art/reaching.png";
import rgb from "./pages/art/rgb.jpg";
import salmonran from "./pages/art/salmonran.jpg";
import salmonrun from "./pages/art/salmonrun.jpeg";
import sinker from "./pages/art/sinker.png";
import idreamtwespokeagain from "./pages/art/snake.jpg";
import stitchedboxers from "./pages/art/stitchedboxers.jpeg";
import sunroom from "./pages/art/sunroom.jpg";
import tangled from "./pages/art/tangled.jpg";
import thegoodolddays from "./pages/art/thegoodolddays.jpg";
import traversingtime from "./pages/art/traversingtime.jpg";
import wherethewildthingsare from "./pages/art/wherethewildthingsare.jpg";

import {allArt, allArtists} from "./pages/art/allArt";

// Artist headshot imports
import AshleyCai from "./pages/artist_headshots/ashleycaiheadshot.jpg";
import ConnieGong from "./pages/artist_headshots/conniegongheadshot.jpg";
import LizaEvseeva from "./pages/artist_headshots/lizaevseevaheadshot.jpeg";
import RickZhang from "./pages/artist_headshots/RickZhangheadshot.jpeg";
import TaoLiu from "./pages/artist_headshots/taoliuheadshot.jpg";
import AngelaWei from "./pages/artist_headshots/angelaweiheadshot.jpg";

const Empty = ({ children }) => {
  return children;
}

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      allArt,
      allArtists,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  /**
   * return an image
   */
  displayArt = (imageName) => {
    switch(imageName) {
      case 'hooklinesinker':
        return hooklinesinker;
      case 'banuga':
        return banuga;
      case 'pleaseremaincalm':
        return pleaseremaincalm;
      case 'wherethewildthingsare':
        return wherethewildthingsare;
      case 'inferno':
        return inferno;
      case 'inthejungledigital':
        return inthejungledigital;
      case 'pleaseremaincalm':
        return pleaseremaincalm;
      case 'inthejungleinkpen':
        return inthejungleinkpen;
      case 'inthejunglecp':
        return inthejunglecp;
      case 'fishoutofwater':
        return fishoutofwater;
      case 'eden':
        return eden;
      case 'passageoftime':
        return passageoftime;
      case 'idreamtwespokeagain':
        return idreamtwespokeagain;
      case 'inferno':
        return inferno;
      case 'affinityfordreamingHQ':
        return affinityfordreamingHQ;
      case 'pinkHQ':
        return pinkHQ;
      case 'boxers':
        return stitchedboxers;
      case 'baozijiaozi':
        return baozijiaozi;
      case 'thegoodolddays':
        return thegoodolddays;
      case 'falling':
        return falling;
      case 'traversingtime':
        return traversingtime;
      case 'tangled':
        return tangled;
      case 'portraitstudy':
        return portraitstudy;
      case 'blackhole':
        return blackhole;
      case 'goldfishbowl':
        return goldfishbowl;
      case 'sunroom':
        return sunroom;
      case 'reaching':
        return reaching;
      case 'rgb':
        return rgb;
      case 'bigblue':
        return bigblue;
      case 'salmonrun':
        return salmonrun;
      case 'salmonran':
        return salmonran;
      default:
        return
    }
    /* if (imageName == 'banuga') {
      return banuga;
    }
    else if (imageName == 'salmonrun') {
      return phase1;
    }
    else if (imageName == 'phase2') {
      return phase2;
    }
    else if (imageName == 'shift') {
      return Shift;
    }
    else if (imageName == 'deconstructed') {
      return deconstructed;
    }
    else if (imageName == 'eden') {
      return eden;
    }
    else if (imageName == 'calm') {
      return calm;
    } */
  }

  displayArtist = (artistLink) => {
    if (artistLink == 'ashleycai') {
      return AshleyCai;
    }
    if (artistLink == 'conniegong') {
      return ConnieGong;
    }
    if (artistLink == 'lizaevseeva') {
      return LizaEvseeva;
    }
    if (artistLink == 'taoliu') {
      return TaoLiu;
    }
    if (artistLink == 'rickzhang') {
      return RickZhang;
    }
    if (artistLink == 'angelawei') {
      return AngelaWei;
    }
  }

  getArtistArt = artist => {
    const thisArtistArt = this.state.allArt.filter(art => art.artistName == artist);
    return thisArtistArt;
  };

  render() {
    return (
      <>
        <Router>
          <HomePage
            path="/"
            displayArt={this.displayArt}
            allArt={this.state.allArt}
            allArtists={this.state.allArtists}
            getArtistArt={this.getArtistArt}
          />
          <AllArtPage
            path="/artwork"
          />
          <ContactUs
            path="/contactus"
          />
          <AboutUs
            path="/aboutus"
          />
          <ArtistPage
            path=":artistLink"
            allArt={this.state.allArt}
            allArtists={this.state.allArtists}
            getArtistArt={this.getArtistArt}
            displayArt={this.displayArt}
            displayArtist={this.displayArtist}
          >
            <IndividualArt
              path=":imageLink"
              allArt={this.state.allArt}
              allArtists={this.state.allArtists}
              getArtistArt={this.getArtistArt}
              displayArt={this.displayArt}
            />
          </ArtistPage>
          <Skeleton
            path="/Skeleton"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
