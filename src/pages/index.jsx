import React, { Component } from 'react';
import geodist from 'geodist';

import Layout from '../components/layout';
import SearchForm from '../components/Search/SearchForm';
import SearchResult from '../components/Search/SearchResult';

import transmitterListing from '../data/acma/transmitter_listing_20110702.json';

class IndexPage extends Component {
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

  handleQueryChange(query) {
    this.setState({
      query,
    }, () => {
      this.getInfo();
    });
  }

  getInfo = () => {
    const latlng = {
      lat: this.state.position.coords.latitude,
      lng: this.state.position.coords.longitude,
    };

    let transmitterListingSorted = transmitterListing.map((t) => {
      t.distance = geodist(
        latlng,
        { lat: t.latitude, lng: t.longitude },
        { exact: true, unit: 'km' },
      );
      return t;
    });
    transmitterListingSorted = transmitterListingSorted.sort((a, b) => a.distance - b.distance);

    if (this.state.query.length > 1) {
      transmitterListingSorted = transmitterListingSorted.filter((t) => {
        if (t.callsign === null) {
          return false;
        }
        return t.callsign.match(new RegExp(this.state.query, 'i')) !== null;
      });
    }

    this.setState({ results: transmitterListingSorted.slice(0, 100) });
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
      this.setState({
        position,
      }, () => {
        this.getInfo();
      });
    });
  }

  render() {
    const { query } = this.state;

    const searchResults = this.state.results.map((t) => {
      const { id } = t;

      return (
        <li className="list-group-item" key={id}>
          <SearchResult transmitter={t} key={id} />
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
