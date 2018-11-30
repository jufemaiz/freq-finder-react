import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import geodist from 'geodist';

import Layout from '../components/layout';
import ElevationProfile from '../components/ElevationProfile'

import transmitterListing from '../data/acma/transmitter_listing_20110702.json';

const mapStyles = {
  fullscreenControl: false,
};

class TransmitterPage extends Component {
  constructor(props) {
    super(props);

    const transmitter = props.data.transmitterListing20110702Json;

    this.state = {
      distance: 0.0,
      key: '',
      position: {
        coords: {
          latitude: transmitter.latitude,
          longitude: transmitter.longitude,
        },
      },
      transmitter,
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    const geolocation = navigator.geolocation;

    const location = new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error('Not Supported'));
      }

      geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, () => {
        reject(new Error('Permission denied'));
      });
    });

    location.then((position) => {
      const distance = geodist(
        { lat: position.coords.latitude, lng: position.coords.longitude },
        { lat: this.state.transmitter.latitude, lng: this.state.transmitter.longitude },
        { exact: true, unit: 'km' },
      );

      this.setState({
        distance: distance.toFixed(2),
        position,
      });
    });
  }

  render() {
    const distance = this.state.distance;
    const mapStyles = {};
    const position = {
      lat: this.state.position.coords.latitude,
      lng: this.state.position.coords.longitude,
    };

    const location1 = {
      latitude: this.state.position.coords.latitude,
      longitude: this.state.position.coords.longitude,
    };

    const location2 = {
      latitude: this.state.transmitter.latitude,
      longitude: this.state.transmitter.longitude,
    };

    const {
      antennaHeight,
      antennaPattern,
      areaServed,
      bSL,
      band,
      callsign,
      easting,
      frequency,
      hoursofOperation,
      id,
      latitude,
      licenceArea,
      licenceAreaID,
      licenceNumber,
      longitude,
      maximumCMF,
      maximumERP,
      northing,
      onAirID,
      polarisation,
      purpose,
      siteId,
      siteName,
      state,
      status,
      technicalSpecificationNumber,
      transmitterPower,
      zone,
    } = this.state.transmitter;

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                { callsign }
                {' '}
                { frequency }
                { band }
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">Site Details</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{ siteName }</li>
                  <li className="list-group-item">{ hoursofOperation }</li>
                  <li className="list-group-item">
                    { distance }
km away
                  </li>
                  <li className="list-group-item">
                    <a href={`http://maps.google.com.au/maps?q=${latitude},${longitude}`}>
                      { latitude }
,
                      {' '}
                      { longitude }
                    </a>
                  </li>
                  <li className="list-group-item">
                    <span className="badge badge-primary">{ purpose }</span>
                  </li>
                  <li className="list-group-item">{ areaServed }</li>
                  <li className="list-group-item">{ licenceArea }</li>
                  <li className="list-group-item">{ state }</li>
                  <li className="list-group-item">
License
                    { licenceNumber }
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">Transmitter Details</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    { antennaHeight }
m high
                  </li>
                  <li className="list-group-item">{ antennaPattern }</li>
                  <li className="list-group-item">{ transmitterPower }</li>
                  <li className="list-group-item">{ maximumCMF }</li>
                  <li className="list-group-item">{ maximumERP }</li>
                  <li className="list-group-item">{ polarisation }</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card" style={{ height: `${200}px` }}>
                <ElevationProfile location1={location1} location2={location2} />
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ height: `${200}px` }}>
                <Map
                  google={this.props.google}
                  zoom={10}
                  style={mapStyles}
                  initialCenter={{
                    lat: latitude,
                    lng: longitude,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAuUwqWGIlroxZGbQqWxccO4Nll24udLTg',
})(TransmitterPage);

// export default TransmitterPage
export const query = graphql`
  query TransmitterDetails($transmitterID: String!) {
    transmitterListing20110702Json(id: { eq: $transmitterID }) {
      antennaHeight
      antennaPattern
      areaServed
      bSL
      band
      callsign
      easting
      frequency
      hoursofOperation
      id
      latitude
      licenceArea
      licenceAreaID
      licenceNumber
      longitude
      maximumCMF
      maximumERP
      northing
      onAirID
      polarisation
      purpose
      siteId
      siteName
      state
      status
      technicalSpecificationNumber
      transmitterPower
      zone
    }
  }
`;
