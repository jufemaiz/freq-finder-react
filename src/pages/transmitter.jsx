import React, { Component } from "react"
import { Link } from "gatsby"
import { Map, GoogleApiWrapper } from 'google-maps-react';
import geodist from "geodist"

import Layout from "../components/layout"

import transmitterListing from "../data/acma/transmitter_listing_20110702.json"

class TransmitterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transmitter: "",
      key: "",
    };
  }

  render() {
    return(
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAuUwqWGIlroxZGbQqWxccO4Nll24udLTg'
})(TransmitterPage);

// export default TransmitterPage
