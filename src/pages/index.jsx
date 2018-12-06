import React, { Component } from 'react';

import geodist from 'geodist';

import Layout from '../components/Layout';
import SearchForm from '../components/Search/SearchForm';
import SearchResult from '../components/Search/SearchResult';

import transmitterListing from '../data/acma/transmitter_listing_20110702.json';

class IndexPage extends Component {
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);

    this.handleQueryChange = this.handleQueryChange.bind(this);

    this.state = {
      query: '',
      position: null,
      results: [],
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getInfo = () => {
    const { position } = this.state;
    const { coords } = position;
    const { latitude, longitude } = coords;
    const latLng = {
      lat: latitude,
      lng: longitude,
    };
    const { query } = this.state;

    let transmitterListingSorted = transmitterListing.map((transmitter) => {
      const transmitterWithDistance = transmitter;
      transmitterWithDistance.distance = geodist(
        latLng,
        { lat: transmitter.latitude, lng: transmitter.longitude },
        { exact: true, unit: 'km' },
      );
      return transmitterWithDistance;
    });
    transmitterListingSorted = transmitterListingSorted.sort((a, b) => a.distance - b.distance);

    if (query.length > 1) {
      transmitterListingSorted = transmitterListingSorted.filter((transmitter) => {
        const { callsign } = transmitter;
        if (callsign === null) {
          return false;
        }
        return callsign.match(new RegExp(query, 'i')) !== null;
      });
    }

    this.setState({ results: transmitterListingSorted.slice(0, 100) });
  }

  getLocation = () => {
    const { geolocation } = navigator;

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
      this.setState({
        position,
      }, () => {
        this.getInfo();
      });
    });
  }

  handleQueryChange(query) {
    this.setState({
      query,
    }, () => {
      this.getInfo();
    });
  }

  render() {
    const { query, results } = this.state;

    const searchResults = results.map((transmitter) => {
      const { id } = transmitter;

      return (
        <li className="list-group-item" key={id}>
          <SearchResult transmitter={transmitter} key={id} />
        </li>
      );
    });

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <SearchForm
                query={query}
                onQueryChange={this.handleQueryChange}
              />
              <div className="card">
                <div className="card-header">Transmitters</div>
                <ul className="list-group list-group-flush">
                  { searchResults }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
