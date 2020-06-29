import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import HomePage from "./pages/HomePage.js";
import ArtistPage from "./pages/ArtistPage.js";
import AllArtPage from "./pages/AllArtPage.js";
import AboutUs from "./pages/AboutUs.js";
import IndividualArt from "./pages/IndividualArt.js";


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

// Art imports
import banuga from "./pages/art/Banuga.png";
import phase1 from "./pages/art/phase1.jpeg";
import phase2 from "./pages/art/phase2.jpg";
import Shift from "./pages/ray_art/shift.jpg";
import deconstructed from "./pages/ray_art/deconstructed.jpg";
import eden from "./pages/art/Eden.jpg";
import {allArt, allArtists} from "./pages/art/allArt";

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
    if (imageName == 'banuga') {
      return banuga;
    }
    else if (imageName == 'phase1') {
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
          <AboutUs
            path="/aboutus"
          />
          <ArtistPage
            path=":artistLink"
            allArt={this.state.allArt}
            allArtists={this.state.allArtists}
            getArtistArt={this.getArtistArt}
            displayArt={this.displayArt}
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
